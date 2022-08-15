import { FC, useState } from "react";
import { data } from "./data";
import { Wrapper, Title, Content } from "./FilterMenu.styled";
import Dropdown from "../Dropdown/Dropdown";
import { motion } from "framer-motion";

const FilterMenu: FC = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive((prev) => !prev);
  };

  return (
    <>
      <Wrapper active={active}>
        <Title onClick={toggleMenu}>Search Property By Filter</Title>
        {active && (
          <Content
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {data.map(({ title, options }, idx) => {
              return <Dropdown key={idx} title={title} options={options} />;
            })}
          </Content>
        )}
      </Wrapper>
    </>
  );
};

export default FilterMenu;
