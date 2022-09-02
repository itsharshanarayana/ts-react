import styles from './my-dropdown.module.css';
import React, {useEffect, useRef, useState} from "react";
import {Color} from "../../app/app";

/* eslint-disable-next-line */
export interface MyDropdownProps {
  options: Color[];
  selected: Color;
  onSelectedChange: (s: Color) => void;
}

const MyDropdown: React.FC<MyDropdownProps> = ({options, selected, onSelectedChange}) => {
  const [open, setOpen] = useState<boolean>(false);

  const uiFormRef = useRef<React.RefObject<HTMLDivElement> | undefined>();

  useEffect(() => {
    document.body.addEventListener('click', (event) => {
      /* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
       // @ts-ignore*/
      if (uiFormRef?.current?.contains(event.target)) {
        return
      } else {
        setOpen(false);
      }
    });
  }, []);

  const renderedOptions = options.map(o => {
    if (o.value === selected.value) return null;
    return (
      <div key={o.value}
           className="item"
           onClick={() => onSelectedChange(o)}>
        {o.label}
      </div>
    );
  });


  return (
    <div>
      {/*
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore*/}
      <div ref={uiFormRef} className={`ui form`}>
        <div className="field">
          <label htmlFor="" className="label">Select a color</label>
          <div
            className={`ui selection dropdown ${open ? 'visible active' : ''}`}
            onClick={() => setOpen(!open)}>
            <i className="dropdown icon"></i>
            <div className="text" style={{color: `${selected.value}`}}>{selected.label}</div>
            <div className={`menu ${open ? 'visible transition' : ''}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <b style={{color: `${selected.value}`}}>{selected.label}</b>
    </div>
  );
}

export default MyDropdown;
