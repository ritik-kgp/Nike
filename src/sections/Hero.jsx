import { useState } from "react";
import { arrowRight } from "../assets/icons/index.js";
import { bigShoe3 } from "../assets/images/index.js";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard.jsx";
import { statistics } from "../constants/index.js";
import { shoes } from "../constants/index.js";

const Hero = () => {
   const [bigShoeImg,setBigShoeImg] = useState(bigShoe3);

  return (
    <section
      id="home"
      className="flex flex-col xl:flex-row w-full min-h-screen gap-10 justify-center max-container"
    >
      {/* first child of section */}
      <div className="flex flex-col w-full xl:w-2/5 justify-center items-start pt-28 max-xl:padding-x">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex flex-wrap justify-start items-start mt-20 w-full gap-16">
          {statistics.map((stats) => (
            <div key={stats.label}>
              <p className="text-4xl font-palanquin font-bold">{stats.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stats.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* second child of section */}
      <div className="flex flex-1 justify-center items-center relative xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg} 
          alt="shoe collection"
          width={610}
          height={500}
          className="relative z-10 object-contain"
        />
        <div className="flex flex-1 absolute gap-4 sm:gap-6 -bottom-[5%] max-sm:px-6">
          {shoes.map((image,index) => (
            <div key={index}>
              <ShoeCard imgURL={image} changeBigShoeImage={(shoe) => setBigShoeImg(shoe)} bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
