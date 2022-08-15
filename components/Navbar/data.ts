import mapPin from "../../assets/img/icons/map-pin.svg";
import home from "../../assets/img/icons/home.svg";
import card from "../../assets/img/icons/credit-card.svg";

export const data = [
  {
    id: "location",
    icon: mapPin,
    title: "Location",
    subtitle: "Select your place",
    options: ["United States", "Canada"],
  },
  {
    id: "type",
    icon: home,
    title: "Property",
    subtitle: "Choose property type",
    options: ["House", "Apartment"],
  },
  {
    id: "price",
    icon: card,
    title: "Price range",
    subtitle: "Choose price range",
    options: [
      "100000 - 130000",
      "130000 - 160000",
      "160000 - 190000",
      "190000 - 220000",
    ],
  },
];
