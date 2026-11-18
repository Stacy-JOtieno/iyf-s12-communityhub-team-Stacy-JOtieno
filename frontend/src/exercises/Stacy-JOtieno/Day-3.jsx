import UserCard from './UserCard';

function UserList({ users = [] }) {
    if (users.length === 0) {
        return <p>No users found.</p>;
    }

    return (
        <ul>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </ul>
    );
}

export default UserList;