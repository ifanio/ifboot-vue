/** 系统管理路由 **/

import Layout from '@/layout'

const systemRouter = {
  path: '/system',
  component: Layout,
  redirect: '/table/complex-table', // 重定向地址，在面包屑中点击会重定向去的地址，当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
  hidden: false, // 当设置 true 的时候该路由不会在侧边栏出现，默认 false 不在侧边栏线上
  alwaysShow: true, // 一直显示根路由
  name: 'System', // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
  meta: {
    title: '系统管理', // 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'system',
    roles: ['admin', 'editor'], // 你可以在根路由设置权限，这样它下面所以的子路由都继承了这个权限
    noCache: true, // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    breadcrumb: true // 如果设置为false，则不会在breadcrumb面包屑中显示
  },
  children: [
    {
      path: 'user',
      component: () => import('@/views/system/user/index'),
      name: 'User',
      meta: { title: '用户管理', icon: 'user' }
    },
    {
      path: 'role',
      component: () => import('@/views/table/dynamic-table/index'),
      name: 'Role',
      meta: { title: '角色管理', icon: 'role' }
    },
    {
      path: 'menu',
      component: () => import('@/views/system/menu/index'),
      name: 'Menu',
      meta: { title: '权限管理', icon: 'menu' }
    },
    {
      path: 'dict',
      component: () => import('@/views/table/dynamic-table/index'),
      name: 'Dict',
      meta: { title: '数据字典', icon: 'dict' }
    }
  ]
}
export default systemRouter
