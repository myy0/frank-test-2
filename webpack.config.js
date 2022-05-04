const path = require('path')
module.exports = {  //要导出的对象是这个对象,node.js的模块定义，必须这么写
  mode: 'production', //模式是生产模式
  entry: {        //entry是整个程序的入口是哪里
      index: './lib/index.tsx'   //入口叫index，index的位置是...
  },
  output: {       //output是代码输出成什么样
      path: path.resolve(__dirname, 'dist/lib'),  //根据操作系统的类型不同把括号里的两个目录连起来，输出到dist/lib目录里
      library: 'FUI', //库的名字是...
      libraryTarget: 'umd', //库的目标格式...，告诉webpack要把代码封装成什么样模块定义，umd兼容commonjs和amd
  },
  module: {   //12-19:如果是tsx文件就使用awesome-typescript-loader将它翻译成js
    rules:[
      {
        test: /\.tsx?$/,  
        loader: 'awesome-typescript-loader'
      }
    ]
  }     
}