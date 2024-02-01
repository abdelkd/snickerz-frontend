import { Button } from "@/components/ui/button";
import HeadingShoeMobile from "../assets/images/heading-shoe-mobile.jpg";
import HeadingShoe from "../assets/images/pexels-black-bird-1751238.jpg";

const HomePage = () => {
  return (
    <section className="full-page-section relative">
      <picture>
        <source media="(max-width: 767px)" srcSet={HeadingShoeMobile} />
        <source media="(mai-width: 768px)" srcSet={HeadingShoe} />

        <img
          alt="a flying sneaker"
          src={HeadingShoe}
          className="w-full h-dvh object-cover heading-image abolute"
        />
      </picture>

      <div className="flex flex-col items-center absolute top-1/3 md:left-1/2 md:-translate-x-1/2 -translate-y-1/3 px-4 md:px-0 pt-5">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-black drop-shadow-md md:text-white text-center max-w-lg text-yellow-500">
          Discover the Sweetest Deals at SNICKERZ
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-3 text-black md:text-slate-50 font-semibold max-w-lg mx-auto text-center drop-shadow text-md text-yellow-700">
          Your Ultimate Destination for Delicious Delights!
        </p>
        <div className="px-2 py-6" />
        <Button className="bg-black">Shop Now</Button>
      </div>
    </section>
  );
};

export default HomePage;
