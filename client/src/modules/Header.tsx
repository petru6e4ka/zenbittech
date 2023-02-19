import React, { FC } from "react";
import ReactLogo from "src/assets/images/red_cartoon4logo.svg";
import styled from "styled-components";

export const Header: FC = () => {
  return (
    <Wrapper>
      <img src={ReactLogo} alt="Logo" width={122} height={122} />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  padding: 22px 15px 10px;
`;
