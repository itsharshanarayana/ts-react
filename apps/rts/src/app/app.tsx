// eslint-disable-next-line @typescript-eslint/no-unused-vars

import Parent from "../props/parent/parent";
import GuestList from "../state/guest-list/guest-list";
//import UserSearch, {User} from "../classes/user-search/user-search";
// import UserSearch, {User} from "../classes/user-search/user-search";
import UserSearch from "../refs/user-search/user-search";
import EventComponent from "../events/event-component/event-component";
import MyTable, {Car, ColumnDef} from "../ag-tables/my-table/my-table";


const cars: Car[] = [
  {make: "Toyota", model: "Celica", price: 35000},
  {make: "Ford", model: "Mondeo", price: 32000},
  {make: "Porsche", model: "Boxster", price: 72000}
];


const emptyCars: Car[] = [];

const colDefs: ColumnDef[] = [
  {field: 'make', filter: true},
  {field: 'model'},
  {field: 'price', filter: true},
];

export function App() {
  /*const users: User[] = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'Michael', age: 20 },
  ];*/

  return (
    <>
      {/*<Parent />*/}
      {/*<GuestList />*/}
      {/*<UserSearch />*/}
      {/*<EventComponent />*/}

      {/*<UserSearch />*/}
      {/*<MyTable cars={emptyCars}/>*/}

        <MyTable cars={[]}
                 colDefs={colDefs}
        />
      <div/>
    </>
  );
}

export default App;
