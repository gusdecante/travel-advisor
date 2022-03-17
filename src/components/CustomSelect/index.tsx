import React from "react";

import { MenuItem, TextField, TextFieldProps } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";

import { formLabelsTheme } from "./styles";

type ICustomSelect = {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
} & TextFieldProps;

const locales = [
  {
    value: "restaurants",
    label: "Restaurants",
  },
  {
    value: "hotels",
    label: "Hotels",
  },
  {
    value: "attractions",
    label: "Attractions",
  },
];

const CustomSelect: React.FC<ICustomSelect> = ({ type, setType, ...props }) => {
  return (
    <ThemeProvider theme={formLabelsTheme}>
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        value={locales}
        helperText="Please select your currency"
        variant="outlined"
        margin="dense"
        required={true}
        onChange={(e) => setType(e.target.value)}
      >
        {locales.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </ThemeProvider>
  );
};

export default CustomSelect;
