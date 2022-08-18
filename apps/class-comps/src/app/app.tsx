// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import React from "react";
import SeasonDisplay from "../components/season-display/season-display";

interface AppProps {}
interface AppState {
  lat: number | null;
  errorMessage: string | null;

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

  override render() {
    return (
      <>
        <h2>Class based components!</h2>
        <SeasonDisplay latitude={this.state.lat}
                       month={new Date().getMonth()}
                       errorMessage={this.state.errorMessage}
        />
        <div/>
      </>
    );
  }
}

export default App;
