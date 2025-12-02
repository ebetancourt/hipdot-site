import "tsx/esm";
import { renderToStaticMarkup } from "react-dom/server";

export default function (eleventyConfig) {
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
  eleventyConfig.addPassthroughCopy("assets/css/vendors");
  eleventyConfig.addPassthroughCopy("assets/css/custom.css");

  // Watch CSS for changes
  eleventyConfig.addWatchTarget("src/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["html", "md", "11ty.tsx", "11ty.ts"],
  };
}
