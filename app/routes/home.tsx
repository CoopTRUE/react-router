import type { Route } from './+types/home'
import Trollface from '~/assets/trollface.png?w=200&format=webp'
import { Button } from '~/components/ui/button'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Home - React Router' },
    { name: 'description', content: 'Welcome to the React Router Starter!' },
  ]
}

export default function Home() {
  return (
    <main className="container mx-auto rounded-lg border bg-card p-4">
      <img src={Trollface} alt="Trollface" className="mx-auto w-52" />
      <h1>Home</h1>
      <Button onClick={() => alert('clicked')}>Click me</Button>
    </main>
  )
}
