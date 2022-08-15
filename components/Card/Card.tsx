import Image from "next/image";
import React, { FC } from "react";

interface CardProps {
  img: any;
}

const Card: FC<CardProps> = ({ img }) => {
  return (
    <div>
      <Image src={img} />
    </div>
  );
};

export default Card;
