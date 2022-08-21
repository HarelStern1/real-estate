import { House } from "./getHouses";
import { houses } from "./houses";

export const getHouseById = (id: number) => {
  const chosenHouse = houses.find((house: House) => house.id === id);
  if (chosenHouse) {
    return chosenHouse;
  }
  return null;
};

type IOverload = {
  (param: number): number[];
  (param: object): object[];
};

const overloadedArrowFunc: IOverload = (param: any) => {
  return [param, param];
};

let val = overloadedArrowFunc(["a"]);
