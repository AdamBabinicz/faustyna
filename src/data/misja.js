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
      "Od lewej Helena Kowalska (św. Faustyna), w środku jej siostra Józefa, a po prawej - siostra Genowefa (Ewa). Zdjęcie wykonano w Łodzi w 1923 roku.",
  },
  {
    id: uuidv4(),
    image: img1,
    title: "Rodzina Lipszyców",
    desc:
      "Helena Kowalska pracowała w latach 1924-25, jako pomoc domowa w rodzinie Aldony i Samuela Lipszyców. Warto zauważyć, że w jej 20-letnim okresie życia świeckiego, Ostrówek, jest jedynym miejscem wskazanym jej przez Pana Jezusa, za pośrednictwem Ks. Jakuba Dąbrowskiego. To tu, w Ostrówku, Helena zakończyła świecki etap życia. W jej dawnym pokoju znajduje się teraz mała kaplica z relikwiami. Zachowała się drewniana klatka schodowa (z pewnymi ubytkami). Kamienica tchnie obecnością św. Faustyny. Mieszkała z wujkiem, ciocią oraz ich córką. Wujostwo zajmowało dwa małe pomieszczenia na parterze. Dla Heleny wydzielono kawałek pokoju.",
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
