// src/exercises/your-username/Intro.jsx
import React from 'react';

function Intro() {
    // 1. Define your variables
    const myName = "Stephen"; 
    const currentDate = new Date().toLocaleDateString();
    
    
    const currentHour = new Date().getHours();
    const isMorning = currentHour < 12;
    const isAfternoon = currentHour >= 12 && currentHour < 18;

    return (
        <div>
            
            <h1>Hello, I am {myName}!</h1>
            
            {/* 3 paragraphs about yourself */}
            <p>I am learning modern web development and practicing React fundamentals.</p>
            <p>I enjoy building interactive user interfaces and exploring terminal workflows.</p>
            <p>My goal this week is to master component structures and JSX expressions.</p>
            
            {/* Display current date using JavaScript */}
            <p><strong>Today's Date:</strong> {currentDate}</p>
            
            {/* Conditional message based on time of day */}
            {isMorning && <p>Good morning! Hope you have a productive day ahead.</p>}
            {isAfternoon && <p>Good afternoon! Keep up the great work.</p>}
            {!isMorning && !isAfternoon && <p>Good evening! Time to wind down or finish strong.</p>}
        </div>
    );
}

