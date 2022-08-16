import React from "react";

/* eslint-disable-next-line */
interface SeasonDisplayProps {
  message: string;
}

interface SeasonDisplayState {
  count: number;
}

class SeasonDisplay extends React.Component<SeasonDisplayProps, SeasonDisplayState> {

  override state: SeasonDisplayState = { count: 0 }

  override render() {

    return (
      <div>
        <h2>Welcome to SeasonDisplay!</h2>
        {this.state.count}
        {this.props.message}
      </div>
    );
  }
}

export default SeasonDisplay;
