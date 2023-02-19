import React, { ChangeEventHandler, FC } from "react";
import styled from "styled-components";

export const TextArea: FC<Props> = ({
  id,
  name,
  value,
  placeholder,
  disabled,
  required,
  rows,
  onChange,
}) => {
  return (
    <Area
      id={id}
      name={name}
      value={value}
      placeholder={required ? placeholder + "*" : placeholder}
      disabled={disabled}
      required={required}
      rows={rows ? rows : 5}
      onChange={onChange}
      autoComplete="off"
    />
  );
};

export default TextArea;

const Area = styled.textarea`
  width: 100%;
  margin: 0px 0px 8px;
  ${(props) => props.theme.input};
  font-family: ${(props) => props.theme.fonts.common};
`;

interface Props {
  id?: HTMLTextAreaElement["id"];
  name?: HTMLTextAreaElement["name"];
  value?: HTMLTextAreaElement["value"];
  placeholder?: HTMLTextAreaElement["placeholder"];
  disabled?: HTMLTextAreaElement["disabled"];
  required?: HTMLTextAreaElement["required"];
  rows?: HTMLTextAreaElement["rows"];
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}
