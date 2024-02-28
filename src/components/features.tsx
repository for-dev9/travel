import { FEATURES } from '@/constants';
import Image from 'next/image';

interface FeatureItemProps {
  key: string;
  title: string;
  icon: string;
  variant: string;
  description: string;
}
function FeatureItem({
  key,
  title,
  icon,
  variant,
  description,
}: FeatureItemProps) {
  return (
    <li className="flex w-full flex-col items-start">
      <div className="rounded-full flexCenter bg-green-500 p-4 lg:p-7">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 capitalize mt-5">{title}</h2>
      <p className="text-gray-500 bg-white/80 mt-5 lg:mt-[30px]">
        {description}
      </p>
    </li>
  );
}

export default function Features() {
  return (
    <section className="flex items-center justify-center flex-col overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex 2xl:left-20"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src={'/camp.svg'}
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>

          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-20">
            {FEATURES.map((item) => (
              <FeatureItem
                key={item.title}
                title={item.title}
                icon={item.icon}
                variant={item.variant}
                description={item.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
