import React, { FC } from "react";
import styled from "styled-components";
import { IconButton } from "../components";
import Pink from "src/assets/images/red_cartoon6.svg";
import Green from "src/assets/images/Group80.svg";
import Yellow from "src/assets/images/red_cartoon4.svg";
import Linkedin from "src/assets/images/vector.svg";
import Tweeter from "src/assets/images/vector1.svg";
import Facebook from "src/assets/images/vector2.svg";
import Pinterest from "src/assets/images/vector3.svg";

export const Footer: FC = () => {
  return (
    <Container>
      <Wrapper>
        <IconButton>
          <img src={Linkedin} alt="Linkedin" />
        </IconButton>
        <IconButton>
          <img src={Tweeter} alt="Tweeter" />
        </IconButton>
        <IconButton>
          <img src={Facebook} alt="Facebook" />
        </IconButton>
        <IconButton>
          <img src={Pinterest} alt="Pinterest" />
        </IconButton>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  padding: 65px 0 90px;
  background-color: var(--background_footer);
  border-top: 1px solid var(--border_footer);
  background-image: url(${Pink}), url(${Green}), url(${Yellow});
  background-position: left bottom, 90% top, right center;
  background-repeat: no-repeat, no-repeat, no-repeat;

  @media (max-width: 1024px) {
    background-image: url(${Green}), url(${Yellow});
    background-position: 90% top, right center;
    background-repeat: no-repeat, no-repeat;
  }
`;

const Wrapper = styled.div`
  padding: 0 0 0 25%;

  @media (max-width: 1024px) {
    padding: 0 0 0 10%;
  }
`;
