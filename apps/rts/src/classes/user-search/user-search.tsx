import styles from './user-search.module.css';
import {ReactComponent} from "*.svg";
import {Component} from "react";

export interface User {
  name: string;
  age: number;
}

/* eslint-disable-next-line */
interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user?: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {

  override state: UserSearchState = {
    name: '',
    user: undefined
  }

  onClick = () => {
    const foundUser = this.props.users.find(
      u => u.name === this.state.name
    );

    this.setState({name: '', user: foundUser});
    console.log("Found user:", foundUser);
  }

  renderUser = () => {
    const {name, user} = this.state;
    return (
      <div>
        Name: {user && user.name}
        <br/>
        <br/>
        Age: {user && user.age}
      </div>
    );
  }

  override render() {
    const {name, user} = this.state;

    return (
      <div className={styles['container']}>
        <h1>Welcome to class based UserSearch!</h1>
        <input value={name}
               onChange={e => this.setState({name: e.target.value})}/>
        <button onClick={this.onClick}>Find User</button>

        <br/>
        <br/>
        {this.renderUser()}
      </div>
    );
  }

}

export default UserSearch;
