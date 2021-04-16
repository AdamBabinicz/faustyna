import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Faustyna from "./Faustyna";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";

Modal.setAppElement("#root");

function Showcase() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
            ukrzyżowanego; nie spodziewam się pomocy od ludzi, ale ufność swą
            w&nbsp;Bogu mam, w Jego niezgłębionym miłosierdziu jest wszelka
            nadzieja moja.
          </p>

          <button
            onClick={() => setModalIsOpen(true)}
            className="bg-white py-2 px-4 text-black transition-colors hover:bg-black hover:text-white"
          >
            Czytaj więcej
          </button>
          <Modal
            isOpen={modalIsOpen}
            shouldCloseOnOverlayClick={false}
            onRequestClose={() => setModalIsOpen(false)}
            style={{
              overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,.8)",
              },
              content: {
                position: "absolute",
                top: "40px",
                left: "40px",
                right: "40px",
                bottom: "40px",
                border: "1px solid #ccc",
                background: "#fff",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "4px",
                outline: "none",
                padding: "20px",
              },
            }}
          >
            <h2 className="text-center font-bold lg:text-2xl sm:text-xl mt-4 mb-6">
              Dzienniczek
            </h2>
            <p className="lg:px-10 sm:px-2 lg:text-left sm:text-justify">
              Siostra Faustyna pisała Dzienniczek w&nbsp;Wilnie i&nbsp;Krakowie
              na polecenie, jak mówi tekst, Jezusa, potwierdzone przez jej
              spowiedników: bł. ks. Michała Sopoćkę i&nbsp;o. Józefa Andrasza
              SJ. Pierwsza notatka pochodzi z&nbsp;lipca 1934 roku, ostatnia
              datowana – z&nbsp;czerwca 1938 roku. Całe dzieło składa się
              z&nbsp;6 zeszytów o&nbsp;różnej objętości oraz zeszytu
              zatytułowanego Moje przygotowanie do Komunii świętej. Rękopis nie
              ma żadnych poprawek ani skreśleń, jedynie ołówkiem zostały
              podkreślone słowa Jezusa, co w wydaniach książkowych zostało
              zaznaczone tłustym drukiem lub kursywą. Rękopis Dzienniczka
              przechowywany jest w&nbsp;klasztorze Sióstr Matki Bożej
              Miłosierdzia w Łagiewnikach w Krakowie [1].
            </p>
            <br />
            <p className="lg:px-10 sm:px-2 lg:text-left sm:text-justify">
              Pierwsze wydanie tego dzieła miało miejsce w&nbsp;1981 roku.
              Wcześniej publikowane były niewielkie fragmenty w broszurach
              poświęconych nabożeństwu do Miłosierdzia Bożego w&nbsp;nowych
              formach, które Jezus przekazał Siostrze Faustynie [potrzebny
              przypis]. Pierwszy maszynowy odpis Dzienniczka nie był dokładny.
              Przy odpisie pominięto niektóre fragmenty oryginału, opuszczono
              niektóre wyrazy, zmieniono pewne określenia oraz dodano nowe
              wyrazy. Tym samym zniekształceniu uległ oryginalny tekst
              Dzienniczka [2]. Następnie z&nbsp;tego odpisu dokonano tłumaczenia
              na język francuski. Przetłumaczony tekst na język francuski
              posłużył do kolejnego tłumaczenia tym razem na język włoski,
              w&nbsp;którym znalazły się błędy teologiczne [2]. To m.in. było
              powodem wydania przez Stolicę Apostolską w&nbsp;marcu 1959 roku
              Notyfikacji Świętego Oficjum zabraniającej szerzenia kultu
              Miłosierdzia Bożego w&nbsp;formach przekazanych przez Siostrę
              Faustynę [2][3]. Notyfikacja została odwołana dopiero 15 kwietnia
              1978 roku za pontyfikatu Pawła VI dzięki staraniom arcybiskupa
              archidiecezji krakowskiej kardynała Karola Wojtyły [4][5].
              Pierwsza krytyczna edycja całego Dzienniczka została przygotowana
              dla potrzeb procesu beatyfikacyjnego Faustyny i&nbsp;wydana
              w&nbsp;Rzymie&nbsp;w&nbsp;1981 roku w&nbsp;50. rocznicę pierwszego
              objawienia obrazu Jezusa Miłosiernego (22 lutego 1931), które
              rozpoczynało prorocką misję Apostołki Bożego Miłosierdzia.
            </p>
            <br />
            <p className="lg:px-10 sm:px-2 lg:text-left sm:text-justify">
              Dzienniczek, dla ułatwienia cytowania fragmentów, został
              podzielony na 1828 punktów. Jeden punkt składa się z&nbsp;jednego
              bądź więcej akapitów. Struktura Dzienniczka jest następująca:
            </p>
            <p className="lg:px-10 sm:px-2 lg:text-left sm:text-justify">
              Zeszyt I: punkty 1 – 521 (rozpoczęty w&nbsp;lipcu 1934)
            </p>
            <p className="lg:px-10 sm:px-2 lg:text-left sm:text-justify">
              Zeszyt II: punkty 522 – 1000 (rozpoczęty w&nbsp;listopadzie 1934)
            </p>
            <p className="lg:px-10 sm:px-2 lg:text-left sm:text-justify">
              Zeszyt III: punkty 1001 – 1230 (rozpoczęty w&nbsp;lutym 1937)
            </p>
            <p className="lg:px-10 sm:px-2 lg:text-left sm:text-justify">
              Zeszyt IV: punkty 1231 – 1321 (rozpoczęty w&nbsp;sierpniu 1937)
            </p>
            <p className="lg:px-10 sm:px-2 lg:text-left sm:text-justify">
              Zeszyt V: punkty 1322 – 1589 (rozpoczęty w&nbsp;październiku 1937)
            </p>
            <p className="lg:px-10 sm:px-2 lg:text-left sm:text-justify">
              Zeszyt VI: punkty 1590 – 1803 (rozpoczęty w&nbsp;Krakowie, dnia
              10.02.1938, zakończony w&nbsp;czerwcu 1938)
            </p>
            <p className="lg:px-10 sm:px-2 lg:text-left sm:text-justify">
              Zeszyt VII zatytułowany Moje przygotowanie do Komunii św.: punkty
              1804 – 1828.
            </p>
            <br />
            <p className="lg:px-10 sm:px-2 lg:text-left sm:text-justify">
              Od czasu pierwszej edycji Dzienniczek stał się tekstem coraz
              szerzej znanym, komentowanym i&nbsp;badanym. Rozpatruje się go
              zarówno jako dzieło mistyczne, jak i&nbsp;na tle całej literatury
              i&nbsp;kultury polskiej [potrzebny przypis]. Pisany żywym
              i&nbsp;plastycznym stylem (św. Faustyna mimo braku wykształcenia
              ujawnia bogactwo polszczyzny i&nbsp;„słuch” językowy), cieszy się
              ogromną popularnością, traktowany często jako tekst dla pociechy
              i&nbsp;pokrzepienia duchowego [potrzebny przypis]. Od połowy lat
              80. XX w. ukazuje się w&nbsp;Polsce co roku nowe wydanie
              Dzienniczka. Został on przetłumaczony na wiele języków, także na
              koreański, maltański i&nbsp;rumuński. W 2008 r. „Gość Niedzielny”
              podał, że&nbsp;według Dariusza Karłowicza Dzienniczek jest
              najczęściej tłumaczoną na świecie polską książką [6].
              W&nbsp;kwietniu 2012 ukazała się polska wersja audio książki [7].
            </p>
            <br />
            <p className="lg:px-10 sm:px-2 italic text-sm mt-2 mb-2">
              https://pl.wikipedia.org/wiki/Dzienniczek
            </p>
            <div>
              <button onClick={() => setModalIsOpen(false)}>
                <MdClose className="absolute right-3 top-6 text-2xl" />
              </button>
            </div>
          </Modal>
        </div>
      </section>
      <Faustyna />
    </>
  );
}

export default Showcase;
