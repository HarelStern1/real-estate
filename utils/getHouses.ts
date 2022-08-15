import { houses } from "./houses";

type ResultObject = {
  location: string;
  type: string;
  price: string;
};

export type House = {
  id: number;
  type: string;
  name: string;
  description: string;
  image: any;
  imageLg: any;
  country: string;
  address: string;
  bedrooms: string;
  bathrooms: string;
  surface: string;
  year: string;
  price: string;
  agent: {
    image: any;
    name: string;
    phone: string;
  };
};

export const getHouses = (result: ResultObject) => {
  const minPrice = Number(result.price.slice(0, 6));
  const maxPrice = Number(result.price.slice(9));

  const filteredHouses: House[] = houses.filter(
    (house: House) =>
      (house.country === result.location || result.location === "") &&
      (house.type === result.type || result.type === "") &&
      ((Number(house.price) <= maxPrice && Number(house.price) >= minPrice) ||
        result.price === "")
  );
  console.log(filteredHouses);
  return filteredHouses;
};
