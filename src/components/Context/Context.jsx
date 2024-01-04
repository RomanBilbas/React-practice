import { useContext } from "react";
import { createContext } from "react";

const DataContext = createContext("defoult");
const UserContext = createContext(null);

function Context() {
  const data = "data in App";
  const user = { name: "Roman", surname: "Bilbas" };
  return (
    <>
      <UserContext value={user}>
        <DataContext.Provider value={data}>
          <Child />
        </DataContext.Provider>
      </UserContext>
    </>
  );
}

export default Context;

function Child() {
  return (
    <>
      <ChildChild />
    </>
  );
}

function ChildChild() {
  const data = useContext(DataContext);

  return (
    <div>
      {data}
      <ChildChildChild />
    </div>
  );
}

function ChildChildChild() {
  const user = useContext(UserContext);
  return <div>{user.name}</div>;
}
