import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import { Button } from '../ui/button';
import NavItems from './NavItems';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='w-full border-b h-20 flex justify-center items-center'>
        <div className='wrapper flex items-center justify-between'>
            <Link href="/" className='w-36'>
                <Image src="/assets/BlaniwMain.png" width={120} height={18} alt='BlaniwLogo'/>
            </Link>

            <SignedIn>
                <nav className='md:flex-between hidden w-full max-w-xs'>
                    <NavItems />
                </nav>
            </SignedIn>

            <div className='flex w-32 justify-end gap-3'>
                <SignedIn>
                    <UserButton afterSignOutUrl="/"></UserButton>
                    <MobileNav />
                </SignedIn>
                <SignedOut>
                    <Button asChild className='button rounded-full px-8 h-11'>
                        <Link href="/sign-in">
                            Login
                        </Link>
                    </Button>
                </SignedOut>
            </div>
        </div>
    </header>
)
}

export default Header