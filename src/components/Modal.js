import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
// import styled from "styled-components";
import { MdClose } from "react-icons/md";
import img1 from "../images/20.jpg";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  grid-gap: 2rem;
  /* grid-template-columns: repeat(2, 1fr); */
  position: relative;
  z-index: 1000;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 640px) {
    width: 380px;
  }
`;

const ModalImg = styled.img`
  width: auto;
  height: auto;
  border-radius: 10px 0 0 0;
  background: #000;

  @media (max-width: 640px) {
    display: none;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  line-height: 1.5;
  color: #141414;

  h1 {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: bold;
  }

  p {
    margin: 2rem 0;
    text-align: justify;
    padding-right: 2rem;
    font-size: 0.8rem;

    @media (max-width: 640px) {
      margin: 0;
      padding: 1rem;
    }
  }

  /* button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  } */
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={img1} alt="Faustyna" />
              <ModalContent>
                <h1>Objawienia i mistyczne prze??ycia</h1>
                <p>
                  Na polecenie jednego ze swoich spowiednik??w, ks. Micha??a
                  Sopo??ki, Faustyna zacz????a prowadzi?? szczeg????owy zapis swoich
                  prze??y??, znany potem jako Dzienniczek. Opisywa??a w nim
                  cierpienia i przeciwno??ci, stany mistyczne jakich doznawa??a,
                  przede wszystkim liczne wizje i objawienia. Dotyczy??y one
                  mi??dzy innymi namalowania obrazu Jezu ufam Tobie (do kt??rego
                  Jezus mia?? da?? szczeg????owe wskaz??wki), modlitw Koronki do
                  Mi??osierdzia Bo??ego i Godziny Mi??osierdzia [18], ustanowienia
                  ??wi??ta Mi??osierdzia Bo??ego (w pierwsz?? niedziel?? po
                  Wielkanocy), szerzenia czci Mi??osierdzia i obietnic z nim
                  zwi??zanych, oraz powo??ania do ??ycia nowego zgromadzenia, czyli
                  takiego dzie??a w Ko??ciele, kt??re by podj????o zadanie
                  wypraszania mi??osierdzia dla ??wiata (Apostolski Ruch Bo??ego
                  Mi??osierdzia). Zapisa??a r??wnie?? polecenie Jezusa Chrystusa
                  ????daj??cego, by zosta??o za??o??one nowe zgromadzenie g??osz??ce na
                  ca??y ??wiat kult Mi??osierdzia Bo??ego. Zgromadzenie to mia??o
                  r??wnie?? zrzesza?? wszystkich ??wieckich wiernych Ko??cio??a
                  katolickiego. Nakaz ten urzeczywistni?? si?? wraz z powo??aniem
                  do ??ycia Zgromadzenia Si??str Jezusa Mi??osiernego i powo??aniem
                  ??wieckiego Apostolskiego Ruchu Bo??ego Mi??osierdzia [6].
                </p>
                {/* <button>Join Now</button> */}
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
