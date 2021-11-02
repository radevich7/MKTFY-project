import React, { useState } from "react";
import styled from "styled-components";
import { FaCaretDown } from "react-icons/fa";

const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 100vh;
`;

const DropDownContainer = styled("div")`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  position: relative;
  cursor: pointer;
`;

const DropDownHeader = styled("div")`
  // margin-bottom: 18px;
  padding: 14px 12px;
  border: 1px solid #e2e2e2;
  font-weight: 300;
  font-size: 1.6em;
  color: #2a2e43;
  width: 100%;
  height: 54px;
  background: #ffffff;
  border-radius: 4px;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  top: 95%;
  z-index: 100;
  width: 100%;
`;

const DropDownList = styled("ul")`
  margin: 0;
  margin-top: 5px;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  border-radius: 4px;
  box-sizing: border-box;
  color: #000000;
  font-size: 1.4em;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  padding: 12px 12px;
  margin-bottom: 0.8em;
  &:hover {
    color: #9349de;
    background-color: #f1f1f1;
  }
`;

export default function CustomSelect(props) {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState();

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    props.onSetValue(value);
    setIsOpen(false);
    // console.log(selectedOption);
  };
  // console.log(selectedOption); //console log is asyncrhronus function so it will run before setState
  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        {props.value || "Select"}

        <span className="caret_custom">
          <FaCaretDown />
        </span>
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {props.options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}
