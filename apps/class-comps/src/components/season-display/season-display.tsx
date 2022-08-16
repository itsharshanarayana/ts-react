import React from "react";

/* eslint-disable-next-line */
interface SeasonDisplayProps {
  message: string;
}

interface SeasonDisplayState {
  lat: number | null;
  errorMessage: string;
}

class SeasonDisplay extends React.Component<SeasonDisplayProps, SeasonDisplayState> {

  // creates constructor and initializes state within it.
  override state: SeasonDisplayState = { lat : null, errorMessage: '' }

  override render() {

    if (this.state.errorMessage && !this.state.lat) return <div>Error: {this.state.errorMessage }</div>

    if (!this.state.errorMessage && this.state.lat) return <div>Latitude: { this.state.lat }</div>

    return <div>Loading ...</div>

  }

  override componentDidMount() {
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
