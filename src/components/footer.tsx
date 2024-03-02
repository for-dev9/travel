import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="flexCenter mb-24" id="contacts">
      <div className="padding-container max-container flex flex-col w-full gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href={'/'} className="mb-10">
            <Image src={'/hilink-logo.svg'} alt="logo" width={74} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 md:justify-between w-full">
            {FOOTER_LINKS.map((item) => (
              <FooterColumn title={item.title} key={item.title}>
                <div className="regular-14 flex flex-col gap-4 text-gray-400">
                  {item.links.map((link) => (
                    <Link href={'/'} key={link}>
                      {link}
                    </Link>
                  ))}
                </div>
              </FooterColumn>
            ))}

            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              {FOOTER_CONTACT_INFO.links.map((link) => (
                <Link
                  href={'/'}
                  key={link.label}
                  className="flex gap-4 md:flex-col lg:flex-row"
                >
                  <p className="whitespace-nowrap">{link.label}:</p>
                  <p className="medium-14 whitespace-nowrap text-blue-900">
                    {link.value}
                  </p>
                </Link>
              ))}
            </FooterColumn>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <div className="flex regular-15 gap-4 text-gray-500">
                  {SOCIALS.links.map((link) => (
                    <Link href={'/'} key={link}>
                      <Image src={link} alt="social" width={24} height={24} />
                    </Link>
                  ))}
                </div>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-200" />
        <p className="regular-14 w-full text-center text-gray-500 ">
          2023 Hilink | All rights reserved
        </p>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
}
