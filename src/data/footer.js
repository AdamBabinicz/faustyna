import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: uuidv4(),
    title: "Modlitwy",
    links: ["www.milosierdzieboze.pl"],
    to: "//www.milosierdzieboze.pl",
  },
  {
    id: uuidv4(),
    title: "Kanonizacja",
    links: ["www.faustyna.pl"],
    to: "//www.milosierdzieboze.pl/homilia.php?text=12",
  },
  {
    id: uuidv4(),
    title: "Kult Bożego Miłosierdzia",
    links: ["swfaustyna.eu"],
    to: "//swfaustyna.eu/kult-bozego-milosierdzia",
  },
];

export default data;
