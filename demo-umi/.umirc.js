
// ref: https://umijs.org/config/

// 不开启默认路由的话配置自己的路由
// routes: [
//   {
//     path: '/',
//     component: '../layouts/index',
//     routes: [
//       { path: '/', component: '../pages/index' }
//     ]
//   }
// ],
export default {
  treeShaking: true,

  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'demo-umi',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
