import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";
import {
  Wrapper,
  Content,
  LabelFlex,
  Label,
  Address,
  Details,
  Price,
  Detail,
} from "./Card.styled";
import home from "../../assets/img/icons/home.svg";
import { motion } from "framer-motion";

interface CardProps {
  id: number;
  type: string;
  country: string;
  address: string;
  bedrooms: string;
  bathrooms: string;
  surface: string;
  price: string;
  image: any;
}

const Card: FC<CardProps> = ({
  id,
  type,
  country,
  address,
  bedrooms,
  bathrooms,
  surface,
  price,
  image,
}) => {
  const router = useRouter();

  const goToHousePage = (id: number) => {
    router.push(`/property/${id}`);
  };

  return (
    <Wrapper
      as={motion.div}
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
      onClick={() => goToHousePage(id)}
    >
      <Image src={image} />
      <Content>
        <LabelFlex>
          <Label color="green">{type}</Label>
          <Label color="purple">{country}</Label>
        </LabelFlex>
        <Address>{address}</Address>
        <Details>
          <Detail>
            <Image src={home} height={15} width={15} />
            {bedrooms}
          </Detail>
          <Detail>
            <Image src={home} height={15} width={15} />
            {bathrooms}
          </Detail>
          <Detail>
            <Image src={home} height={15} width={15} />
            {surface}
          </Detail>
        </Details>
        <Price>$ {price}</Price>
      </Content>
    </Wrapper>
  );
};

export default Card;
