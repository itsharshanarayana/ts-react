import styles from './my-dropdown.module.css';
import React, {useState} from "react";
import {Color} from "../../app/app";

/* eslint-disable-next-line */
export interface MyDropdownProps {
  options: Color[];
  selected: Color;
  onSelectedChange: (s: Color) => void;
}

const MyDropdown:React.FC<MyDropdownProps> = ({options, selected, onSelectedChange}) => {
  const [open, setOpen] = useState<boolean>(false);
  const renderedOptions = options.map( o => {
    if (o.value === selected.value) return null;
    return (
      <div key={o.value}
           className="item"
           onClick={() => onSelectedChange(o)}
      >
        {o.label}
      </div>
    );
  });
  return (
    <div className={`ui form`}>
      <div className="field">
        <label htmlFor="" className="label">Select a color</label>
        <div
          className={`ui selection dropdown ${open? 'visible active' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyDropdown;
