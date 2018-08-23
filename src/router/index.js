import Vue from 'vue'
import Router from 'vue-router'
import Find from '@/components/find/Find'
import Youji from '@/components/youji/Youji'
import Gonglue from '@/components/gonglue/Gonglue'
import GonglueDetail from '@/components/gonglue/GonglueDetail'
import WriteYouji from '@/components/writeYouji/WriteYouji'
import Draft from '@/components/caogao/Draft'
import Gowith from '@/components/faqi/Gowith'
import Gongju from '@/components/gongju/Gongju'





Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Find',
      component: Find
    },
    {
      path:'/youji',
      name:'Youji',
      component:Youji
    }, {
      path:'/gonglue',
      name:'Gonglue',
      component:Gonglue
    },{
      path:'/gonglueDetail',
      name:'GonglueDetail',
      component:GonglueDetail
    },{
      path:'/writeYouji',
      name:'Writeyouji',
      component:WriteYouji
    },{
      path:'/draft',
      name:'Draft',
      component:Draft
    },{
      path:'/Gowith',
      name:'Gowith',
      component:Gowith
    },{
      path:'/Gongju',
      name:'Gongju',
      component:Gongju
    },
  ]
})
