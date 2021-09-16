export const getSubdomain = (host) => {
  return host.split(".").slice(0, -2).join(".");
};

export const getAppUrl = () => {
  return process.env.NEXT_PUBLIC_EDITOR_URL;
};
