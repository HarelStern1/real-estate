import { FC } from "react";
import {
  Container,
  HeroWrapper,
  Title,
  SubTitle,
  Paragraph,
  Button,
} from "./Hero.styled";

import React from "react";

const Hero: FC = () => {
  return (
    <HeroWrapper id="home">
      <Container>
        <SubTitle>Rent Your Dream House With Us.</SubTitle>
        <Paragraph>
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more.
        </Paragraph>
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
