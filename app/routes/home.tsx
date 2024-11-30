import Header from '~/components/Header'
import type { Route } from './+types/home'
import { Outlet } from 'react-router'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Home - React Router' },
    { name: 'description', content: 'Welcome to the React Router Starter!' },
  ]
}

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
    </main>
  )
}
