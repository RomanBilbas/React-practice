import { useState } from "react";
import { FaTrash } from "react-icons/fa6";

const usersDb = [
  {
    id: 1,
    firstName: "Test1",
    lastName: "Testovich1",
    age: 28,
    photoSrc: "https://sigc.edu/sigc/ad-sigc/datas/images/userimg.jpg",
  },
  {
    id: 2,
    firstName: "Test2",
    lastName: "Testovich2",
    age: 31,
    photoSrc:
      "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    firstName: "Test3",
    lastName: "Testovich3",
    age: 70,
    photoSrc:
      "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    firstName: "Test4",
    lastName: "Testovich4",
    age: 20,
    photoSrc:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    firstName: "Test5",
    lastName: "Testovich5",
    age: 28,
    photoSrc:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function UsersList() {
  const [users, setUsers] = useState(usersDb);

  function removeUser(index) {
    const usersCopy = [...users];
    usersCopy.splice(index, 1);
    setUsers(usersCopy);
  }

  function mapUsers(u, index) {
    return (
      <li key={u.id}>
        <img
          width="50px"
          height="50px"
          src={u.photoSrc}
          alt={`${u.firstName} ${u.lastName}`}
        />
        <button onClick={() => removeUser(index)}>
          <FaTrash />
        </button>
        <p>
          {u.firstName} {u.lastName} {u.age}
        </p>
      </li>
    );
  }

  return <ul>{users.map(mapUsers)}</ul>;
}

export default UsersList;
