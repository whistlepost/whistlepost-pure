const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const GoogleFontsPlugin = require('google-fonts-plugin')

module.exports = {
  mode: 'development',
  entry: {
    whistlepost: './src/main/resources/assets/js/whistlepost.js',
    editor: './src/main/resources/assets/js/editor.js',
    table: './src/main/resources/assets/js/table.js',
    chart: './src/main/resources/assets/js/chart.js'
  },
  output: {
    path: path.resolve(__dirname, 'src/main/resources/assets'),
    library: 'whistlepost',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
//        { test: /\.css$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] },
        { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, "css-loader"] },
        { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ] },
//	    { test: /\.(png|svg|jpg|gif)$/, use: [ { loader: 'file-loader', options: {
//            	'outputPath': 'images/',
//            	'useRelativePath': true,
//            	publicPath: '/assets/wp-pure/images/'
//                }
//              }
//            ]
//          },
//	  { test: /\.(woff|woff2|eot|ttf|otf)$/, use: [ { loader: 'file-loader', options: {
//            	'outputPath': 'fonts/',
//            	'useRelativePath': true,
//                publicPath: '/assets/wp-pure/fonts/'
//			}
//          }
//        ]
//      }
//	  {
//        test: require.resolve('jquery'),
//        use: [
//        	{
//			  loader: 'expose-loader',
//			  options: 'jQuery'
//		    },
//		    {
//				loader: 'expose-loader',
//				options: '$'
//			}
//		]
//      }
    ]
  },
  plugins: [
//    new GoogleFontsPlugin({
//		fonts: [
//			{ family: "Roboto" },
//			{ family: "Noto Serif" }
//		],
//		filename: 'css/fonts.css'
//	}),
    new MiniCssExtractPlugin({
        filename: "whistlepost.bundle.css"
    })
  ]
};
