const { vendorExternals, miskExternals } = require("./externals")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const HTMLWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin")
const path = require("path")
const webpack = require("webpack")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
const { merge } = require("webpack-merge")

module.exports = (env, argv) => {
  const { dirname, miskTab } = argv

  if (
    "name" in miskTab &&
    "output_path" in miskTab &&
    "port" in miskTab &&
    "rawIndex" in miskTab &&
    "rawWebpackConfig" in miskTab &&
    "relative_path_prefix" in miskTab &&
    "slug" in miskTab &&
    "useWebpackBundleAnalyzer" in miskTab &&
    "useWebpackExternals" in miskTab &&
    "version" in miskTab
  ) {
    console.log("[MISK] Valid miskTab.json")
  } else {
    throw Error(`[MISK] Invalid miskTab.json.
      1) Install Misk-Web CLI ($ npm install -g @misk/cli)
          OR Update Misk-Web CLI ($ miskweb update)
      2) Regenerate build files ($ miskweb prebuild)`)
  }
  const {
    name,
    output_path,
    port,
    rawIndex,
    rawWebpackConfig,
    relative_path_prefix,
    slug,
    useWebpackBundleAnalyzer,
    useWebpackExternals
  } = miskTab
  const relativePathPrefix = relative_path_prefix
    ? relative_path_prefix
    : `_tab/${slug}/`
  const outputPath = output_path ? output_path : `lib/web/_tab/${slug}`

  const DefinePluginConfig = new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify("production")
  })

  const BundleAnalyzerPluginConfig = new BundleAnalyzerPlugin({
    analyzerMode: "static",
    reportFilename: `bundle-analyzer-report-${slug}.html`,
    statsFilename: `bundle-analyzer-report-${slug}.json`,
    generateStatsFile: true,
    openAnalyzer: false
  })

  const CopyWebpackPluginConfig = new CopyWebpackPlugin({
    patterns: [
      { from: "./node_modules/@misk/common/lib/web/" },
      { from: "./node_modules/@misk/core/lib/web/" },
      { from: "./node_modules/@misk/simpleredux/lib/web/" },
      { from: "./src/static/" }
    ]
  })

  const CopyRawIndexHtmlConfig = new CopyWebpackPlugin({
    patterns: [{ from: "./src/index.html" }]
  })

  const HTMLWebpackHarddiskPluginConfig = new HTMLWebpackHarddiskPlugin()

  const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    slug: `${slug}`,
    template: path.join(dirname, "/src/index.html"),
    filename: `index.html`,
    inject: "body",
    alwaysWriteToDisk: true
  })

  const baseConfigFields = {
    entry: {
      [`${relativePathPrefix}tab_${slug}`]: [
        "react-hot-loader/patch",
        path.join(dirname, "/src/index.tsx")
      ]
    },
    output: {
      filename: `[name].js`,
      path: path.join(dirname, outputPath),
      publicPath: "/",
      library: ["MiskTabs", name],
      libraryTarget: "umd",
      /**
       * library will try to bind to browser `window` variable
       * without below globalObject: library binding to browser `window`
       *    fails when run in Node or other non-browser
       */
      globalObject: "typeof self !== 'undefined' ? self : this"
    },
    devServer: {
      host: "0.0.0.0",
      port: port,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.(tsx|ts)$/,
          exclude: /node_modules/,
          loader: "ts-loader"
        },
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader"
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: "url-loader",
          options: {
            limit: 10000
          }
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      alias: {
        src: path.resolve(dirname, "./src/"),
        tests: path.resolve(dirname, "./tests/")
      }
    },
    mode: env !== "production" ? "development" : "production",
    plugins: [CopyWebpackPluginConfig]
      .concat(
        env !== "production"
          ? [new webpack.HotModuleReplacementPlugin()]
          : [DefinePluginConfig].concat(
              useWebpackBundleAnalyzer ? [BundleAnalyzerPluginConfig] : []
            )
      )
      .concat(
        env === "production" && rawIndex
          ? [CopyRawIndexHtmlConfig]
          : [HTMLWebpackPluginConfig, HTMLWebpackHarddiskPluginConfig]
      ),
    externals: useWebpackExternals
      ? { ...vendorExternals, ...miskExternals }
      : {}
  }

  return merge(baseConfigFields, rawWebpackConfig)
}
