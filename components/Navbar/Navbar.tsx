import React, { FC, useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { data } from "./data";
import { Button, Container, Wrapper } from "./Navbar.styled";
import Image from "next/image";
import search from "../../assets/img/icons/search.svg";
import { getHouses } from "../../utils/getHouses";
import HouseList from "../HouseList/HouseList";
import { House } from "../../utils/getHouses";

const Navbar: FC = () => {
  const [location, setLocation] = useState("Location (any)");
  const [type, setType] = useState("Property (any)");
  const [price, setPrice] = useState("Price range (any)");
  const [result, setResult] = useState({ location, type, price });
  const [houses, setHouses] = useState<House[]>([]);

  const idToSetterMap: any = {
    location: setLocation,
    type: setType,
    price: setPrice,
  };

  const handleClick = () => {
    const resultObj = {
      location,
      type,
      price,
    };
    setResult(resultObj);
  };

  useEffect(() => {
    const filteredHouses = getHouses(result);
    setHouses(filteredHouses);
  }, [result]);

  return (
    <>
      <div style={{ position: "relative" }}>
        <Container>
          <Wrapper>
            {data.map(({ id, icon, title, subtitle, options }, idx) => {
              return (
                <Dropdown
                  key={idx}
                  icon={icon}
                  title={title}
                  subtitle={subtitle}
                  options={options}
                  setter={idToSetterMap[id]}
                />
              );
            })}
            <Button onClick={handleClick}>
              <Image src={search} height={20} width={20} />
            </Button>
          </Wrapper>
        </Container>
      </div>
      <HouseList houses={houses} />
    </>
  );
};

export default Navbar;
