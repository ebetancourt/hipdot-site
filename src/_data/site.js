const pathPrefix = process.env.PATH_PREFIX || "";

export default {
  title: "HipDot Media",
  description: "Smart Solutions for a Modern Era",
  url: "https://ebetancourt.github.io/hipdot-site",
  pathPrefix,
  asset(path) {
    return `${pathPrefix}${path}`;
  },
};
