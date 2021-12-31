const { optimize } = require("svgo");
const cheerio = require("cheerio");
const framework = process.env.npm_package_config_framework || "vue";
console.log(framework);
/**
 * Convert string to CamelCase.
 * @param {string} str - A string.
 * @returns {string}
 */
function CamelCase(str) {
  return str.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase());
}

/**
 * Optimize SVG with `svgo`.
 * @param {string} svg - An SVG string.
 * @returns {Promise<string>}
 */
function optimizeSvg(svg) {
  return new Promise((resolve) => {
    let res = optimize(svg, {
      plugins: [
        "removeTitle",
        {
          name: "removeAttrs",
          params: {
            attrs: "(fill|stroke.*)",
          },
        },
        // 1.x version config
        // { removeTitle: true },
        // { removeAttrs: { attrs: "(fill|stroke.*)" } },
        // // disabled
        // { sortAttrs: false },
        // { mergePaths: false },
        // { collapseGroups: false },
        // { removeStyleElement: false },
        // { convertShapeToPath: false },
        // { removeRasterImages: false },
        // { transformsWithOnePath: false },
        // { removeUnknownsAndDefaults: false },
        // { removeUselessStrokeAndFill: false },
      ],
    });
    resolve(res.data);
  });
}

/**
 * remove SVG element.
 * @param {string} svg - An SVG string.
 * @returns {string}
 */
function removeSVGElement(svg) {
  const $ = cheerio.load(svg);
  return $("body")
    .children()
    .html();
}

/**
 * Process SVG string.
 * @param {string} svg - An SVG string.
 * @param {Promise<string>}
 */
async function processSvg(svg) {
  const optimized = await optimizeSvg(svg)
    // remove semicolon inserted by prettier
    // because prettier thinks it's formatting JSX not HTML
    .then((svg) => svg.replace(/;/g, ""))
    .then(removeSVGElement)
    .then((svg) =>
      framework === "react"
        ? svg.replace(
            /([a-z]+)-([a-z]+)=/g,
            (_, a, b) => `${a}${CamelCase(b)}=`
          )
        : svg
    );
  return optimized;
}

module.exports = processSvg;
