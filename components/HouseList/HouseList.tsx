import React, { FC } from "react";
import { House } from "../../utils/getHouses";
import Card from "../Card/Card";
import { Wrapper } from "./HouseList.styled";

interface HouseListProps {
  houses: House[];
}

const HouseList: FC<HouseListProps> = ({ houses }) => {
  return (
    <Wrapper>
      {houses.map((house: House, idx: number) => {
        return <Card key={idx} img={house.image} />;
      })}
    </Wrapper>
  );
};

export default HouseList;
