import { CardWithForm } from '@/components/others/CardComp'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex gap-10 h-screen justify-center items-center'>
      <Button>Click</Button>
      <CardWithForm />
    </main>
  )
}
