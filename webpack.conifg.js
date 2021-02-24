const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: "./public/index.js",
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  mode: "production",
  plugins: [
    new WebpackPwaManifest({
      // the name of the generated manifest file
      filename: "manifest.json",

      // not using webpack to generate our html
      // set inject to false
      inject: false,

      // set fingerprints to `false` to make the names of the generated
      // files predictable making it easier to refer to them in our code
      fingerprints: false,

      name: "Budget Tracker App",
      short_name: "Budget Tracker App",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      start_url: "/",
      display: "standalone",

      icons: [
        {
          src: path.resolve(
            __dirname,
            "public/icons/icon-192x192.png"
            ),
          // the plugin will generate an image for each size
          size: "192x192"
        },
        {
            src: path.resolve(
              __dirname,
              "public/icons/icon-152x152.png"
              ),
            size: "152x152"
          }
      ]
    })
  ]
};

module.exports = config;
