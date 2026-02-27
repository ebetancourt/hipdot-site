const pathPrefix = process.env.PATH_PREFIX || "";

export default {
  title: "HipDot Media",
  description: "Digital Consulting to Drive Strategic Growth",
  url: "https://ebetancourt.github.io/hipdot-site",
  pathPrefix,
  asset(path) {
    return `${pathPrefix}${path}`;
  },
};
