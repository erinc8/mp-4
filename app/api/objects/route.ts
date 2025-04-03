import { NextResponse } from 'next/server';

export async function GET() {
    const apiKey = process.env.HARVARD_API_KEY;

    if (!apiKey) {
        return NextResponse.json(
            { error: 'API key is missing' },
            { status: 500 }
        );
    }

    try {
        const response = await fetch(
            `https://api.harvardartmuseums.org/object?apikey=${apiKey}&q=painting&size=10`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch data from Harvard Art Museums API');
        }

        const data = await response.json();

        return NextResponse.json(data.records || []);
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json(
            { error: 'Failed to fetch data' },
            { status: 500 }
        );
    }
}
