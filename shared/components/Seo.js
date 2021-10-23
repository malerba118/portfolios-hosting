import React from "react";
import { NextSeo } from "next-seo";

const Seo = ({ portfolio }) => {
  const about = portfolio.data.content.about;
  const media = about.images.items[0];
  return (
    <NextSeo
      title={`${about.firstName} ${about.lastName} - ${about.title}`}
      description={about.summary}
      openGraph={{
        url: portfolio.subdomain
          ? `https://${portfolio.subdomain}.vernos.us`
          : `https://.vernos.app`,
        title: `${about.firstName} ${about.lastName} - ${about.title}`,
        description: about.summary,
        images: [
          {
            url: media?.processedUrl || media?.rawUrl,
            width: media.width,
            height: media.height,
            alt: media.name,
            type: media.type,
          },
        ],
        site_name: `${about.firstName} ${about.lastName} - ${about.title}`,
      }}
    />
  );
};

export default Seo;
