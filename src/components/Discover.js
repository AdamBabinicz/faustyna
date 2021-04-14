import React, { useState } from "react";
import data from "../data/discover";

const Discover = () => {
  // eslint-disable-next-line
  const [cards, setCards] = useState(data);

  return (
    <>
      <h2
        className="font-bold text-4xl text-center pt-20 pb-10 lg:text-6xl"
        style={{ fontFamily: "Bungee Outline", color: "gray" }}
      >
        Mistyka św. Faustyny
      </h2>
      <section className="discover grid grid-cols-1 gap-5 px-5 py-10 pb-10 sm:grid-cols-2 lg:px-40 overflow-x-hidden">
        {cards.map((card) => {
          const { id, image, title, desc, par } = card;

          return (
            <div key={id} className="relative">
              <img src={image} alt={title} className="" />
              <h4 className="absolute -bottom-20 lg:-bottom-0 z-10 font-bold text-white text-2xl text-center">
                {title}
              </h4>
              <p>{desc}</p>
              <p className="italic text-sm">{par}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Discover;
