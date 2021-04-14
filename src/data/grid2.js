import { v4 as uuidv4 } from "uuid";
import img1 from "../images/6.jpg";
import img2 from "../images/5.jpg";
import img3 from "../images/14.jpg";

const data = [
  {
    id: uuidv4(),
    image: img2,
    title: "Helena Kowalska w ostatnim etapie życia świeckiego",
    desc:
      "Od lewej Helena Kowalska (św. Faustyna), w środku jej siostra Józefa, a po prawej - siostra Genowefa (Ewa). Zdjęcie wykonano w Łodzi w 1923 roku. Jednym z miejsc gdzie chodziły na „bale” był Park „Wenecja” – obecny Park im. J. Słowackiego. To do tego parku pewnego lipcowego dnia 1924 roku – ubrana w różową sukienkę z falbankami – wybrała się na zabawę ze swoimi siostrami i koleżanką - Lucyną Strzelecką, późniejszą siostra Julitą, Urszulanką SJK. To w tym miejscu Helenka doznała niezwykłego przeżycia, o czym w „Dzienniczku” napisała w sposób następujący: „Kiedy wszyscy najlepiej się bawili, dusza moja doznała wewnętrznych [udręczeń]. W chwili, kiedy zaczęłam tańczyć, nagle ujrzałam obok Jezusa umęczonego, obnażonego z szat, okrytego całego ranami, który mi powiedział te słowa: Dokąd cię cierpiał będę i dokąd mnie zwodzić będziesz? W tej chwili umilkła muzyka, znikło sprzed oczu moich towarzystwo, w którym się znajdowałam, pozostał Jezus i ja. Usiadłam obok swej drogiej siostry, pozorując to, co zaszło w duszy mojej bólem. Po chwili opuściłam potajemnie towarzystwo i siostrę...” (Dz.9).",
    source:
      "https://sadeczanin.info/kultura-edukacja-religia-dobra-ksiazka/dokad-mnie-zwodzic-bedziesz",
  },
  {
    id: uuidv4(),
    image: img1,
    title: "Rodzina Lipszyców",
    desc:
      "Helena Kowalska pracowała w latach 1924-25, jako pomoc domowa w rodzinie Aldony i Samuela Lipszyców. Warto zauważyć, że w jej 20-letnim okresie życia świeckiego, Ostrówek, jest jedynym miejscem wskazanym jej przez Pana Jezusa, za pośrednictwem Ks. Jakuba Dąbrowskiego. To tu, w Ostrówku, Helena zakończyła świecki etap życia. Hela przyszła do nas z malutkim węzełkiem. W chustkę zawiązany był cały jej majątek, zabrany z domu rodziców”…. „Pamiętam jej zdrowy, radosny śmiech. Śpiewała dużo i mnie jej osoba kojarzy się z pieśnią, którą najczęściej śpiewała, i której się od niej nauczyłam: „Jezusa ukrytego mam w Sakramencie czcić”. Teraz, gdy dowiedziałam się o jej drodze, zrozumiałam, że ta pieśń była całą treścią jej życia. Zrobiła wrażenie zdrowej, pogodnej, nawet wesołej. Gładkie rudawe włosy, duży warkocz, miła, jasna, spokojna twarz nieco piegowata”.",
    source:
      "https://www.wyprawaznaturaikultura.com.pl/dom-sw-siostry-faustyny-kowalskiej-w-ostrowku/",
  },
  {
    id: uuidv4(),
    image: img3,
    title: "Tak wyglądała Helena Kowalska w czasie pobytu w Ostrówku ",
    desc:
      "Obraz namalowany przez Ewę Mikę, który znajduje się w kościele w Ostrówku, gdzie Helena Kowalska - pracowała jako pomoc domowa w rodzinie Aldony i Samuela Lipszyców.",
  },
];

export default data;
