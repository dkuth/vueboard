import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Board from '@/components/Board'
import BoardDetail from "@/components/BoardDetail"
import BoardCreate from "@/components/BoardCreate"
import Login from '@/components/Login'
import Food from '@/components/Food'
import BoardList from '@/components/BoardList'
import Calendar from '@/components/Calendar'
import Tab from '@/components/Tab'

Vue.use(Router)

export default new Router({
  routes: [
    {
   
      path: '/',
      name: 'Board',
      component: Board,
    },
    {
      path: "/detail/:contentId",
      name: "BoardDetail",
      component: BoardDetail
    },
    {
      path: "/create/:contentId?",
      name: "BoardCreate",
      component: BoardCreate
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/food",
      name: "Food",
      component: Food
    },
    {
      path: "/boardlist",
      name: "BoardList",
      component: BoardList
    },
    {
      path: "/calendar",
      name: "Calendar",
      component: Calendar
    },
    {
      path: "/tab",
      name: "Tab",
      component: Tab
    }
  ]
})
