import React, { FC } from "react";
import { Footer, Header } from "src/modules";
import Clouds from "src/assets/images/Cloud.png";
import Sun from "src/assets/images/Ellipse31.png";
import Map from "src/assets/images/MaskGroup.png";
import Yellow from "src/assets/images/red_cartoon_3bg.svg";
import Pink from "src/assets/images/goodie1bg.svg";
import styled from "styled-components";

export const Common: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Container>
        <Wrapper>
          <Header />
          <Main>{children}</Main>
        </Wrapper>
      </Container>
      <Wrapper>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Common;

const Container = styled.div`
  width: 100%;
  background-image: url(${Clouds}), url(${Sun}), url(${Pink}), url(${Yellow}),
    url(${Map});
  background-position: center 100px, 720px 20px, 60% 510px, 70% 550px, 110% top;
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat;

  @media (max-width: 1200px) {
    background-image: url(${Clouds}), url(${Sun}), url(${Map});
    background-position: center 100px, 720px 20px, 110% top;
    background-repeat: no-repeat, no-repeat, no-repeat;
  }

  @media (max-width: 768px) {
    background-image: url(${Clouds}), url(${Sun});
    background-position: center 100px, 720px 20px;
    background-repeat: no-repeat, no-repeat;
  }
`;

const Wrapper = styled.div`
  min-width: 480px;
`;

const Main = styled.main`
  padding: 0 10% 150px;
`;
