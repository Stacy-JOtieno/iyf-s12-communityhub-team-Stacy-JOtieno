function UserList() {
  const users = ["Josphine", "Belinda", "Stacy", "Brian"];

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;