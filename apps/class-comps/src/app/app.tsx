// eslint-disable-next-line @typescript-eslint/no-unused-vars

import React from "react";
import SeasonDisplay from "../components/season-display/season-display";
import Spinner from "../components/spinner/spinner";

interface AppProps {
  default?: string;
}

interface AppState {
  lat: number | null;
  errorMessage?: string;

}

class App extends React.Component<AppProps, AppState> {

  override state: AppState = { lat: null, errorMessage: '' }

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

  renderContent = () => {

    if (this.state.errorMessage && !this.state.lat) return <div>Error: { this.state.errorMessage }</div>

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay month={new Date().getMonth()} latitude={this.state.lat} />
    }

    return <Spinner message="Please accept location request!" />

  }

  override render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }

}

export default App;
