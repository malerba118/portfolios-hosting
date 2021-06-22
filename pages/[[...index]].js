import React, { useEffect } from "react";
import nookies from "nookies";
import * as auth from "../server/utils/auth";
import Database from "server/services/database";
import * as templates from "shared/components/templates";
import { getSubdomain } from "shared/utils/url";

const isDev = process.env.NODE_ENV === "development";

export const getServerSideProps = async (ctx) => {
  try {
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
        portfolio: portfolio.draft,
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
  const Template = getTemplateComponent(portfolio?.template);

  if (portfolio && Template) {
    return <Template portfolio={portfolio} />;
  }
  return <h1>Not Found</h1>;
};

export default Home;
