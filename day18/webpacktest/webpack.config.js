const {
    resolve
} = require("path")
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "./js/main.js",
        path: resolve(__dirname, "build"),
        clean: true,
    },
    mode: "production",
    // module: {
    //     // 注意: loader.默认是从下往上执行
    //     rules: [
    //       // eslint 检查js语法的加载器
    //       {
    //         test: /\.js$/, // 只检测js文件
    //         exclude: /node_modules/, // 排除node_modules文件夹
    //         enforce: 'pre', // 提前加载使用(loader默认从下往上执行, 优先执行eslint-loader)
    //         use: {
    //           // 使用eslint-loader解析
    //           loader: 'eslint-loader',
    //         },
    //       },
    //       // 利用babel,将es6+的语法,转成es6之前的语法.兼容老版本的浏览器
    //       {
    //         test: /\.js$/,
    //         exclude: /node_modules/,
    //         use: {
    //           loader: 'babel-loader',
    //           options: {
    //             presets: ['@babel/preset-env'],
    //           },
    //         },
    //       },
    //     ],
    //   },
    module: {
      rules: [
        {
          test: /\.js$/, // 只检测js文件
          exclude: /node_modules/, // 排除node_modules文件夹
          enforce: "pre", // 提前加载使用
          use: {
            // 使用eslint-loader解析
            loader: "eslint-loader",
          },
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
      
    },
}