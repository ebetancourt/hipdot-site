import "tsx/esm";
import { execSync } from "node:child_process";
import { renderToStaticMarkup } from "react-dom/server";

const pathPrefix = process.env.PATH_PREFIX || "/";
const isProduction = process.env.NODE_ENV === "production";
const tailwindCmd = `npx tailwindcss -i ./src/tailwind.css -o ./assets/css/style.css${isProduction ? " --minify" : ""}`;

export default function (eleventyConfig) {
  // Build Tailwind CSS before each Eleventy build
  eleventyConfig.on("eleventy.before", () => {
    execSync(tailwindCmd, { stdio: "inherit" });
  });

  // TypeScript/TSX support
  eleventyConfig.addExtension(["11ty.tsx", "11ty.ts"], {
    key: "11ty.js",
    compile: function () {
      return async function (data) {
        let content = await this.defaultRenderer(data);
        return renderToStaticMarkup(content);
      };
    },
  });

  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("assets/img");
  eleventyConfig.addPassthroughCopy("assets/fonts");
  eleventyConfig.addPassthroughCopy("assets/js");
  eleventyConfig.addPassthroughCopy("assets/css");

  // Prevent infinite loop: Tailwind writes style.css in eleventy.before,
  // which triggers passthrough copy, which would re-trigger a build.
  eleventyConfig.watchIgnores.add("assets/css/style.css");

  return {
    pathPrefix,
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["html", "md", "11ty.tsx", "11ty.ts"],
  };
}
