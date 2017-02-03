var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
        Main: 'app/components/Main.jsx',
        Navigation: 'app/components/Navigation.jsx',
        BlogIndex: 'app/components/blog/BlogIndex.jsx',
        NewBlog: 'app/components/blog/new',
        Login: 'app/components/login/Login.jsx',
        AuthService: 'app/auth/AuthService.js',
        applicationStyles: 'app/styles/app.scss',
        TextArea: 'app/components/blog/TextArea.jsx',
        ImageUpload: 'app/components/blog/ImageUpload.jsx',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
        {
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015', 'stage-0']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        },
        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss'),
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
