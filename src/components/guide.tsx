import Image from 'next/image';

export default function Guide() {
  return (
    <section
      id="guide"
      className="flexCenter flex-col mt-4 lg:mt-[70px] xl:mt-[120px] 2xl:mt-[250px]"
    >
      <div className=" max-container padding-container w-full pb-24">
        <Image src={'/camp.svg'} alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-500">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="regular-16 text-gray-500 xl:max-w-[500px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src={'/boat.png'}
          alt="boat"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src={'/meter.svg'}
            alt="meter"
            width={0}
            height={0}
            style={{ width: 'auto', height: 'auto' }}
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-400">Destination</p>
                <p className="bold-16 text-green-600">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-400">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Pasuruan
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
