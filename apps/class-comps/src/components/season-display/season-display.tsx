import React from "react";

import styles from './season-display.module.css';

/* eslint-disable-next-line */
interface SeasonDisplayProps {
  month: number;
  errorMessage?: string;
  latitude: number;
}

interface SeasonDisplayState {
  lat: number | null;
  errorMessage: string;
}

type SeasonType = {
  'summer': {
    text: string;
    iconName: string;
  },
  'winter': {
    text: string;
    iconName: string;
  }
}

class SeasonDisplay extends React.Component<SeasonDisplayProps, SeasonDisplayState> {

  seasonConfig: SeasonType = {
    summer: {
      text: 'Let\'s hit the beach!',
      iconName: 'sun'
    },
    winter: {
      text: 'Burr, it is chilly',
      iconName: 'snowflake'
    }
  }
  getSeason = (lat: number, month: number): string => {
    console.log('Latitude: ', lat)
    console.log('Month:', month)

    if (month > 2 && month < 9) {
      return lat > 0 ? 'summer' : 'winter';
    } else {
      return lat < 0 ? 'winter' : 'summer';
    }
  }

  override render() {
    const season: string = this.getSeason(this.props.latitude, this.props.month);


    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { text, iconName } = this.seasonConfig[`${season}`];
    return (
      <div className={`${styles["season-display"]} ${styles[season]}`}>
        <i className={`${styles["icon-left"]} ${iconName} icon massive ${iconName}`}/>
        <h1>{text}</h1>
        <i className={`${styles["icon-right"]} ${iconName} icon massive ${iconName}`}/>
      </div>
    );
  }

  override componentDidUpdate(prevProps: Readonly<SeasonDisplayProps>, prevState: Readonly<SeasonDisplayState>, snapshot?: any) {
    console.log('prevProps: ', prevProps);
    console.log('prevState: ', prevState);
    console.log('snapshot: ', snapshot);
    console.log('componentDidUpdate()... component is going to be re-rendered...');
  }

  override componentWillUnmount() {
    console.log('componentWillUnmount() ...')
  }
}

export default SeasonDisplay;
