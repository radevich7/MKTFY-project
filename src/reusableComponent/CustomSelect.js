import React from "react";
import Select from "react-select";

const options = [
  {
    label: "React",
    value: "react",
  },
  {
    label: "JS",
    value: "js",
  },
  {
    label: "CSS",
    value: "css",
  },
];

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: "100%",
    borderBottom: "1px dotted pink",
    color: state.selectProps.menuColor,
    padding: 20,
  }),

  control: (_, { selectProps: { width } }) => ({
    width: width,
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};
const CustomSelect = () => {
  return (
    <div>
      <Select options={options} styles={customStyles} />
    </div>
  );
};

export default CustomSelect;
