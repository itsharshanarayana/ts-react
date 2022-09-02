import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';
import styles from './mui-dropdown.module.css';
import React, {useState} from "react";
import {Color} from "../../app/app";

/* eslint-disable-next-line */
export interface MuiDropdownProps {
  items: Color[];
  selected: Color;
  onSelectedChange: (s: Color) => void;
}

const MuiDropdown: React.FC<MuiDropdownProps> = ({items, selected, onSelectedChange}) => {

  const renderedItems = items.map(i => {
    return (
      <div key={i.label}>
        <MenuItem value={i.value} onClick={() => onSelectedChange(selected)}>{i.label}</MenuItem>
      </div>
    );
  });

  return (
    <div className={styles['container']}>
      <Box sx={{minWidth: 120}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Color</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selected?.label}
            label="Select Color">
            {renderedItems}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default MuiDropdown;
