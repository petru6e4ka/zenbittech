import React, { FC, MouseEventHandler } from "react";
import styled from "styled-components";

export const Button: FC<Props> = ({
  id,
  name,
  value,
  text,
  disabled,
  onClick,
}) => {
  return (
    <CTA
      id={id}
      name={name}
      value={value}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </CTA>
  );
};

export default Button;

const CTA = styled.button`
  margin: 11px 0;
  ${(props) => props.theme.buttons.primary};
  font-family: ${(props) => props.theme.fonts.common};
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.CTA};
  &:hover {
    color: ${(props) => props.theme.colors.CTA};
    background: ${(props) => props.theme.colors.white};
    box-shadow: inset 0px 0px 1px 1px ${(props) => props.theme.colors.CTA};
  }
`;

interface Props {
  id?: HTMLButtonElement["id"];
  name?: HTMLButtonElement["name"];
  value?: HTMLButtonElement["value"];
  text?: string;
  disabled?: HTMLButtonElement["disabled"];
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
