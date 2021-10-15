import { types } from "mobx-state-tree";
import { nanoid } from "nanoid";
import { isEmpty, createDefaultNode } from "shared/components/RichtextViewer";

const EXAMPLE_PORTFOLIOS = {
  wedding: {
    id: "DroDGjtdHfVq2qeQPwAA",
    published: null,
    draftLastSaved: "2021-10-15T17:32:27.726Z",
    subdomain: "ellie-wedding",
    draft: {
      content: {
        contact: {
          socialLinks: {
            items: [],
          },
          email: {
            hidden: false,
            value: "",
          },
          phone: {
            value: "",
            hidden: false,
          },
        },
        projects: [
          {
            endDate: null,
            name: "Karime + Austin",
            description:
              '[{"type":"paragraph","children":[{"text":"When I met Karime & Austin, I could instantly feel the chemistry between them. They had a destination wedding in Brooklyn, coming all the way from Texas. We chatted and laughed   the whole way through their pre-wedding shoot as we walked through Brooklyn and admired the Manhattan skyline. Here they are, fully in love."}]}]',
            startDate: 1622520000000,
            summary: "Brooklyn, NY",
            images: {
              items: [
                {
                  height: 1147,
                  name: null,
                  crop: null,
                  type: "image/jpeg",
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/portfolios-8be96.appspot.com/o/users%2FfBNxurrfgUbbFOLTsDsp1xdPqjF3%2Fpublic%2Fraw-aexEhIyewd6irLHcUjNF7?alt=media&token=6c6c8f32-510a-4bf9-b0b1-9d122c94d521",
                  processedUrl: null,
                  zoom: null,
                  width: 1732,
                  id: "aexEhIyewd6irLHcUjNF7",
                },
                {
                  width: 1147,
                  crop: {
                    x: 0.4814954682779456,
                    width: 98.07637839879155,
                    height: 98.7546875,
                    y: 0.5078125,
                    unit: "%",
                  },
                  id: "oYLc5CZpKJcMk3ndMHIZq",
                  type: "image/jpeg",
                  zoom: 1,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/portfolios-8be96.appspot.com/o/users%2FfBNxurrfgUbbFOLTsDsp1xdPqjF3%2Fpublic%2Fraw-oYLc5CZpKJcMk3ndMHIZq?alt=media&token=4304a4f2-7ad5-41d6-9c01-8d270d2c15c8",
                  name: null,
                  height: 1732,
                  processedUrl:
                    "https://firebasestorage.googleapis.com/v0/b/portfolios-8be96.appspot.com/o/users%2FfBNxurrfgUbbFOLTsDsp1xdPqjF3%2Fpublic%2Fprocessed-oYLc5CZpKJcMk3ndMHIZq?alt=media&token=e258ec81-8f8d-4035-965c-9ceb091de928",
                },
                {
                  name: null,
                  height: 1732,
                  width: 1329,
                  type: "image/jpeg",
                  crop: {
                    width: 91.3421630859375,
                    y: 2.6781250000000245,
                    unit: "%",
                    height: 95.08984375,
                    x: 2.6631673177083357,
                  },
                  id: "MUavX2gSur451v1ra-onz",
                  zoom: 1,
                  processedUrl:
                    "https://firebasestorage.googleapis.com/v0/b/portfolios-8be96.appspot.com/o/users%2FfBNxurrfgUbbFOLTsDsp1xdPqjF3%2Fpublic%2Fprocessed-MUavX2gSur451v1ra-onz?alt=media&token=03bd061f-01da-4657-90f7-1ee0f597248b",
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/portfolios-8be96.appspot.com/o/users%2FfBNxurrfgUbbFOLTsDsp1xdPqjF3%2Fpublic%2Fraw-MUavX2gSur451v1ra-onz?alt=media&token=c28dab55-331c-4a19-96bd-f6a335e74eee",
                },
                {
                  height: 1732,
                  id: "pzCXlNryhOzFrIAuPofVf",
                  type: "image/jpeg",
                  crop: {
                    width: 91.326904296875,
                    x: 4.157511393229166,
                    y: 3.1859375000000254,
                    height: 95.21953125,
                    unit: "%",
                  },
                  width: 1329,
                  zoom: 1,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/portfolios-8be96.appspot.com/o/users%2FfBNxurrfgUbbFOLTsDsp1xdPqjF3%2Fpublic%2Fraw-pzCXlNryhOzFrIAuPofVf?alt=media&token=2802006c-23fa-456a-80d6-38ce273701d3",
                  processedUrl:
                    "https://firebasestorage.googleapis.com/v0/b/portfolios-8be96.appspot.com/o/users%2FfBNxurrfgUbbFOLTsDsp1xdPqjF3%2Fpublic%2Fprocessed-pzCXlNryhOzFrIAuPofVf?alt=media&token=124da867-548d-4a0e-8c4b-4fcc9aa849f3",
                  name: null,
                },
                {
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/portfolios-8be96.appspot.com/o/users%2FfBNxurrfgUbbFOLTsDsp1xdPqjF3%2Fpublic%2Fraw-3KuGfZjztNlCTtcdOp3H8?alt=media&token=489f150d-a8c4-4ac6-9c0b-826b568027bf",
                  processedUrl:
                    "https://firebasestorage.googleapis.com/v0/b/portfolios-8be96.appspot.com/o/users%2FfBNxurrfgUbbFOLTsDsp1xdPqjF3%2Fpublic%2Fprocessed-3KuGfZjztNlCTtcdOp3H8?alt=media&token=baca4952-9235-4715-bf20-52764411b5b1",
                  zoom: 1,
                  height: 1732,
                  id: "3KuGfZjztNlCTtcdOp3H8",
                  type: "image/jpeg",
                  width: 1329,
                  crop: {
                    height: 96.278125,
                    y: 1.8109375000000452,
                    x: 2.5166829427083313,
                    width: 93.109130859375,
                    unit: "%",
                  },
                  name: null,
                },
                {
                  processedUrl:
                    "https://firebasestorage.googleapis.com/v0/b/portfolios-8be96.appspot.com/o/users%2FfBNxurrfgUbbFOLTsDsp1xdPqjF3%2Fpublic%2Fprocessed-PttgIVPlx_cQqCv7vfDUN?alt=media&token=2ccf25fb-959d-4e5b-8c71-5ae56019c042",
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/portfolios-8be96.appspot.com/o/users%2FfBNxurrfgUbbFOLTsDsp1xdPqjF3%2Fpublic%2Fraw-PttgIVPlx_cQqCv7vfDUN?alt=media&token=0048eb3a-ea79-4e76-a154-cf2ab48e2c60",
                  id: "PttgIVPlx_cQqCv7vfDUN",
                  height: 1329,
                  zoom: 1,
                  type: "image/jpeg",
                  crop: {
                    unit: "%",
                    y: 3.31484375,
                    x: 1.2581480061349692,
                    height: 93.01640625,
                    width: 96.83126437883438,
                  },
                  width: 1732,
                  name: null,
                },
              ],
            },
            id: "fTV--61eH1WqbtZeP3yP-",
          },
        ],
        about: {
          resume: null,
          images: {
            items: [
              {
                processedUrl:
                  "https://firebasestorage.googleapis.com/v0/b/portfolios-8be96.appspot.com/o/users%2FfBNxurrfgUbbFOLTsDsp1xdPqjF3%2Fpublic%2Fprocessed-8YaITZIj9uCja-x2y6eZ9?alt=media&token=0172cc51-1652-4899-b759-a3736014b1fb",
                zoom: 1,
                type: "image/jpeg",
                crop: {
                  y: 9.4157958984375,
                  unit: "%",
                  height: 65.40458374023437,
                  x: 0,
                  width: 100,
                },
                height: 2990,
                name: "pexels-andrea-piacquadio-774909.jpg",
                id: "8YaITZIj9uCja-x2y6eZ9",
                rawUrl:
                  "https://firebasestorage.googleapis.com/v0/b/portfolios-8be96.appspot.com/o/users%2FfBNxurrfgUbbFOLTsDsp1xdPqjF3%2Fpublic%2Fraw-8YaITZIj9uCja-x2y6eZ9?alt=media&token=5f5a3352-5297-455b-977f-23a0a4874927",
                width: 1992,
              },
            ],
          },
          title: "Wedding Photographer",
          logo: {
            items: [],
          },
          lastName: "Gutierrez",
          description:
            '[{"type":"paragraph","children":[{"text":"Hi, I\'m Ellie! I\'m a wedding photographer based in Brooklyn, NY. At heart, I\'m a storyteller and I want to capture your story. I promise these photos will only grow more valuable over the years and your story will be timeless."}]}]',
          summary: "I write love stories using pixels.",
          firstName: "Ellie",
        },
      },
      templateSettingsMap: {
        skrol: {
          paragraphFont: "Lato",
          palette: "purplePink",
          headingFont: "Montserrat",
        },
        gallery: {
          palette: "gray",
          paragraphFont: "EB Garamond",
          headingFont: "Crimson Text",
        },
        venice: {
          palette: "ocean",
          paragraphFont: "Ubuntu",
          headingFont: "Ubuntu",
        },
        madrid: {
          headingFont: "Montserrat",
          palette: "desert",
          paragraphFont: "Lato",
        },
        os: {
          palette: "gray",
          paragraphFont: "Ubuntu Mono",
          headingFont: "Ubuntu Mono",
        },
      },
      template: "gallery",
    },
    advertisementsDisabled: true,
    owner: "fBNxurrfgUbbFOLTsDsp1xdPqjF3",
  },
};

export const getPreviewablePortfolio = ({ name }) => {
  const folio = EXAMPLE_PORTFOLIOS["wedding"];
  const folioCopy = {
    ...folio,
    draft: {
      ...folio.draft,
      template: name,
    },
  };
  return processPortfolio(folioCopy, { useDraft: true });
};

export const templates = {
  venice: {
    label: "Venice",
    img: `/templates/venice.png`,
    defaults: {
      headingFont: "Ubuntu",
      paragraphFont: "Ubuntu",
      palette: "gray",
    },
    palettes: ["desert", "gray"],
    locked: false,
  },
  madrid: {
    label: "Madrid",
    img: `/templates/madrid.png`,
    defaults: {
      headingFont: "Montserrat",
      paragraphFont: "Lato",
      palette: "desert",
    },
    locked: false,
    palettes: ["desert", "gray"],
  },
  skrol: {
    label: "Skrol",
    img: `/templates/skrol.png`,
    defaults: {
      headingFont: "Montserrat",
      paragraphFont: "Lato",
      palette: "purplePink",
    },
    palettes: ["blackRed", "purplePink", "blueGreen"],
    locked: true,
  },
  os: {
    label: "Operating System",
    img: `/templates/os.png`,
    defaults: {
      headingFont: "Ubuntu Mono",
      paragraphFont: "Ubuntu Mono",
      palette: "gray",
      wallpaper: {
        items: [
          {
            id: nanoid(),
            name: "wallpaper-light.jpg",
            type: "image/jpeg",
            rawUrl: "https://vernos.us/templates/os/wallpaper-light.jpg",
          },
        ],
      },
    },
    palettes: ["gray", "desert", "pink"],
    locked: true,
  },
  gallery: {
    label: "Gallery",
    img: `/templates/gallery.png`,
    defaults: {
      headingFont: "Crimson Text",
      paragraphFont: "EB Garamond",
      palette: "gray",
    },
    palettes: ["gray", "pink", "desert"],
    locked: false,
  },
};

// SCHEMAS
const hideable = (model) => {
  const _Model = types.model(model.name, {
    hidden: types.optional(types.boolean, false),
    value: model,
  });

  const Model = types.snapshotProcessor(_Model, {
    postProcessor(snapshot) {
      if (snapshot.hidden) {
        return undefined;
      } else {
        return snapshot.value;
      }
    },
  });
  return types.optional(Model, {});
};

// All percentages
export const Crop = types.model("Crop", {
  unit: types.string,
  x: types.number,
  y: types.number,
  width: types.number,
  height: types.number,
});

export const Media = types.model("Media", {
  id: types.string,
  type: types.maybeNull(types.string),
  name: types.maybeNull(types.string),
  rawUrl: types.maybeNull(types.string),
  processedUrl: types.maybeNull(types.string),
  crop: types.maybeNull(Crop),
  zoom: types.maybeNull(types.number),
  width: types.maybeNull(types.number),
  height: types.maybeNull(types.number),
});

export const Medias = types.model("Medias", {
  items: types.array(Media),
});

const Resume = types.model("Resume", {
  name: types.string,
  url: types.string,
});

export const _About = types.model("About", {
  firstName: types.optional(types.string, ""),
  lastName: types.optional(types.string, ""),
  title: types.optional(types.string, ""),
  summary: types.optional(types.string, ""),
  description: types.optional(types.string, ""),
  images: types.optional(Medias, { items: [] }),
  logo: types.optional(Medias, { items: [] }),
  resume: types.maybeNull(Resume),
});

const About = types.snapshotProcessor(_About, {
  postProcessor(snapshot) {
    return {
      ...snapshot,
      firstName: snapshot.firstName || "Firstname",
      lastName: snapshot.lastName || "Lastname",
      title: snapshot.title || "Your occupation",
      summary: snapshot.summary || "Tell us about you in a sentence",
      description: !isEmpty(snapshot.description)
        ? snapshot.description
        : createDefaultNode("Tell us all about you"),
      images: {
        items: snapshot.images.items.length
          ? snapshot.images.items
          : [DEFAULT_MEDIA],
      },
    };
  },
});

export const SocialLink = types.model("SocialLink", {
  id: types.string,
  platform: types.maybeNull(types.string),
  url: types.maybeNull(types.string),
});

export const SocialLinks = types.model("SocialLinks", {
  items: types.array(SocialLink),
});

export const Contact = types.model("Contact", {
  email: hideable(types.optional(types.string, "")),
  phone: hideable(types.optional(types.string, "")),
  socialLinks: types.optional(SocialLinks, { items: [] }),
});

export const _Project = types.model("Project", {
  id: types.string,
  name: types.optional(types.string, ""),
  summary: types.optional(types.string, ""),
  description: types.optional(types.string, ""),
  images: types.optional(Medias, { items: [] }),
  startDate: types.optional(types.maybeNull(types.Date), null),
  endDate: types.optional(types.maybeNull(types.Date), null),
});

const Project = types.snapshotProcessor(_Project, {
  postProcessor(snapshot) {
    return {
      ...snapshot,
      name: snapshot.name || "Project Name",
      summary: snapshot.summary || "Tell us about your project in a sentence",
      description: !isEmpty(snapshot.description)
        ? snapshot.description
        : createDefaultNode("Tell us all about your project"),
      images: {
        items: snapshot.images.items.length
          ? snapshot.images.items
          : [DEFAULT_MEDIA],
      },
    };
  },
});

export const Content = types.model("Content", {
  about: types.optional(About, {}),
  contact: types.optional(Contact, {}),
  projects: types.optional(types.array(Project), []),
});

// const TemplateSettings = types.model("TemplateSettings", {
//   headingFont: types.string,
//   paragraphFont: types.string,
//   palette: types.string,
// });

// const TemplateSettingsMap = types.model("TemplateSettingsMap", {
//   madrid: types.optional(TemplateSettings, templates.madrid.defaults),
//   venice: types.optional(TemplateSettings, templates.venice.defaults),
//   skrol: types.optional(TemplateSettings, templates.skrol.defaults),
//   os: types.optional(TemplateSettings, templates.os.defaults),
// });

const templateModels = {
  os: types.snapshotProcessor(
    types.model("OsSettings", {
      headingFont: types.optional(
        types.string,
        templates.os.defaults.headingFont
      ),
      paragraphFont: types.optional(
        types.string,
        templates.os.defaults.paragraphFont
      ),
      palette: types.optional(types.string, templates.os.defaults.palette),
      wallpaper: types.optional(Medias, templates.os.defaults.wallpaper),
    }),
    {
      postProcessor(snapshot) {
        return {
          ...snapshot,
          wallpaper: {
            items: snapshot.wallpaper.items.length
              ? snapshot.wallpaper.items
              : [DEFAULT_MEDIA],
          },
        };
      },
    }
  ),
  madrid: types.model("MadridSettings", {
    headingFont: types.optional(
      types.string,
      templates.madrid.defaults.headingFont
    ),
    paragraphFont: types.optional(
      types.string,
      templates.madrid.defaults.paragraphFont
    ),
    palette: types.optional(types.string, templates.madrid.defaults.palette),
  }),

  skrol: types.model("SkrolSettings", {
    headingFont: types.optional(
      types.string,
      templates.skrol.defaults.headingFont
    ),
    paragraphFont: types.optional(
      types.string,
      templates.skrol.defaults.paragraphFont
    ),
    palette: types.optional(types.string, templates.skrol.defaults.palette),
  }),
  venice: types.model("VeniceSettings", {
    headingFont: types.optional(
      types.string,
      templates.venice.defaults.headingFont
    ),
    paragraphFont: types.optional(
      types.string,
      templates.venice.defaults.paragraphFont
    ),
    palette: types.optional(types.string, templates.venice.defaults.palette),
  }),
  gallery: types.model("GallerySettings", {
    headingFont: types.optional(
      types.string,
      templates.gallery.defaults.headingFont
    ),
    paragraphFont: types.optional(
      types.string,
      templates.gallery.defaults.paragraphFont
    ),
    palette: types.optional(types.string, templates.gallery.defaults.palette),
  }),
};

const TemplateSettingsMap = types
  .model("TemplateSettingsMap", {
    madrid: types.optional(templateModels.madrid, {}),
    venice: types.optional(templateModels.venice, {}),
    skrol: types.optional(templateModels.skrol, {}),
    gallery: types.optional(templateModels.gallery, {}),
    os: types.optional(templateModels.os, {}),
  })
  .actions((self) => ({
    set: (patch) => {
      Object.entries(patch).forEach(([key, val]) => {
        if (val !== undefined) {
          self[key] = val;
        }
      });
    },
  }));

export const _PortfolioData = types.model("PortfolioData", {
  content: types.optional(Content, {}),
  template: types.optional(types.string, "madrid"),
  templateSettingsMap: types.optional(TemplateSettingsMap, {}),
});

const PortfolioData = types.snapshotProcessor(_PortfolioData, {
  postProcessor(snapshot) {
    return {
      ...snapshot,
      templateSettings: snapshot.templateSettingsMap[snapshot.template],
    };
  },
});

const _Portfolio = types.model("Portfolio", {
  id: types.string,
  subdomain: types.maybeNull(types.string),
  draft: PortfolioData,
  draftLastSaved: types.maybeNull(types.string),
  published: types.maybeNull(PortfolioData),
  advertisementsDisabled: types.maybe(types.boolean),
});

const PublishedPortfolio = types.snapshotProcessor(_Portfolio, {
  postProcessor(snapshot) {
    const data = snapshot.published;
    delete snapshot.draft;
    delete snapshot.published;
    return {
      ...snapshot,
      data,
    };
  },
});

const DraftPortfolio = types.snapshotProcessor(_Portfolio, {
  postProcessor(snapshot) {
    const data = snapshot.draft;
    delete snapshot.draft;
    delete snapshot.published;
    return {
      ...snapshot,
      data,
    };
  },
});

export const processPortfolio = (portfolio, { useDraft = false } = {}) => {
  if (!portfolio) return portfolio;
  if (useDraft) {
    return DraftPortfolio.create(portfolio).toJSON();
  } else {
    return PublishedPortfolio.create(portfolio).toJSON();
  }
};

const DEFAULT_MEDIA = Media.create({
  id: nanoid(),
  rawUrl: "/image-unavailable.jpg",
  processedUrl: null,
  crop: null,
  zoom: null,
  width: null,
  height: null,
}).toJSON();
