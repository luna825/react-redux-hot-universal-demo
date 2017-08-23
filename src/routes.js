import {App, Home, About} from './container/index.js'

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/about',
        component: About,
      }
    ]
  }
]

export default routes