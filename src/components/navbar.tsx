'use client';

import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();

  const navBgHover = 'hover:bg-accent/50'; //bg-accent
  const navBgStateOpen = 'data-[state=open]:bg-accent/50'; //bg_accent
  const navBgActive = 'data-[active=true]:bg-accent'; //bg-accent/50
  const navStyle =
    'group inline-flex h-9 items-center w-max rounded-md px-4 py-2 text-sm font-normal transition-colors disabled:pointer-events-none disabled:opacity-50';
  const navSubStyle = 'pl-4 pr-24 py-2 text-sm border-b border-gray-100';
  return (
    <>
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href={'/'}>
          <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {NAV_LINKS.map((link) => (
                <NavigationMenuItem
                  data-active={pathname === link.href}
                  className={cn(navStyle, navBgHover, navBgActive)}
                >
                  <Link href={link.href} legacyBehavior passHref>
                    {link.title}
                  </Link>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  data-active={pathname === '/'}
                  className={cn(
                    navStyle,
                    navBgHover,
                    navBgActive,
                    navBgStateOpen
                  )}
                >
                  Getting started
                </NavigationMenuTrigger>
                <NavigationMenuContent className="relative top-10 border rounded-md bg-white">
                  <ul className="flex flex-col ">
                    <Link
                      href={'/contacts'}
                      data-active={pathname === '/contacts'}
                      // className="pl-2 pr-24 py-2 text-sm hover:bg-green-100 border-b border-gray-100 data-[active=true]:bg-green-200"
                      className={cn(navSubStyle, navBgHover, navBgActive)}
                    >
                      Admin
                    </Link>

                    <Link
                      href={'/contacts'}
                      data-active={pathname === '/test'}
                      // className="pl-2 pr-24 py-2 text-sm hover:bg-green-100 border-b border-gray-100 data-[active=true]:bg-green-200"
                      className={cn(navSubStyle, navBgHover, navBgActive)}
                    >
                      Contacts
                    </Link>

                    <Link
                      href={'/contacts'}
                      data-active={pathname === '/'}
                      // className="pl-2 pr-24 py-2 text-sm hover:bg-green-100 border-b border-gray-100 data-[active=true]:bg-green-200"
                      className={cn(navSubStyle, navBgHover, navBgActive)}
                    >
                      Home
                    </Link>

                    <div className="border-b hidden" />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </ul>

        <div className="hidden lg:flexCenter">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>

        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </nav>
    </>
  );
}
