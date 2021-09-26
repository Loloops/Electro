const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCssAssetWebPackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack')

const path = require('path');


const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;





const optimization = () => {
  const configObj = {
    splitChunks: {
      chunks: 'all'
    }
  };
  if (isProd) {
    configObj.minimizer = [
      new OptimizeCssAssetWebPackPlugin(),
      new TerserWebpackPlugin()
    ]
  }
  return configObj;
}

const plugins = () => {
  const basePlugins = [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        filename: 'index.html',
        minify: {
          collapseWhitespace: isProd
        }
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/page2.html'),//для доступа к другой станице меняем пути
        filename: 'page2.html',//для доступа к другой станице меняем пути
        minify: {
          collapseWhitespace: isProd
        }
      }),
      new MiniCssExtractPlugin({
        filename: `./css/${filename('css')}`,
      }),
      new CopyWebpackPlugin({
        patterns: [
          {from: path.resolve(__dirname, 'src/assets'), to: path.resolve(__dirname, 'dist/assets')}
        ]
      }),
    ];

    if (isProd){
      basePlugins.push(
        new ImageminPlugin({
          bail: false,
          cache: true,
          imageminOptions: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              [
                "svgo",
                {
                  plugins: [
                    {
                      removeViewBox: false
                    }
                  ]
                }
              ]
            ]
          }
        })
      )
    }

  return basePlugins
}


module.exports = {
  context: path.resolve(__dirname, 'src'),//откуда забираем
  mode: 'development',//режим сборки
  entry: {//находим файлы js
    main: './js/index.js',
    // analytics: './js/modules/analytics.js'//сторонний скрипт
  },
  output: {
    filename: `./js/${filename('js')}`,
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: ''
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'src'),
    },
    // open: true,
    compress: true,
    hot: true,
    port: 4000,
  },
  optimization: optimization(),
  plugins: plugins(),
  devtool: isProd ? false : 'source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              }
            }
          },
           
          'css-loader', 
          'sass-loader',
          'postcss-loader'
        ]//преобразует из Js файла в CSS далее создает файл Css
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(?:|gif|png|jpg|jpeg|svg|ico)$/,
        type: 'asset/resource',
        generator: {
          filename: () => {
            return isDev ? 'img/[name][ext]' : 'img/[name].[contenthash][ext]';
          },
        },
      },
      {
        test: /\.(?:|woff|eot|woff2|ttf|otf|fnt|fon)$/,
        type: 'asset/resource',
        generator: {
          filename: () => {
            return isDev ? 'fonts/[name][ext]' : 'fonts/[name].[contenthash][ext]';
          },
        }
        
      },
    ],
  },
 
}