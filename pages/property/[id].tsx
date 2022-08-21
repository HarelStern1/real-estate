import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { getHouseById } from "../../utils/getHouseById";
import {
  Wrapper,
  Top,
  NameContainer,
  H2,
  P,
  Bottom,
  Left,
  Right,
  Figure,
  FormWrapper,
  AgentContainer,
  Name,
  InputWrapper,
  Input,
  ButtonWrapper,
  Button,
} from "../../components/HousePage/HousePage.styled";
import { Label, LabelFlex } from "../../components/Card/Card.styled";
import { Details, Detail } from "../../components/Card/Card.styled";
import home from "../../assets/img/icons/home.svg";

const HousePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const house: any = getHouseById(Number(id));

  return (
    <Wrapper>
      <Top>
        <NameContainer>
          <H2>{house?.name}</H2>
          <P>{house?.address}</P>
        </NameContainer>
        <LabelFlex style={{ alignItems: "center" }}>
          <Label color="green">{house?.type}</Label>
          <Label color="purple">{house?.country}</Label>
        </LabelFlex>
        <H2>$ {house?.price}</H2>
      </Top>
      <Bottom>
        <Left>
          <Image src={house?.imageLg} />
          <Details>
            <Detail>
              <Image src={home} height={15} width={15} />
              {house?.bedrooms}
            </Detail>
            <Detail>
              <Image src={home} height={15} width={15} />
              {house?.bathrooms}
            </Detail>
            <Detail>
              <Image src={home} height={15} width={15} />
              {house?.surface}
            </Detail>
          </Details>
          <div>{house?.description}</div>
        </Left>
        <Right>
          <FormWrapper>
            <AgentContainer>
              <Figure>
                <Image src={house?.agent?.image} layout="fill" />
              </Figure>
              <Name>
                <H2 style={{ fontSize: "18px" }}>{house?.agent.name}</H2>
                <P>View listings</P>
              </Name>
            </AgentContainer>
            <InputWrapper>
              <Input placeholder="Name" type="text" height="50" />
              <Input placeholder="Email" type="email" height="50" />
              <Input placeholder="Phone" type="number" height="50" />
              <Input
                placeholder="Hello, I'm interested to buy this property"
                height="150"
              />
            </InputWrapper>
            <ButtonWrapper>
              <Button color="purple">Message</Button>
              <Button color="white">Call</Button>
            </ButtonWrapper>
          </FormWrapper>
        </Right>
      </Bottom>
    </Wrapper>
  );
};

export default HousePage;
