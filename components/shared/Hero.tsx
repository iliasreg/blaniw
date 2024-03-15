"use client";

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

import { Variants, motion } from "framer-motion"

export default function Hero() {

  const introHeaderVariants: Variants = {
    hide: {
      opacity: 0,
      x: -500,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const introPictureVariants: Variants = {
    hide: {
      opacity: 0,
      x: 500,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <>
      <section className='bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 w-full h-screen flex justify-center items-center'>
        <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>
          <div className='flex flex-col justify-center gap-8'>
            <motion.h1
              className='h1-bold '
              initial="hide"
              whileInView="show"
              exit="hide"
              variants={introHeaderVariants}
            >
              <span className='main-text'>Aji</span> tblaniw meana !
            </motion.h1>
            <motion.p
              className='p-regular-20 md:p-regular-24 '
              initial="hide"
              whileInView="show"
              exit="hide"
              variants={introHeaderVariants}
            >
              Join us in simplifying event planning and elevating every occasion with our innovative hosting application.
            </motion.p>
            <motion.span
              initial="hide"
              whileInView="show"
              exit="hide"
              variants={introHeaderVariants}
            >
              <Button variant={'default'} size="lg" asChild className='main-fill button w-full sm:w-fit main-fill px-8 h-12'>
                <Link href="#events">
                  Explore Now
                </Link>
              </Button>
            </motion.span>
          </div>
          <motion.span
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={introPictureVariants}
          >
            <Image src="/assets/hero.png" alt='hero' width={1000} height={1000}
              className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]' />
          </motion.span>

        </div>
      </section>

    </>
  )
}
