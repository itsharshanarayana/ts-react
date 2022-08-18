import React from "react";

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

class SeasonDisplay extends React.Component<SeasonDisplayProps, SeasonDisplayState> {

  getSeason = (lat: number, month: number): string => {
    console.log('Latitude: ', lat)
    console.log('Month:', month)

    if ( month > 2 && month < 9 ) {
      return lat > 0 ?  'summer' : 'winter';
    } else {
      return lat < 0 ? 'winter' : 'summer';
    }
  }

  override render() {
    const season = this.getSeason(this.props.latitude, this.props.month);
    const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
    const icon = season === 'winter' ? 'snowflake' : 'sun';
    return (
      <div>
        <i className={`${icon} icon`} />
        <h3>{text}</h3>
        <i className={`${icon} icon`} />
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
