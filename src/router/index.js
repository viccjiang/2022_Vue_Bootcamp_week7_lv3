import { createRouter, createWebHashHistory } from 'vue-router';
// import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/UserAbout.vue'),
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/UserProducts.vue'),
      },
      {
        path: 'all_products',
        name: 'all_products',
        component: () => import('../views/UserAllProducts.vue'),
      },
      {
        path: 'product/:id',
        name: 'product/:id',
        component: () => import('../views/UserProductDetail.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/UserCart.vue'),
      },
      {
        path: 'check/:orderId',
        name: 'check/:orderId',
        component: () => import('../views/UserCheckOrder.vue'),
      },
      {
        path: 'query',
        name: 'query',
        component: () => import('../views/UserOrderQuery.vue'),
      },
      {
        path: 'swiper',
        component: () => import('../views/SwiperTest.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Products.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/Orders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/Coupons.vue'),
      },
    ],
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
  // 換頁時，滾動到最上方
  scrollBehavior() {
    // console.log(to, from, savedPosition)
    // 如果到達的頁面，路徑名稱符合特定字串的話
    // if (to.fullPath.match('products')) {
    //   return {
    //     top: 500
    //   }
    // }
    return {
      top: 0,
    };
  },
});

export default router;
