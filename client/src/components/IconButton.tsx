import React, { FC, MouseEventHandler } from "react";
import styled from "styled-components";

export const IconButton: FC<Props> = ({
  id,
  name,
  value,
  disabled,
  onClick,
  children,
}) => {
  return (
    <Button
      id={id}
      name={name}
      value={value}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default IconButton;

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 10px;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    box-shadow: inset 0px 0px 1px 1px
      ${(props) => props.theme.colors.border_input};
  }
`;

interface Props {
  id?: HTMLButtonElement["id"];
  name?: HTMLButtonElement["name"];
  value?: HTMLButtonElement["value"];
  disabled?: HTMLButtonElement["disabled"];
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}
