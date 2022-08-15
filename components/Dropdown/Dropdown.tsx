import React, { FC, SetStateAction, useState } from "react";
import {
  Column,
  Content,
  Title,
  TitleWrapper,
  Wrapper,
  Row,
  Subtitle,
  Option,
} from "./dropdown.styled";
import { motion } from "framer-motion";
import Image from "next/image";
import arrowDown from "../../assets/img/icons/arrow-down.svg";
import arrowUp from "../../assets/img/icons/arrow-up.svg";

interface DropdownProps {
  title: string;
  icon: string;
  subtitle: string;
  options: string[];
  setter: (params: string) => void;
}

const Dropdown: FC<DropdownProps> = ({
  icon,
  title,
  subtitle,
  options,
  setter,
}) => {
  const [dropdownTitle, setDropdownTitle] = useState(title);
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  const handleClick = (idx: number, option: string) => {
    setActive(false);
    setDropdownTitle(option);
    setter(option);
  };

  return (
    <Wrapper>
      <TitleWrapper active={active} onClick={toggleActive}>
        <Row>
          <Image src={icon} height={25} width={25} />
          <Column>
            <Title>{dropdownTitle}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </Column>
        </Row>
        <motion.img
          initial={{ rotate: 0 }}
          animate={active ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.2 }}
          src={arrowDown.src}
          height={20}
          width={20}
        />
      </TitleWrapper>
      {active && (
        <Content
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {options.map((option, idx) => {
            return (
              <Option onClick={() => handleClick(idx, option)} key={idx}>
                {option}
              </Option>
            );
          })}
        </Content>
      )}
    </Wrapper>
  );
};

export default Dropdown;
