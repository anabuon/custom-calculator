const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const PreloadWebpackPlugin = require('preload-webpack-plugin')

const isProd = process.argv.indexOf('-p') !== -1

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    bundle: './src/js/index.js',
    style: './src/less/style.less',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src/'),
    port: 9001,
    hot: true,
    compress: true,
    progress: true,
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          {
            loader: 'less-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      include: 'allChunks',
    }),
  ],
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
    },
    minimizer: isProd
      ? [
          new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: false,
          }),
          new OptimizeCSSAssetsPlugin({}),
        ]
      : [],
  },
}
