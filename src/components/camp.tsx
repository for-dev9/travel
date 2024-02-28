import { PEOPLE_URL } from '@/constants';
import Image from 'next/image';

interface CampSiteProps {
  bgImage: string;
  title: string;
  subTitle: string;
  peopleJoined: string;
}
function CampSite({ bgImage, title, subTitle, peopleJoined }: CampSiteProps) {
  return (
    <div
      className={`h-full w-full min-w-[550px] md:min-w-[750px] lg:min-w-[1100px] lg:rounded-r-3xl xl:rounded-[40px]`}
      style={{
        background: `url("${bgImage}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 bottom-2 border-blue-400">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-500 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-white bold-18">{title}</h4>
            <p className="regular-14 text-white">{subTitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-x-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                className="h-10 w-10 rounded-full"
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <div className="text-white bold-16 md:bold-20">{peopleJoined}</div>
        </div>
      </div>
    </div>
  );
}

export default function Camp() {
  return (
    <section className="2xl:max-container relative py-10 lg:mb-10 lg:py-10 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          bgImage="/img-1.png"
          title="Putuk Truno Camp"
          subTitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          bgImage="/img-2.png"
          title="Mountain View Camp"
          subTitle="Somewhere in the Wilderness"
          peopleJoined="35+ Joined"
        />
      </div>

      <div className="mt-10 px-6 lg:float-right lg:mr-[50px] lg:-mt-60 opacity-85  ">
        <div className="bg-green-600 p-8 relative w-full overflow-hidden rounded-3xl lg:max-w-[500px] xl:max-w-[700px] xl:rounded-[40px] xl:px-16 xl:py-20 ">
          <h2 className="text-white regular-24 md:regular-32 2xl:regular-64 capitalize ">
            <strong>Feeling Lost And Not Knowing The Way?</strong>
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That&apos;s why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="absolute -right-6 bottom-4 w-[140px] lg:bottom-10 xl:-right-8 xl:w-[186px] 3xl:right-0;"
          />
        </div>
      </div>
    </section>
  );
}
