import { Link } from "react-router-dom";

const Users = ({users}) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>User: <Link to={`/details/${user.id}`}>{user.name}</Link></li>
      ))}
    </ul>
  );
};

export default Users;