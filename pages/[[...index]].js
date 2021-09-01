import React, { useEffect } from "react";
import nookies from "nookies";
import * as auth from "../server/utils/auth";
import Database from "server/services/database";
import * as templates from "shared/templates";
import { getSubdomain } from "shared/utils/url";
import useData from "shared/hooks/useData";
import { useRouter } from "next/router";
import { getPreviewablePortfolio, processPortfolio } from "shared/utils/data";

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
    if (ctx.query.template) {
      return {
        props: {
          portfolio: getPreviewablePortfolio({
            name: ctx.query.template,
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
        portfolio: processPortfolio(portfolio.published),
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: { portfolio: null },
    };
  }
};

const getTemplateComponent = ({ name }) => {
  const TemplateComponent = templates[name];
  return TemplateComponent || null;
};

const Home = ({ portfolio }) => {
  const draft = useData();
  const router = useRouter();

  if (router.query.edit) {
    portfolio = processPortfolio(draft);
    if (!portfolio) {
      return null;
    }
  }

  const Template = getTemplateComponent({
    name: portfolio?.template,
  });

  if (portfolio && Template) {
    // force remount when updating
    return <Template key={Math.random()} portfolio={portfolio} />;
  }
  return <h1>Not Found</h1>;
};

export default Home;
