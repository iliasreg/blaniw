import { Button } from '@/components/ui/button'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className='bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10'>
        <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>
          <div className='flex flex-col justify-center gap-8'>
            <h1 className='h1-bold '><span className='main-text'>Aji</span> tblaniw meana !</h1>
            <p className='p-regular-20 md:p-regular-24 '>Join us in simplifying event planning and elevating every occasion with our innovative hosting app.</p>
            <Button variant={'default'} size="lg" asChild className='main-fill button w-full sm:w-fit main-fill'>
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>
            <Image src="/assets/hero.png" alt='hero' width={1000} height={1000}
            className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]'/>

        </div>
      </section>

      <section id='events' className='wrapper my-8 flex flex-col gap-8 md:gap-12'>
        <h2 className='h2-bold'>Trust by <br /> Thousands of Events</h2>
        <div className='flex flex-col w-full gap-5 md:flex-row'>
          Search
          CategoryFilter
        </div>
      </section>

    </>
    )
}