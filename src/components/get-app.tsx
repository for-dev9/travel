import Image from 'next/image';
import Button from './button';

export default function GetApp() {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="max-container relative flex w-full flex-col justify-between gap-32 overflow-hidden bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] lg:rounded-[40px]">
        <div className="flex w-full flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="text-gray-400">Available on iOS and Android</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              title="App Store"
              icon="/apple.svg"
              type="button"
              variant="btn_white"
              full
            ></Button>
            <Button
              title="Play Store"
              icon="/android.svg"
              type="button"
              variant="btn_dark_green_outline"
              full
            ></Button>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <Image src={'/phones.png'} alt="phone" width={550} height={870} />
        </div>
      </div>
    </section>
  );
}
