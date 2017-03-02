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
        applicationStyles: 'app/styles/app.scss',
        About: 'app/components/About.jsx',
        AuthService: 'app/auth/AuthService.js',
        BlogIndex: 'app/components/blog/BlogIndex.jsx',
        ImageUpload: 'app/components/blog/ImageUpload.jsx',
        Login: 'app/components/login/Login.jsx',
        Main: 'app/components/Main.jsx',
        Navigation: 'app/components/Navigation.jsx',
        NewBlog: 'app/components/blog/new',
        Projects: 'app/components/Projects.jsx',
        ShowBlog: 'app/components/blog/ShowBlog.jsx',
        TextArea: 'app/components/blog/TextArea.jsx',
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
        {
          test: /\.(png|jpg)$/,
          loader: 'url?limit=25000'
        }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss'),
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
