import { Stack, Link, IconButton, Tooltip } from "@chakra-ui/react";
import { usePortfolio } from "./PortfolioProvider";
import {
  BsMedium,
  BsFacebook,
  BsTwitter,
  BsPinterest,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";

const PLATFORM_ICONS = {
  facebook: BsFacebook,
  medium: BsMedium,
  twitter: BsTwitter,
  pinterest: BsPinterest,
  instagram: BsInstagram,
  github: BsGithub,
};

const PLATFORM_LABELS = {
  facebook: "Facebook",
  medium: "Medium",
  twitter: "Twitter",
  pinterest: "Pinterest",
  instagram: "Instagram",
  github: "GitHub",
};

const SocialLinks = ({ tooltipPlacement, ...otherProps }) => {
  const portfolio = usePortfolio();
  const contact = portfolio.data.content.contact;
  return (
    <Stack {...otherProps}>
      {contact.socialLinks.items
        .filter((socialLink) => !!socialLink.platform)
        .map((socialLink) => {
          const PlatformIcon = PLATFORM_ICONS[socialLink.platform];
          return (
            <Tooltip
              bgColor="primary.700"
              color="primary.100"
              placement={tooltipPlacement}
              label={PLATFORM_LABELS[socialLink.platform]}
            >
              <IconButton
                onClick={() => {
                  if (socialLink.url) {
                    let url = socialLink.url;
                    if (
                      !url.startsWith("http://") &&
                      !url.startsWith("https://")
                    ) {
                      url = "https://" + url;
                    }
                    window.open(url, "_blank");
                  }
                }}
                colorScheme="primary"
                size="sm"
                rounded="100%"
                icon={<PlatformIcon />}
                key={socialLink.id}
              />
            </Tooltip>
          );
        })}
    </Stack>
  );
};

export default SocialLinks;
