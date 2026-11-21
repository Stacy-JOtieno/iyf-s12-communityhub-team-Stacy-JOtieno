
import Card from './Card';
import Button from './TailwindButton';

function TestTailwind() {
    return (
        <div className="p-8 space-y-6">

            <Card title="Welcome to CommunityHub">
                <p>
                    Connect with other members,
                    share ideas and participate
                    in discussions.
                </p>
            </Card>

            <div className="flex gap-4">

                <Button>
                    Create Post
                </Button>

                <Button variant="secondary">
                    Cancel
                </Button>

                <Button variant="danger">
                    Delete
                </Button>

            </div>

        </div>
    );
}

export default TestTailwind;
