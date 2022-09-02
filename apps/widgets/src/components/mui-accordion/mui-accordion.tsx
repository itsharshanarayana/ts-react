import styles from './mui-accordion.module.css';
import React from "react";
import {Item} from "../../types/types";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/* eslint-disable-next-line */
export interface MuiAccordionProps {
  items: Item[];
}

const MuiAccordion: React.FC<MuiAccordionProps> = ({items}) => {
  const [expanded, setExpanded] = React.useState<number>(0);

  const onAccordionChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : 0);
    };


  const itemsToRender = items.map((i, index) => {
    return (
      <Accordion key={index}
                 expanded={expanded === index}
                 onChange={onAccordionChange(index)}
                 style={{border: '1px solid lightblue', backgroundColor: `${expanded === index? '#f3fdff' : ''}`}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{width: '33%', flexShrink: 0, color: 'firebrick'}} variant="h6">
            <b>{i.title}</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color: 'green'}}>
            <b>{i.content}</b>
          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  });
  return (
    <div className={styles['container']}>
      <Typography sx={{ marginTop: '10px', marginBottom: '10px'}} variant="h4">Welcome to MuiAccordion!</Typography>
      <div className={styles['marginTop']}>
        {itemsToRender}
      </div>
    </div>
  );
}

export default MuiAccordion;
