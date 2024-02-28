import Image from 'next/image';
import Button from './button';

export default function Hero() {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute w-[40px] h-[40px] left-[-5px] top-[-30px] lg:w-[50px] lg:h-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-500 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-950">
            198k
            <span className="regular-16 lg:regular-20 ml-1 underline">
              Excellent Reviews
            </span>
          </p>

          <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Button type="button" title="Download App" variant="btn_green" />
            <Button
              type="button"
              title="How we work?"
              variant="btn_white_text"
              icon="/play.svg"
            />
          </div>
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-900 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-200">Location</p>
              <Image src={'/close.svg'} width={24} height={24} alt="close" />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-300">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>

            <div className="flex flex-col">
              <p className="regular-16 block text-gray-300">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
