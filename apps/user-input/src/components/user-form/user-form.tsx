import styles from './user-form.module.css';
import React, {InputHTMLAttributes} from "react";

/* eslint-disable-next-line */
export interface UserFormProps {
}

export interface UserFormState {
  name: string;
}

class UserForm extends React.Component<UserFormProps, UserFormState> {

  override state: UserFormState = {name: ''};

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Prevent default behavior.
    event.preventDefault();
    console.log("Default behavior is prevented ...");
    this.setState({name: event.target.value});
    console.log("Name of the controlled element:", this.state.name);
  };

  onButtonClick = (event1: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked!");
    event1.preventDefault();
  };

  onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("Form submitted ...")
    event.preventDefault();
    console.log("Form submitted after state update:", this.state.name);
  }

  override render() {
    return (
      <div className={styles['container']}>
        <h1>Welcome to UserForm!</h1>
        <div>
          <form onSubmit={this.onFormSubmit}>
            <label>Enter name:</label>
            <input id="name"
                   type="text"
                   onChange={this.onInputChange}
                   value={this.state.name}
            />
            <button onSubmit={this.onButtonClick}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default UserForm;
