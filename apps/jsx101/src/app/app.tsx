// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';


export function App() {

  let message = 'Bye there!';
  if (Math.random() > 0.5) message = 'Hello, there!';

  const name = 'Harsha';
  const age = 23;
  return (
    <>
      <h1>JSX 101</h1>

        {/*
          strings and numbers, and NO child objects.
          nulls, undefined, boolean, arrays might not show up as expected.
        */}
      <h3>{message}</h3>
      <h4>{new Date().toLocaleDateString()}</h4>
      <p>My name is: {name}</p>
      <p>My age is: {age}</p>
      <div />
    </>
  );
}

export default App;
