import PostPreview from '../components/PostPreview';

type HarvardObject = {
    id: number;
    title: string;
    description?: string;
    primaryimageurl?: string;
};

export async function getServerSideProps() {
    const apiKey = process.env.HARVARD_API_KEY;

    try {
        const response = await fetch(
            `https://api.harvardartmuseums.org/object?apikey=${apiKey}&q=painting`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch data from Harvard Art Museums API');
        }

        const data = await response.json();
        return { props: { objects: data.records || [] } };
    } catch (error) {
        console.error(error);
        return { props: { objects: [] } };
    }
}

export default function HomePage({ objects }: { objects: HarvardObject[] }) {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Harvard Art Museum Objects</h1>
            {objects.length === 0 ? (
                <p>No objects found.</p>
            ) : (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {objects.map((object) => (
                        <li key={object.id}>
                            <PostPreview object={object} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
