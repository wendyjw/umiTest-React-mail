import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: { // 设置node_modules目录下依赖文件编译方式, 'all' 
    type: 'none',
  },
  routes: [
    // { path: '/login', component: '@/pages/login/index' },
    { 
      path: '/', 
      component: '@/pages/layouts/basicLayout',
      routes:[
        { path: '/cart', component: '@/pages/cart/index' },
        { path: '/list', component: '@/pages/olist/index' },
        { path: '/user', component: '@/pages/user/index' },
      ]
  },
  ],
  fastRefresh: {},
});
