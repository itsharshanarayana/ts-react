// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import SearchBar from "../components/search-bar/search-bar";
import ImageList from "../components/image-list/image-list";

export function App() {
  return (
    <div className="ui container">
      <h1>Pics Application</h1>
      <SearchBar />
      <br/>
      <ImageList />
      <div />
    </div>
  );
}

export default App;
