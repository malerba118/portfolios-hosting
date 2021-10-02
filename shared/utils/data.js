import { types } from "mobx-state-tree";
import { nanoid } from "nanoid";
import { isEmpty, createDefaultNode } from "shared/components/RichtextViewer";

export const getPreviewablePortfolio = ({ name }) => {
  return processPortfolio(
    {
      id: "123",
      advertisementsDisabled: true,
      subdomain: null,
      published: null,
      draft: {
        template: name,
        content: {
          about: {
            title: "Software Engineer",
            summary: "I build apps and libraries ",
            description:
              '[{"type":"paragraph","children":[{"text":"Hi, I\'m Austin and I\'m a web developer. I\'ve been building web apps and libraries for 8 years. I attended the Rochester Institute of Technology in New York from 2012-2017 and graduated with a BS in Comuter Science and a 3.95 GPA. After college I began my web development career at Target where I worked on a variety of teams over the course of 3 years. In 2020 I decided to move on from Target and began working for a startup that is developing a web-based video editor."}]},{"type":"paragraph","children":[{"text":""}]}]',
            firstName: "Austin",
            lastName: "Malerba",
            images: {
              items: [
                {
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/portfolios-8be96.appspot.com/o/users%2F23ZIQKNd42bJydGnIlYFb6Btnq43%2Fpublic%2Fraw-AuJ85wr9S6Eo8ccOEoXWp?alt=media&token=616c300d-9070-4149-aa01-118e05b3de37",
                  width: 1155,
                  processedUrl:
                    "https://firebasestorage.googleapis.com/v0/b/portfolios-8be96.appspot.com/o/users%2F23ZIQKNd42bJydGnIlYFb6Btnq43%2Fpublic%2Fprocessed-AuJ85wr9S6Eo8ccOEoXWp?alt=media&token=1c9c27c9-2755-4a9f-943d-a12fc1f9483b",
                  id: "AuJ85wr9S6Eo8ccOEoXWp",
                  height: 1732,
                  zoom: 1,
                  crop: {
                    height: 43.95,
                    y: 0,
                    width: 84.58028340840839,
                    x: 15.41971659159157,
                    unit: "%",
                  },
                },
              ],
            },
            resume: null,
            logo: {
              items: [],
            },
          },
          projects: [
            {
              startDate: null,
              id: "SAQrywURBzFQ4I_cyo78q",
              endDate: null,
              name: "",
              summary: "",
              description: "",
              images: {
                items: [],
              },
            },
            {
              endDate: 1619848800000,
              id: "0.14531344198085439",
              name: "Iconik Studio",
              startDate: 1609484400000,
              summary: "Svg Editor",
              images: {
                items: [
                  {
                    id: "DIIF4O0vKLxzM-hGNYqte",
                    rawUrl:
                      "https://firebasestorage.googleapis.com/v0/b/portfolios-8be96.appspot.com/o/users%2F23ZIQKNd42bJydGnIlYFb6Btnq43%2Fpublic%2Fraw-DIIF4O0vKLxzM-hGNYqte?alt=media&token=d130823c-142a-4c7e-8664-2924e9789f5f",
                    crop: null,
                    width: 920,
                    zoom: null,
                    height: 640,
                    processedUrl: null,
                  },
                  {
                    height: 1920,
                    processedUrl:
                      "https://firebasestorage.googleapis.com/v0/b/portfolios-8be96.appspot.com/o/users%2F23ZIQKNd42bJydGnIlYFb6Btnq43%2Fpublic%2Fprocessed-vgVKU9HmKiGK1m2XzxoLn?alt=media&token=be9b1935-2554-4872-82bd-7c7e49cc7eb8",
                    rawUrl:
                      "https://firebasestorage.googleapis.com/v0/b/portfolios-8be96.appspot.com/o/users%2F23ZIQKNd42bJydGnIlYFb6Btnq43%2Fpublic%2Fraw-vgVKU9HmKiGK1m2XzxoLn?alt=media&token=f7062001-cdd0-42f6-8802-f34c2b863715",
                    width: 1439,
                    zoom: 1,
                    id: "vgVKU9HmKiGK1m2XzxoLn",
                    crop: {
                      width: 100,
                      unit: "%",
                      height: 49.35390624999999,
                      y: 22.715624999999978,
                      x: 0,
                    },
                  },
                ],
              },
              description: '[{"type":"paragraph","children":[{"text":""}]}]',
            },
            {
              endDate: null,
              name: "Engagement",
              summary: "Got engaged",
              startDate: 1590991200000,
              description:
                '[{"type":"paragraph","children":[{"text":"Got engaged"}]}]',
              images: {
                items: [
                  {
                    zoom: 1,
                    id: "xM5RunUGXLs3B_QeFERTv",
                    height: 1732,
                    crop: {
                      y: 0,
                      width: 100,
                      unit: "%",
                      height: 63.7625,
                      x: 0,
                    },
                    processedUrl:
                      "https://firebasestorage.googleapis.com/v0/b/portfolios-8be96.appspot.com/o/users%2F23ZIQKNd42bJydGnIlYFb6Btnq43%2Fpublic%2Fprocessed-xM5RunUGXLs3B_QeFERTv?alt=media&token=0e40a902-b166-4995-a297-6ed7a03c2063",
                    rawUrl:
                      "https://firebasestorage.googleapis.com/v0/b/portfolios-8be96.appspot.com/o/users%2F23ZIQKNd42bJydGnIlYFb6Btnq43%2Fpublic%2Fraw-xM5RunUGXLs3B_QeFERTv?alt=media&token=c971a728-6250-4438-9386-3bdc7e9b93b4",
                    width: 1155,
                  },
                ],
              },
              id: "0.5596382356762701",
            },
          ],
          contact: {
            email: {
              hidden: false,
              value: "austin.malerba@gmail.com",
            },
            phone: {
              hidden: false,
              value: "915-867-5309",
            },
          },
        },
      },
    },
    { useDraft: true }
  );
};

export const templates = {
  venice: {
    label: "Venice",
    defaults: {
      headingFont: "Ubuntu",
      paragraphFont: "Ubuntu",
      palette: "ocean",
    },
  },
  madrid: {
    label: "Madrid",
    defaults: {
      headingFont: "Montserrat",
      paragraphFont: "Lato",
      palette: "desert",
    },
  },
  skrol: {
    label: "Skrol",
    defaults: {
      headingFont: "Montserrat",
      paragraphFont: "Lato",
      palette: "desert",
    },
  },
  os: {
    label: "Operating System",
    defaults: {
      headingFont: "Ubuntu Mono",
      paragraphFont: "Ubuntu Mono",
      palette: "desert",
    },
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

export const Contact = types.model("Contact", {
  email: hideable(types.optional(types.string, "")),
  phone: hideable(types.optional(types.string, "")),
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

const TemplateSettings = types.model("TemplateSettings", {
  headingFont: types.string,
  paragraphFont: types.string,
  palette: types.string,
});

const TemplateSettingsMap = types.model("TemplateSettingsMap", {
  madrid: types.optional(TemplateSettings, templates.madrid.defaults),
  venice: types.optional(TemplateSettings, templates.venice.defaults),
  skrol: types.optional(TemplateSettings, templates.skrol.defaults),
  os: types.optional(TemplateSettings, templates.os.defaults),
});

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
