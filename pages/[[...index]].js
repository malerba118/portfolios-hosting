import React, { useEffect } from "react";
import nookies from "nookies";
import * as auth from "../server/utils/auth";
import Database from "server/services/database";
import * as templates from "shared/templates";
import { getSubdomain, getDomain } from "shared/utils/url";
import useData from "shared/hooks/useData";
import { useRouter } from "next/router";
import { getPreviewablePortfolio, processPortfolio } from "shared/utils/data";
import Seo from "shared/components/Seo";
import NotFound from "shared/components/NotFound";

const isLocal = process.env.NEXT_PUBLIC_IS_LOCAL === "true";

export const getServerSideProps = async (ctx) => {
  try {
    if (ctx.query.edit && ctx.query.edit !== "false") {
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
            template: ctx.query.template,
            persona: ctx.query.persona,
          }),
        },
      };
    }
    const db = await Database({ token: null });
    // const subdomain = isLocal
    //   ? ctx.query.subdomain
    //   : getSubdomain(ctx.req.headers.host);

    const domain = getDomain(ctx.req.headers.host);

    let portfolio;
    if (!isLocal && domain !== "vernos.us") {
      portfolio = await db.portfolios.getByDomain(domain);
    } else {
      const subdomain = isLocal
        ? ctx.query.subdomain
        : getSubdomain(ctx.req.headers.host);
      if (subdomain) {
        portfolio = await db.portfolios.getBySubdomain(subdomain);
      }
    }

    return {
      props: {
        portfolio: processPortfolio(portfolio),
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
  const editablePortfolio = useData();
  const router = useRouter();
  const draftMode = router.query.edit && router.query.edit !== "false";
  if (router.query.edit && router.query.edit !== "false") {
    if (!editablePortfolio) {
      return null;
    }
    portfolio = processPortfolio(editablePortfolio, { useDraft: true });
  }

  const Template = getTemplateComponent({
    name: portfolio?.data?.template,
  });

  if (portfolio && Template) {
    // force remount when updating
    return (
      <>
        <Seo portfolio={portfolio} />
        <Template
          key={Math.random()}
          portfolio={portfolio}
          draftMode={draftMode}
        />
      </>
    );
  }
  return <NotFound />;
};

export default Home;
