// Day 3: List with keys
// frontend/src/exercises/antonyshisia/

function UserCard({ name, role }) {
    return (
        <article className="user-card">
            <h3>{name}</h3>
            <p>{role}</p>
        </article>
    );
}

function UserList({ users }) {
    if (users.length === 0) {
        return <p>No users to show.</p>;
    }

    return (
        <div className="user-list">
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    name={user.name}
                    role={user.role}
                />
            ))}
        </div>
    );
}

const team = [
    { id: 1, name: "Antony Shisia", role: "Member" },
    { id: 2, name: "Stacy J Otieno", role: "Team lead" },
    { id: 3, name: "Josphine Moraa", role: "Member" }
];

function Day3UserList() {
    return (
        <div>
            <h1>Day 3: List with Keys</h1>
            <UserList users={team} />
            <UserList users={[]} />
        </div>
    );
}

export default Day3UserList;
