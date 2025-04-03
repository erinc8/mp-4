import PostPreview from '@/components/PostPreview';

type HarvardObject = {
    id: number;
    title: string;
    description?: string;
    primaryimageurl?: string;
};

const dummyObjects: HarvardObject[] = [
    {
        id: 1,
        title: 'Starry Night',
        description: 'A famous painting by Vincent van Gogh.',
        primaryimageurl: 'https://example.com/starry-night.jpg',
    },
    {
        id: 2,
        title: 'Mona Lisa',
        description: 'A portrait painting by Leonardo da Vinci.',
        primaryimageurl: 'https://example.com/mona-lisa.jpg',
    },
];

export default function HomePage() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Harvard Art Museum Objects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dummyObjects.map((object) => (
                    <PostPreview key={object.id} object={object} />
                ))}
            </div>
        </div>
    );
}
