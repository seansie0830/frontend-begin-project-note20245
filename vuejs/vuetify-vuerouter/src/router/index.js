// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import caculator from '@/components/caculator.vue';
import Todolist from '@/components/todolist.vue';
import passwordGen from '@/components/passwordGen.vue';
import tictactoe from '@/components/tictactoe.vue';
import Unitcvt from '@/components/Unitcvt.vue';
import about from '@/components/about.vue';
import setting from '@/components/setting.vue'
import { components } from 'vuetify/dist/vuetify-labs.js';

const routes = [
  { path: '/簡易計算機', name: 'Home', component: caculator },
  { path:"/簡易筆記本", name: "notebook" , component: Todolist},
  { path:"/隨機密碼產生器", name :"genPW" , component :passwordGen},
  { path:"/井字遊戲" ,name:"tictactoe" ,component:tictactoe},
  { path:"/單位換算" ,name :"unitcvt" ,component :Unitcvt},
  { path:"/設定" ,name: "setting", component:setting},
  { path:"/關於本站" , name:"about" ,component:about}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;