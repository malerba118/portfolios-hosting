import React, { useEffect } from "react";
import nookies from "nookies";
import * as auth from "../server/utils/auth";
import Database from "server/services/database";
import * as templates from "shared/templates";
import { getSubdomain } from "shared/utils/url";
import useData from "shared/hooks/useData";
import { useRouter } from "next/router";
import { getPreviewablePortfolio } from "shared/utils/data";

const isDev = process.env.NODE_ENV === "development";

export const getServerSideProps = async (ctx) => {
  try {
    if (ctx.query.edit) {
      return {
        props: {
          portfolio: null,
        },
      };
    }
    if (ctx.query.template && ctx.query.version) {
      return {
        props: {
          portfolio: getPreviewablePortfolio({
            name: ctx.query.template,
            version: ctx.query.version,
          }),
        },
      };
    }
    const db = await Database({ token: null });
    const subdomain = isDev
      ? ctx.query.subdomain
      : getSubdomain(ctx.req.headers.host);
    let portfolio;
    if (subdomain) {
      portfolio = await db.portfolios.getBySubdomain(subdomain);
    }
    return {
      props: {
        portfolio: portfolio.published,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: { portfolio: null },
    };
  }
};

const getTemplateComponent = (template) => {
  const templateVersions = templates[template?.name];
  if (!templateVersions) return null;
  const TemplateComponent = templateVersions[template?.version];
  if (!TemplateComponent) return null;
  return TemplateComponent;
};

const Home = ({ portfolio }) => {
  const draft = useData();
  const router = useRouter();

  if (router.query.edit) {
    portfolio = draft;
    if (!portfolio) {
      return null;
    }
  }

  const Template = getTemplateComponent(portfolio?.template);

  if (portfolio && Template) {
    return <Template key={Math.random()} portfolio={portfolio} />;
  }
  return <h1>Not Found</h1>;
};

export default Home;
