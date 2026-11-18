import { useState } from 'react';

function EventExamples() {
    // Basic handler
    const handleClick = () => {
        console.log('Button clicked!');
    };

    // Handler that receives the event object
    const handleInput = (event) => {
        console.log('Input value:', event.target.value);
    };

    // Handler with a custom parameter
    const handleItemClick = (itemId) => {
        console.log('Item clicked:', itemId);
    };

    return (
        <div>
            <h3>Event Examples</h3>

            {/* Basic click */}
            <button onClick={handleClick}>Click Me</button>

            {/* With event */}
            <input onChange={handleInput} placeholder="Type here" />

            {/* With parameter: wrap in an arrow function */}
            <button onClick={() => handleItemClick(123)}>
                Item 123
            </button>

            {/* Prevent default */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log('Form submitted');
                }}
            >
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Contact Form</h3>
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
            />
            <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
            />
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
            />
            <button type="submit">Send</button>
        </form>
    );
}

function EventExercises() {
    return (
        <div>
            <EventExamples />
            <ContactForm />
        </div>
    );
}

export default EventExercises;