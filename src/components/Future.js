import React from "react";
import future from "../images/19.jpg";
import dom from "../images/18.jpg";

const Future = () => {
  return (
    <>
      <section className="px-5 pb-10 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:p-40">
        <div className="mt-20 md:mt-16 lg:mt-0">
          <img src={future} alt="..." />
        </div>
        <div>
          <h4 className="font-bold mb-2 text-2xl">
            Dom rodzinny we wsi Głogowiec
          </h4>
          <p className="mb-5">
            "Była trzecim z dziesięciorga dzieci Stanisława Kowalskiego i
            Marianny z domu Babel, rolników ze wsi Głogowiec obok Świnic
            Warckich. Dwa dni po urodzeniu została ochrzczona przez ks. Józefa
            Chodyńskiego [4] w kościele świętego Kazimierza w Świnicach
            Warckich. Jej rodzicami chrzestnymi byli Konstanty Bednarek i
            Marianna Szewczyk [5]. W 1914 przyjęła pierwszą komunię. Dwa lata
            później rozpoczęła naukę w szkole podstawowej w Świnicach Warckich.
            Po ukończeniu trzech klas musiała zrezygnować z dalszej edukacji,
            aby zwolnić miejsce młodszym dzieciom [5]."
          </p>
          <p className="mb-10 italic text-sm">
            https://pl.wikipedia.org/wiki/Faustyna_Kowalska
          </p>
          <button className="bg-black py-2 px-4 text-white transition-colors hover:opacity-70 hover:text-white">
            Czytaj więcej
          </button>
        </div>
        <div>
          <img src={dom} alt="..." />
        </div>
        <div>
          <h4 className="font-bold mb-2 text-2xl">
            Wnętrze domu rodzinnego św. Faustyny
          </h4>
          <p className="mb-5">
            "Dzisiaj rodzinny dom św. Siostry Faustyny należy do parafii.
            Urządzono w nim muzeum, w którym zgromadzono przedmioty, mające
            oddać klimat tamtych czasów i życia rodziny Kowalskich. Zabudowania
            gospodarcze i teren wokół domu przystosowano dla potrzeb
            pielgrzymów."
          </p>
          <p className="mb-10 italic text-sm">
            https://www.faustyna.pl/zmbm/dom-rodzinny-sw-faustyny-w-glogowcu/
          </p>
          <button className="bg-black py-2 px-4 text-white transition-colors hover:opacity-70 hover:text-white">
            Czytaj więcej
          </button>
        </div>
      </section>
    </>
  );
};

export default Future;
