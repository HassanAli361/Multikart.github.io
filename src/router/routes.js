
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/product', component: () => import('src/pages/Product.vue') },
      { path: '/sales', component: () => import('src/pages/Sales.vue') },
      { path: '/coupons', component: () => import('src/pages/Coupons.vue') },
      { path: '/pages', component: () => import('src/pages/Pages.vue') },
      { path: '/reports', component: () => import('src/pages/Reports.vue') },
      { path: '/profile', component: () => import('src/pages/Profile.vue') },
      { path: '/invoice', component: () => import('src/pages/Invoice.vue') },
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
