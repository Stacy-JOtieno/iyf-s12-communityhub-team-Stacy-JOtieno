const variants = {
    primary: { background: '#2563eb', color: '#fff', border: '2px solid #2563eb' },
    secondary: { background: '#e5e7eb', color: '#111', border: '2px solid #e5e7eb' },
    outlined: { background: 'transparent', color: 'inherit', border: '2px solid #2563eb' }
};

function Card({ title, children, variant = 'primary' }) {
    return (
        <div
            style={{
                ...variants[variant],
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1rem'
            }}
        >
            <h4 style={{ margin: '0 0 0.5rem' }}>{title}</h4>
            {children}
        </div>
    );
}

export default Card;