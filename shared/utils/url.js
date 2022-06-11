export const getSubdomain = (host) => {
  return host.split(".").slice(0, -2).join(".");
};

export const getDomain = (host) => {
  const segments = host.split(".");
  return segments.slice(segments.length - 2, segments.length).join(".");
};

export const getAppUrl = () => {
  return process.env.NEXT_PUBLIC_EDITOR_URL;
};
