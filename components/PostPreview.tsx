type PostPreviewProps = {
    object: {
        id: number;
        title: string;
        description?: string;
        primaryimageurl?: string;
    };
};

export default function PostPreview({ object }: PostPreviewProps) {
    return (
        <div className="border p-4 rounded">
            <h2 className="font-bold">{object.title || 'Untitled'}</h2>
            {object.primaryimageurl && (
                <img
                    src={object.primaryimageurl}
                    alt={object.title || 'Artwork'}
                    className="w-full h-auto mt-2"
                />
            )}
            <p>{object.description || 'No description available.'}</p>
        </div>
    );
}
