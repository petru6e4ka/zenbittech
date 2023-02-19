import React, { ChangeEventHandler, FC } from "react";
import styled from "styled-components";

export const TextInput: FC<Props> = ({
  id,
  name,
  value,
  placeholder,
  disabled,
  required,
  onChange,
}) => {
  return (
    <Input
      id={id}
      name={name}
      value={value}
      placeholder={required ? placeholder + "*" : placeholder}
      disabled={disabled}
      required={required}
      onChange={onChange}
      type="text"
      autoComplete="off"
    />
  );
};

export default TextInput;

const Input = styled.input`
  width: 100%;
  margin: 0px 0px 8px;
  ${(props) => props.theme.input};
  font-family: ${(props) => props.theme.fonts.common};
`;

interface Props {
  id?: HTMLInputElement["id"];
  name?: HTMLInputElement["name"];
  value?: HTMLInputElement["value"];
  placeholder?: HTMLInputElement["placeholder"];
  disabled?: HTMLInputElement["disabled"];
  required?: HTMLInputElement["required"];
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
