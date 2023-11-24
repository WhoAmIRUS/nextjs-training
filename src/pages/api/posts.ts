// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import posts from '../../../public/posts.json';

export type Post = {
  id: string;
  title: string;
  date: string;
  body: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  res.status(200).json(posts)
}
