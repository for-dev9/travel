'use client';

import { NAV_LINKS, NavMenuProps } from '@/constants';
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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useState } from 'react';

const menuPadding = 'px-4 py-2';
const subMenuPadding = 'pl-4 pr-20 py-2';
const navBgHover = 'hover:bg-accent/50';
const navBgStateOpen = 'data-[state=open]:bg-accent/50';
const navBgActive = 'data-[active=true]:bg-accent';
const navStyle =
  'group inline-flex h-9 items-center w-max rounded-md text-sm font-normal transition-colors disabled:pointer-events-none disabled:opacity-50';
const navSubStyle = 'py-2 text-sm border-b border-gray-100';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href={'/'}>
          <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>

        <ul className="hidden h-full gap-12 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {NAV_LINKS.map((link) => (
                <NavMenu key={link.href} pathname={pathname} {...link} />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </ul>

        <div className="hidden md:flexCenter">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>

        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger>
            <HamburgerMenuIcon
              height={33}
              width={33}
              className="inline-block cursor-pointer md:hidden"
            />
          </SheetTrigger>
          <SheetContent className="px-0 overflow-y-scroll">
            <Accordion
              type="multiple"
              defaultValue={['mainCategory']}
              className="w-full pt-5 cursor-pointer"
            >
              {/* <AccordionItem value="menu1">
                <AccordionContent className="px-5 py-3 text-lg hover:bg-accent">
                  Home
                </AccordionContent>
              </AccordionItem> */}
              {NAV_LINKS.map((link) => (
                <MobileMenu
                  key={link.href}
                  pathname={pathname}
                  {...link}
                  setMobileMenuOpen={setMobileMenuOpen}
                />
              ))}

              <AccordionItem value="item-1">
                <AccordionTrigger className="px-5 py-3 text-base hover:bg-accent hover:no-underline">
                  Settings
                </AccordionTrigger>
                <Link
                  href={'/'}
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                >
                  <AccordionContent className="pl-10 py-2 text-base text-gray-500 border-t hover:bg-accent/70">
                    Home
                  </AccordionContent>
                </Link>
                <AccordionContent className="pl-10 py-2 text-base text-gray-500 border-t hover:bg-accent/70">
                  SMTP
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
}

function MobileMenu(props: NavMenuProps) {
  if (props.sub.length == 0) {
    return (
      <AccordionItem value="mainCategory">
        <Link
          href={props.href}
          onClick={() => {
            if (props.setMobileMenuOpen) props.setMobileMenuOpen(false);
          }}
        >
          <AccordionContent className="px-5 py-3 text-lg hover:bg-accent">
            {props.title}
          </AccordionContent>
        </Link>
      </AccordionItem>
    );
  } else if (props.sub.length > 0) {
    return (
      <AccordionItem value="mainCategoryWithSub">
        <AccordionTrigger className="px-5 py-3 text-base hover:bg-accent hover:no-underline">
          {props.title}
        </AccordionTrigger>

        {props.sub.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            onClick={() => {
              if (props.setMobileMenuOpen) props.setMobileMenuOpen(false);
            }}
          >
            <AccordionContent className="pl-10 py-2 text-base text-gray-500 border-t hover:bg-accent/70">
              {s.title}
            </AccordionContent>
          </Link>
        ))}
      </AccordionItem>
    );
  }
}

function NavMenu(props: NavMenuProps) {
  if (props.sub.length == 0) {
    return (
      <NavigationMenuItem
        data-active={props.pathname === props.href}
        className={cn(navStyle, navBgHover, navBgActive)}
      >
        {props.sub.length == 0 && (
          <NavigationMenuLink asChild>
            <Link href={props.href} title={props.desc} className={menuPadding}>
              {props.title}
            </Link>
            {/* legacyBehavior passHref */}
          </NavigationMenuLink>
        )}
      </NavigationMenuItem>
    );
  } else if (props.sub.length > 0) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger
          data-active={props.sub.some((s) => {
            return props.pathname === s.href;
          })}
          className={cn(menuPadding, navStyle, navBgHover, navBgActive, {
            [navBgStateOpen]: props.pathname !== props.href,
          })}
        >
          {props.title}
        </NavigationMenuTrigger>

        <NavigationMenuContent className="relative top-10 border rounded-md bg-white">
          <ul className="flex flex-col ">
            {props.sub.map((s) => (
              <NavigationMenuLink asChild>
                <Link
                  key={s.href}
                  href={s.href}
                  title={s.desc}
                  data-active={props.pathname === s.href}
                  className={cn(
                    subMenuPadding,
                    navSubStyle,
                    navBgHover,
                    navBgActive
                  )}
                >
                  {s.title}
                </Link>
              </NavigationMenuLink>
            ))}

            <div className="border-b hidden" />
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }
}
