import Header from '~/components/Header'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className="space-y-4">
      <Header />
      <Outlet />
    </div>
  )
}
