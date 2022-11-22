import axios from 'axios';

export default async function handler(req: any, res: any) {
    const PUBLIC_API = process.env.NEXT_PUBLIC_API_FULL;
    const { data } = await axios.get(`${PUBLIC_API}/items.json`);
    res.status(200).json({ data });
}


