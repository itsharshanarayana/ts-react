import React from "react";

/* eslint-disable-next-line */
interface SeasonDisplayProps {
  message: string;
}

interface SeasonDisplayState {
  lat: number | null;
}

class SeasonDisplay extends React.Component<SeasonDisplayProps, SeasonDisplayState> {

  override state: SeasonDisplayState = { lat : null }

  constructor(props: SeasonDisplayProps) {
    super(props);

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('Successfully processed:', position.coords)
        this.setState({lat: position.coords.latitude});
      },
      (err) => console.log('Errored out:', err)
    );
  }

  override render() {

    return (
      <div>
        <h2>Welcome to SeasonDisplay!</h2>
        <p>{this.state.lat && this.state.lat}</p>
        <p>{this.props.message}</p>
      </div>
    );
  }

  override componentDidMount() {
    console.log("SeasonDisplay component mounted!");
  }
}

export default SeasonDisplay;
