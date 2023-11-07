import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutUs from '@/components/home/AboutUs'
import ContactUs from '@/components/home/ContactUs'

Vue.use(VueRouter);
  const routes=[
    {
      path:'/aboutus',
      name:'AboutUs',
      component:AboutUs
    },
    {
      path:'/contactus',
      name:'ContactUs',
      component:ContactUs
    },
    
  ];
  
  const router = new VueRouter({
    mode: "history",
    routes,
  });
  export default router;