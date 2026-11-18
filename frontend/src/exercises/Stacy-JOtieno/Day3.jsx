function UserCard({ user }) {
    return (
        <li>
            <strong>{user.name}</strong> ({user.email})
        </li>
    );
}

export default UserCard;