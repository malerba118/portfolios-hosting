import React from "react";
import { Box } from "@chakra-ui/react";
import { makeAutoObservable } from "mobx";
import apps from "./apps";

export class Node {
  constructor({ type, name, data, parent }) {
    this.id = Math.random();
    this.type = type;
    this.name = name;
    this.parent = parent;
    this.data = data;
  }
}

export const portfolioToNodes = (portfolio) => {
  const nodes = [];
  const desktop = new Node({ type: "folder", name: "Desktop" });
  const projects = new Node({
    type: "folder",
    name: "Projects",
    parent: desktop,
  });
  const about = new Node({
    type: "about",
    name: "About",
    parent: desktop,
    data: portfolio.data.content.about,
  });
  const contact = new Node({
    type: "contact",
    name: "Contact",
    parent: desktop,
    data: portfolio.data.content.contact,
  });
  nodes.push(desktop, about, projects, contact);
  portfolio.data.content.projects.forEach((project) => {
    nodes.push(
      new Node({
        type: "project",
        name: project.name,
        parent: projects,
        data: project,
      })
    );
  });
  return nodes;
};

export class FileSystem {
  constructor(nodes) {
    this.nodes = nodes;
  }

  root() {
    return this.nodes.filter((n) => n.type === "folder" && !n.parent)[0];
  }

  children(node) {
    return this.nodes.filter((n) => n.parent?.id === node?.id);
  }
}

class ApplicationInstance {
  constructor({ key, rect, node, app }) {
    this.key = key;
    this.rect = rect;
    this.node = node;
    this.app = app;
    this.mode = "normal"; // minimized, maximized
    makeAutoObservable(this);
  }

  setMode(mode) {
    this.mode = mode;
  }

  setNode(node) {
    this.node = node;
  }

  setRect(rect) {
    this.rect = rect;
  }
}

const getAppForNode = (node) => {
  if (node.type === "folder") {
    return apps.finder;
  } else if (node.type === "contact") {
    return apps.contact;
  } else if (node.type === "about") {
    return apps.about;
  } else if (node.type === "project") {
    return apps.project;
  }
};

class OperatingSystem {
  instances = [];

  constructor() {
    makeAutoObservable(this);
  }

  open(node) {
    const app = getAppForNode(node);
    const instanceKey = app.getInstanceKey({ node });
    const match = this.instances.find((inst) => inst.key === instanceKey);
    if (match) {
      match.setNode(node);
      if (match.mode === "minimized") {
        match.setMode("normal");
      }
      this.bringToFront(instanceKey);
    } else {
      const width = window.innerWidth * 0.6;
      const height = window.innerHeight * 0.66;
      this.instances.push(
        new ApplicationInstance({
          key: instanceKey,
          node,
          app,
          rect: {
            x: (window.innerWidth - width) / 2,
            y: (window.innerHeight - height) / 2,
            width,
            height,
          },
        })
      );
    }
    if (this.maximizedInstance) {
      this.normalize(this.maximizedInstance);
    }
  }

  maximize(node) {
    node.setMode("maximized");
  }

  normalize(node) {
    node.setMode("normal");
  }

  minimize(node) {
    node.setMode("minimized");
  }

  close(instanceKey) {
    const index = this.instances.findIndex((inst) => inst.key === instanceKey);
    this.instances.splice(index, 1);
  }

  bringToFront(instanceKey) {
    const inst = this.instances.find((inst) => inst.key === instanceKey);
    const next = this.instances.filter((inst) => inst.key !== instanceKey);
    if (inst) {
      next.push(inst);
    }
    this.instances = next;
  }

  get activeInstances() {
    return this.instances.filter((inst) => inst.mode === "normal");
  }

  get minimizedInstances() {
    return this.instances.filter((inst) => inst.mode === "minimized");
  }

  get maximizedInstance() {
    return this.instances.find((inst) => inst.mode === "maximized");
  }

  get selected() {
    const active = this.instances.filter((inst) => inst.mode !== "minimized");
    return active[active.length - 1];
  }

  reset() {
    this.instances = [];
  }
}

export const os = new OperatingSystem();
