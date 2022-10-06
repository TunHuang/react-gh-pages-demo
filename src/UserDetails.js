import { useParams } from "react-router-dom";

const UserDetails = ({ users }) => {
  const { id } = useParams();
  const currentUser = users.find((user) => user.id === +id);
  const { name, username, email, phone, website } = currentUser;
  return (
    <ul>
      <li>Name: {name}</li> {/* currentUser.name */}
      <li>User Name: {username}</li>
      <li>Email: {email}</li>
      <li>Phone Number: {phone}</li>
      <li>Website: {website}</li>
    </ul>
  );
};

export default UserDetails;
