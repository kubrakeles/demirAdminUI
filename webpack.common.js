const path =require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: 
  {
     main:"./src/js/index.js",
     vendor:"./src/js/vendor.js",
     login:"./src/js/login.js",
     news:"./src/js/news.js",
     reference:"./src/js/reference.js",
     slider:"./src/js/slider.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename:"./index.html",
      template:"./src/views/index.html",
      chunks:['main']

    }),
    new HtmlWebpackPlugin({
      filename:"./login.html",
      template:"./src/views/login-template.html",
      chunks:['login']

    }),
    new HtmlWebpackPlugin({
      filename:"./reference.html",
      template:"./src/views/reference-template.html",
      chunks:['reference']

    }),
    new HtmlWebpackPlugin({
      filename:"./news.html",
      template:"./src/views/news-template.html",
      chunks:['news']

    }),
    new HtmlWebpackPlugin({
      filename:"./slider.html",
      template:"./src/views/slider-foto-template.html",
      chunks:['slider']

    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      },
      {
        test: /\.html$/,
        use:["html-loader"]
      }
      // {
      //   test: /\.(svg|png|jpg|gif)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {

      //       name: "__dirname/[name].[hash].[ext]",
      //       outputPath: "images",
      //       publicPath: "assets"
      
      //     }
      //   }
      // }
    ]
  }
};
