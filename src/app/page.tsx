import { db } from '@/lib/db'
import Image from 'next/image'

export default async function Home() {
  // await db.set('hello', 'good day')

  return (
    <div className='text-red-500'>hello world</div>
  )
}
