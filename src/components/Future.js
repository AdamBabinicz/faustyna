import React, { useState } from "react";
import future from "../images/19.jpg";
import dom from "../images/18.jpg";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import Modaldom from "./modal1/Modaldom";

Modal.setAppElement("#root");

function Future() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <section className="px-5 pb-10 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:p-40">
        <div className="mt-20 md:mt-16 lg:mt-0">
          <img src={future} alt="..." />
        </div>
        <div>
          <h4 className="font-bold mb-2 text-2xl mt-2">
            Dom rodzinny we wsi Głogowiec
          </h4>
          <p className="mb-5">
            "Była trzecim z dziesięciorga dzieci Stanisława Kowalskiego
            i&nbsp;Marianny z&nbsp;domu Babel, rolników ze wsi Głogowiec obok
            Świnic Warckich. Dwa dni po urodzeniu została ochrzczona przez ks.
            Józefa Chodyńskiego [4] w kościele świętego Kazimierza
            w&nbsp;Świnicach Warckich. Jej rodzicami chrzestnymi byli Konstanty
            Bednarek i&nbsp;Marianna Szewczyk [5]. W&nbsp;1914 przyjęła pierwszą
            komunię. Dwa lata później rozpoczęła naukę w&nbsp;szkole podstawowej
            w&nbsp;Świnicach Warckich. Po ukończeniu trzech klas musiała
            zrezygnować z&nbsp;dalszej edukacji, aby zwolnić miejsce młodszym
            dzieciom [5]."
          </p>
          <p className="mb-10 italic text-sm">
            https://pl.wikipedia.org/wiki/Faustyna_Kowalska
          </p>
          <button
            onClick={() => setModalIsOpen(true)}
            className="bg-black py-2 px-4 text-white transition-colors hover:opacity-70 hover:text-white"
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
              Rodzina i przed - zakonne życie św. siostry Faustyny
            </h2>
            <p className="lg:px-10 sm:px-2 lg:text-left sm:text-justify">
              "Po co żeśta ludzie przyjechały, ta Kowalszczanka żadna świnta, ja
              z&nbsp;nią krowy pasałam..." - czy takiej relacji spodziewali się
              pielgrzymi odwiedzający rodzinny Głogowiec Heleny Kowalskiej?
              Obraz jakby żywo z&nbsp;kart ewangelii przeniesiony w&nbsp;czasy
              nam współczesne, kiedy to Pan Jezus musiał stwierdzić: "Żaden
              prorok nie jest mile widziany w&nbsp;swojej ojczyźnie" (Łk 4, 24).
              Z&nbsp;całą pewnością liczne procesy beatyfikacyjne i&nbsp;wielu
              kanonizowanych "normalnych - świętych" w&nbsp;czasie ostatnich
              kilkudziesięciu lat, pozwalają nam uzmysłowić sobie lepiej fakt,
              iż święci - to zwyczajni ludzie! Ich wyjątkowość to mówienie TAK
              Bogu i&nbsp;jego planom, czyli temu, co Bóg jako pragnienie
              i&nbsp; świadomość DOBRA wpisał w&nbsp;ich serca. A to przecież
              również nic innego, jak głos sumienia każdego człowieka
              i&nbsp;pragnienie podążenia za nim... Zanim Helena Kowalska
              została wyniesiona na ołtarze, zanim z&nbsp;wyjątkowych
              łaski&nbsp; dopustów Bożych dane jej było korzystać, zanim
              w&nbsp;ogóle podjęła decyzję o&nbsp;wstąpieniu do zakonu - była
              najnormalniejszą dziewczynką i&nbsp;młodą kobietą, żyjącą przez 20
              lat świeckim życiem, świętym życiem.
            </p>
            <br />
            <p className="lg:px-10 sm:px-2 lg:text-left sm:text-justify">
              Marianna i&nbsp;Stanisław Kowalscy to rodzice późniejszej Świętej,
              którzy nauczyli dziesięcioro swoich dzieci wieść życie proste na
              fundamencie wiary i&nbsp;przestrzegania Bożych przykazań.
              Przekazali im również wzorzec uczciwego wypełniania obowiązków
              związanych z&nbsp;pracą. Helena od najmłodszych lat potrafiła
              oddać się pracy z&nbsp;prawdziwym poświęceniem, osobiście
              angażując się w&nbsp;powierzone zadania. Kilka lat później,
              w&nbsp; słowach skierowanych do Pana Jezusa, pokazuje głęboki sens
              wykonywania nawet najbardziej prozaicznych czynności: "Jezu,
              dajesz mi poznać i&nbsp;rozumieć, na czym polega wielkość duszy:
              nie na czynach wielkich, ale na wielkiej miłości. Miłość ma
              wartość i&nbsp;ona nadaje wielkość czynom naszym; chociaż uczynki
              nasze są drobne i&nbsp;pospolite same z&nbsp;siebie, to wskutek
              miłości stają się wielkie i&nbsp;potężne przed Bogiem, wskutek
              miłości. ... Dusza rozmiłowana w Bogu i&nbsp;w&nbsp;Nim zatopiona,
              idzie do obowiązku z&nbsp;tym samym usposobieniem, jak do Komunii
              św. i&nbsp;najprostszą czynność wykonuje z&nbsp;wielką
              starannością, pod miłosnym spojrzeniem Boga" (Dzienniczek, 889,
              890). Helenka pracowała najpierw w rodzinnym gospodarstwie rolnym,
              następnie od 1921 roku, w&nbsp;wieku 16 lat, jako pomoc domowa
              w&nbsp;Aleksandrowie i&nbsp;w Łodzi, aby finansowo wspomóc
              rodziców. Właśnie ze&nbsp;względu na konieczność podjęcia pracy
              zarobkowej tylko przez niecałe trzy lata (1917 - 1920) uczęszczała
              do szkoły. Nie stać było rodziców przyszłej zakonnicy na posag,
              z&nbsp;jakim należało przekraczać klasztorną bramę, dlatego też
              przez rok pracuje w&nbsp;Ostrówku pod Warszawą, również jako pomoc
              domowa, by 1 lipca rozpocząć postulat.
            </p>
            <br />
            <p className="lg:px-10 sm:px-2 lg:text-left sm:text-justify">
              Radykalne pójście za&nbsp;Bożym wezwaniem do życia zakonnego nie
              było dla Heleny Kowalskiej decyzją łatwą. Rodzice jej stanowczo
              przeciwstawiali się temu pragnieniu, a&nbsp;argumentem miała być,
              wspomniana już, bieda. Formacja religijna dziewczynki to
              przygotowania do Pierwszej Komunii Świętej, do której przystępuje
              w&nbsp;wieku 9 lat, co sobotnia spowiedź (zgodnie z&nbsp;panującym
              zwyczajem) i&nbsp;co niedzielna Msza św. Praktyki religijne
              młodziutkiej Helenki nie budziły zatem podejrzeń o&nbsp;jej
              wyjątkowość. A jednak. Nie każde bowiem dziecko spędza noce na
              modlitwie, jak podają o&nbsp;Niej rodzinne pamiętniki. Czuwająca
              przy młodszych dzieciach matka, zwracała jej uwagę: "Zgłupiejesz,
              jeśli zamiast spać, będziesz czuwała", na co odpowiadała mała
              Helenka: "Nie, Mamo, nic mi się nie stanie, bo to anioł mnie
              budzi, abym się modliła". W Dzienniczku później sama zapisze:
              "..łaskę powołania do życia zakonnego czułam od siedmiu lat.
              W&nbsp;siódmym roku życia usłyszałam pierwszy raz głos Boży
              w&nbsp;duszy, czyli zaproszenie do życia doskonalszego..."(Dz. 8).
              Jak dalej dodaje "Nie spotkałam się z&nbsp;nikim, kto by mi te
              rzeczy wyjaśnił", zrezygnowana kolejną odmową rodziców
              "...starałam się ją [udrękę] zagłuszyć rozrywkami".
            </p>
            <br />
            <p className="lg:px-10 sm:px-2 lg:text-left sm:text-justify">
              Tu, zdawałoby się, kończy Faustyna wieść życie rodzinne. Można by
              tak przypuszczać po tym, iż&nbsp;jedną tylko wizytę, w&nbsp;całym
              późniejszym życiu, złożyła w&nbsp;domu, na wieść o&nbsp;ciężko
              chorej matce. Opisując to zdarzenie w&nbsp;Dzienniczku, Faustyna
              daje wyraz głębokim więziom, jakie łączą ją z&nbsp;rodzicami
              i&nbsp;rodzeństwem. Nawet teraz, doświadczona zakonnica rozpływa
              się w&nbsp;zachwycie nad głębią modlitwy swojego ojca. Jest on
              dalej dla niej wzorem, nawet na polu, na którym to ona, zdawałoby
              się, będzie jaśnieć przykładem. Z&nbsp;czułością wypowiada się
              o&nbsp;swoich bliskich i&nbsp;nieustannie otacza ich modlitwą.
              Oni, z&nbsp;kolei, wiedzieli, iż&nbsp;liczyć mogą na jej
              wstawiennictwo w&nbsp;życiu, po śmierci, a&nbsp;przede wszystkim
              teraz, kiedy "Kowalszczanka" jest ogłoszona Świętą.
            </p>
            <p className="lg:px-10 sm:px-2 italic text-sm mt-2 mb-2">
              http://www.filipini.poznan.pl/art.php?tresc-409
            </p>
            <div>
              <button onClick={() => setModalIsOpen(false)}>
                <MdClose className="absolute right-3 top-6 text-2xl" />
              </button>
            </div>
          </Modal>
        </div>
        <div>
          <img src={dom} alt="..." className="mt-6" />
        </div>
        <div>
          <h4 className="font-bold mb-2 text-2xl mt-2">
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
        </div>
      </section>
    </>
  );
}

export default Future;
