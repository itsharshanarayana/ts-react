// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import React from "react";
import SeasonDisplay from "../components/season-display/season-display";

const App: React.FC = () => {
  let position = null;
  window.navigator.geolocation.getCurrentPosition(
    (data) => {
      console.log('Successfully processed:', data.coords)
      position = data.coords
    },
    (err) => console.log('Errored out:', err)
  );

  return (
    <>
      <h2>Class based components!</h2>
      {position}
      <SeasonDisplay message={"Hello, there!"}/>
      <div />
    </>
  );
}

export default App;
