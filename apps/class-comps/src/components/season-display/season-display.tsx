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

  override state: SeasonDisplayState = { lat : null, errorMessage: '' }

  constructor(props: SeasonDisplayProps) {
    super(props);

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

  override render() {

    return (
      <div>
        <h2>Welcome to SeasonDisplay!</h2>
        <span>{this.state.lat && this.state.lat}</span>
        <span>{this.state.errorMessage && this.state.errorMessage}</span>
        <p>{this.props.message}</p>
      </div>
    );
  }

  override componentDidMount() {
    console.log("SeasonDisplay component mounted!");
  }
}

export default SeasonDisplay;
