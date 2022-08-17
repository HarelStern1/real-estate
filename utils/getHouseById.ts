import { House } from "./getHouses";
import { houses } from "./houses";

export const getHouseById = (id: number): House | null => {
  const chosenHouse = houses.find((house) => house.id === id);
  if (chosenHouse) {
    return chosenHouse;
  }
  return null;
};
