// let path = require('path')

// module.exports = {
//   configureWebpack: config => {
//     if (process.env.NODE_ENV === 'development') {
//       // See available sourcemaps:
//       // https://webpack.js.org/configuration/devtool/#devtool
//       config.devtool = 'eval-source-map'
//       // console.log(`NOTICE: vue.config.js directive: ${config.devtool}`)

//       config.output.devtoolModuleFilenameTemplate = info => {
//         let resPath = path.normalize(info.resourcePath)
//         let isVue = resPath.match(/\.vue$/)
//         let isGenerated = info.allLoaders

//         let generated = `webpack-generated:///${resPath}?${info.hash}`
//         let vuesource = `vue-source:///${resPath}`

//         return isVue && isGenerated ? generated : vuesource
//       }

//       config.output.devtoolFallbackModuleFilenameTemplate =
//         'webpack:///[resource-path]?[hash]'
//     }
//   },
// }