import wallet from '@/components/wallet'
import orderHistory from '@/components/orderHistory'
import message from '@/components/message'
import index from '@/components/index'
import rights from '@/components/rights'
import password from '@/components/password'
import bind from '@/components/bind'

const router = [
  {
    path: '/',
    name: 'wallet',
    component: wallet
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: wallet
  },
  {
    path: '/orderHistory',
    name: 'orderHistory',
    component: orderHistory
  },
  {
    path: '/message',
    name: 'message',
    component: message
  },
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/rights',
    name: 'rights',
    component: rights
  },
  {
    path: '/password',
    name: 'password',
    component: password
  },
  {
    path: '/bind',
    name: 'bind',
    component: bind
  }
]
export default router
