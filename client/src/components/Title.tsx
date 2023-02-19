import React, { FC } from "react";
import styled from "styled-components";

export const Title: FC<Props> = ({ text }) => {
  return <Heading>{text}</Heading>;
};

export default Title;

const Heading = styled.h1`
  margin: 0px 0px 40px;
  font-family: ${(props) => props.theme.fonts.common};
  font-weight: 400;
  font-size: 40px;
  line-height: 1.3;
  color: var(--text);
`;

interface Props {
  text: string;
}
