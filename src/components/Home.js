import React, { useState } from "react";
import homeImg from "../images/9.jpg";
import { Modal } from "./Modal";

function Home() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <section className="home mb-10">
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <div className="overlay py-10 px-5 lg:grid lg:grid-cols-2 lg:items-center lg:gap-5 lg:text-white lg:px-40">
          <div>
            <img src={homeImg} alt="..." />
          </div>
          <div>
            <h6 className="pt-2 mb-4">Apostołka Bożego Miłosierdzia</h6>
            <h4
              className="text-xl font-bold lg:text-2xl mb-4"
              style={{ fontFamily: "Kumar One Outline" }}
            >
              Święta Maria Faustyna Kowalska
            </h4>
            <p className="mb-3">
              Maria Faustyna Kowalska (właściwie Helena Kowalska; ur. 25
              sierpnia 1905 w Głogowcu, zm. 5 października 1938 w Krakowie) –
              święta Kościoła katolickiego, zakonnica ze Zgromadzenia Sióstr
              Matki Bożej Miłosierdzia, mistyczka, stygmatyczka [1] [2] i
              wizjonerka. Znana przede wszystkim jako głosicielka kultu
              Miłosierdzia Bożego, nazywana apostołką Bożego Miłosierdzia oraz
              autorka Dzienniczka, w którym opisała swoje duchowe i mistyczne
              doświadczenia; zapiski mistycznych przeżyć siostry Faustyny
              trafiły na 20 lat do indeksu ksiąg zakazanych [3].
            </p>
            <p className="italic text-sm">
              https://pl.wikipedia.org/wiki/Faustyna_Kowalska
            </p>
            <button
              onClick={openModal}
              className="bg-black px-4 py-2 mt-4 text-white border transition-colors hover:bg-white hover:text-black lg:bg-white lg:text-black lg:hover:bg-black lg:hover:text-white"
            >
              Czytaj więcej
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
