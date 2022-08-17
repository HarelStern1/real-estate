import { useRouter } from "next/router";
import React, { FC } from "react";
import { House } from "../../utils/getHouses";
import Card from "../Card/Card";
import { Wrapper } from "./HouseList.styled";

interface HouseListProps {
  houses: House[];
}

const HouseList: FC<HouseListProps> = ({ houses }) => {
  const router = useRouter();

  return (
    <Wrapper>
      {houses.map((house: House, idx: number) => {
        return (
          <Card
            key={idx}
            id={house.id}
            image={house.image}
            type={house.type}
            country={house.country}
            bedrooms={house.bedrooms}
            bathrooms={house.bathrooms}
            surface={house.surface}
            price={house.price}
            address={house.address}
          />
        );
      })}
    </Wrapper>
  );
};

export default HouseList;
