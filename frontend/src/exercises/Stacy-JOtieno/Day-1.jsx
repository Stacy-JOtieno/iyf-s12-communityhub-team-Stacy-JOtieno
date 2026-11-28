function Greeting({ name = 'Guest', timeOfDay = 'morning' }) {
    const messages = {
        morning: 'Good morning',
        afternoon: 'Good afternoon',
        evening: 'Good evening'
    };
    const message = messages[timeOfDay] ?? 'Hello';

    return (
        <h3>
            {message}, {name}!
        </h3>
    );
}

export default Greeting;