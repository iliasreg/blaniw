import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex-container flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href="/">
          <Image src="/assets/logo.svg" alt='logo' width={40} height={38}/>
        </Link>
        <p>© 2024 Blaniw. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer