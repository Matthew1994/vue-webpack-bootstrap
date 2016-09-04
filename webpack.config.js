var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  //全局注入Jquery
  resolve: {
      root: [],
      alias: {
          'jQuery': (()=>{
            var t = path.resolve(__dirname, './src/lib/jquery/jquery-3.1.0.min.js');
            console.log(t);
            return t;
          })()
      }
  },
  plugins: [
      new webpack.ProvidePlugin({
          $: 'jQuery'
      }),
  ],
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html' },

      // bootstrap 配置
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { 
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,  
        loader: 'url-loader?importLoaders=1&limit=1000&name=/fonts/[name].[ext]' 
      },

      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  // devtool: '#eval-source-map'
  devtool: 'module-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}
