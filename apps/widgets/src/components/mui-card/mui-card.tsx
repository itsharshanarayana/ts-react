import styles from './mui-card.module.css';
import React from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

/* eslint-disable-next-line */
export interface MuiCardProps {
  title: string;
  snippet: string;
  pageUrl: string;
  pageId: number;
}

const MuiCard: React.FC<MuiCardProps> = ({title, snippet, pageUrl, pageId}) => {
  return (
    <div className={styles['container']} key={pageId}>
      <Card sx={{ minWidth: 345 }} variant="elevation" style={{border: '1px solid lightblue'}}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.primary">
            <span dangerouslySetInnerHTML={{__html: snippet}}></span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium"><a href={pageUrl}>Learn More</a></Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default MuiCard;
