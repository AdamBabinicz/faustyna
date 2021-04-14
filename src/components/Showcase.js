import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Faustyna from "./Faustyna";

const Showcase = () => {
  return (
    <>
      <section className="showcase mb-10">
        <div className="overlay flex flex-col items-center justify-center text-center text-white lg:px-72">
          <h1 className="font-bold text-4xl mb-4 lg:text-6xl">
            Św. Faustyna Kowalska
          </h1>

          <p className="text-lg mb-5 lg:text-xl">
            <FaQuoteLeft className="text-xl m-4" />
            &nbsp;&nbsp;W najcięższych mękach wzrok swej duszy zatapiam w Jezusa
            ukrzyżowanego; nie spodziewam się pomocy od ludzi, ale ufność swą w
            Bogu mam, w Jego niezgłębionym miłosierdziu jest wszelka nadzieja
            moja.
          </p>

          <button className="bg-white py-2 px-4 text-black transition-colors hover:bg-black hover:text-white">
            Czytaj więcej
          </button>
        </div>
      </section>
      <Faustyna />
    </>
  );
};

export default Showcase;
