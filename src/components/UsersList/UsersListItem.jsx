import { FaTrash } from "react-icons/fa6";

function UsersListItem(props) {
  const { user: u, index, removeUser } = props;
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

export default UsersListItem;
