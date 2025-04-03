import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const apiKey = process.env.HARVARD_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'API key is missing' });
    }

    try {
        const response = await fetch(
            `https://api.harvardartmuseums.org/object?apikey=${apiKey}&q=painting`
        );
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
