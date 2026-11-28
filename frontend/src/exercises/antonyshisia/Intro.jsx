// Computed once when the page loads, not on every render.
// Calling new Date() inside the component would run it on every render,
// which React's purity rule warns about.
const now = new Date();
const hour = now.getHours();

const today = now.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
});

function getTimeMessage(currentHour) {
    if (currentHour < 12) {
        return "Good morning! A good time to write some code.";
    }
    if (currentHour < 17) {
        return "Good afternoon! Keep going, you're making progress.";
    }
    return "Good evening! Time to wrap up and commit your work.";
}

function Intro() {
    return (
        <div>
            {/* My name as the heading */}
            <h1>Hello, I'm Antony Shisia</h1>

            <p>
                I work in logistics and supply chain management, where my job is to get
                the right things to the right place on time.
            </p>
            <p>
                I'm learning to build websites with HTML, CSS, JavaScript and now React.
            </p>
            <p>
                On CommunityHub I want to build a feature end to end and learn how a
                team ships software together.
            </p>

            {/* JavaScript expressions in curly braces */}
            <p>Today is {today}</p>
            <p>{getTimeMessage(hour)}</p>
        </div>
    );
}

export default Intro;