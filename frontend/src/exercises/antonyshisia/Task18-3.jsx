// Task 18.3: Component library demo
// The reusable pieces live in frontend/src/components/shared/.

import { useState } from "react";
import { Avatar, Button, Card, Input, Modal } from "../../components/shared";

function Task18_3() {
    const [name, setName] = useState("");
    const [open, setOpen] = useState(false);

    return (
        <div>
            <h1>Task 18.3: Component Library</h1>
            <Card title="Member">
                <Avatar name="Antony Shisia" />
                <Input
                    label="Display name"
                    name="display-name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your name"
                />
                <Button onClick={() => setOpen(true)}>Open dialog</Button>
            </Card>
            {open && (
                <Modal title="Shared modal" onClose={() => setOpen(false)}>
                    <p>This dialog closes with the button or the Escape key.</p>
                </Modal>
            )}
        </div>
    );
}

export default Task18_3;
