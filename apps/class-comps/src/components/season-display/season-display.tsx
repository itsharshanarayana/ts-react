import React from "react";

/* eslint-disable-next-line */
interface SeasonDisplayProps {
  month: number;
  latitude: number | null;
  errorMessage: string | null;
}

interface SeasonDisplayState {
  lat: number | null;
  errorMessage: string;
}

class SeasonDisplay extends React.Component<SeasonDisplayProps, SeasonDisplayState> {

  // creates constructor and initializes state within it.
  override state: SeasonDisplayState = { lat : null, errorMessage: '' }

  override render() {

    /*if (this.state.errorMessage && !this.state.lat) return <div>Error: {this.state.errorMessage }</div>*/
    if (this.props.errorMessage && !this.props.latitude) return <div>Error: { this.props.errorMessage }</div>

    /*if (!this.state.errorMessage && this.state.lat) {*/
    if (!this.props.errorMessage && this.props.latitude) {
      const latitude = "Latitude: " + this.props.latitude;
      const season = this.getSeason(this.props.latitude, this.props.month)
      return this.props.latitude;
    }

    return <div>Loading ...</div>

  }


  getSeason = (lat: number | null, month: number): string => {
    console.log('Latitude: ', lat)
    console.log('Month:', month)
    return '';
  }

  /*override componentDidMount() {
    console.log("SeasonDisplay component mounted!");
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('Successfully processed:', position.coords)
        this.setState({lat: position.coords.latitude});
      },
      (err) => {
        console.log('Errored out:', err)
        this.setState({ errorMessage: err.message })
      }
    );
  }*/

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
