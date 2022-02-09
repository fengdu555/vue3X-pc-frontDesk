const routes = [
  {
    path: '/',
    redirect: '/index',
    name: 'Layout',
    component: () => import('@/pages/layout/index.vue'),
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('@/pages/Index/index.vue'), // 首页
      }
    ],
  },
]

export default routes
