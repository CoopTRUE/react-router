import { Button } from '~/components/ui/button'
import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Home - React Router' },
    { name: 'description', content: 'Welcome to the React Router Starter!' },
  ]
}

export default function Home() {
  return (
    <main className="container mx-auto bg-card p-4 border rounded-lg">
      <h1>Home</h1>
      <Button onClick={() => console.log('clicked')}>Click me</Button>
    </main>
  )
}
