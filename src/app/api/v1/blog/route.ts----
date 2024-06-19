import { NextApiRequest, NextApiResponse } from 'next';
import appDB from '@/lib/prisma-lib';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    console.log(method);


    // switch (method) {
    //     case 'GET':
    //         // Get all posts
    //         try {
    //             const posts = await appDB.blogPost.findMany();
    //             res.status(200).json(posts);
    //         } catch (error) {
    //             res.status(500).json({ error: 'Error fetching posts' });
    //         }
    //         break;
    //     case 'POST':
    //         // Create a new post
    //         try {
    //             const resdata = req.body;
    //             const newPost = await appDB.blogPost.create({
    //                 data: resdata,
    //             });
    //             res.status(201).json(newPost);
    //         } catch (error) {
    //             res.status(500).json({ error: 'Error creating post' });
    //         }
    //         break;
    //     case 'PUT':
    //         // Update a post
    //         try {
    //             const resdata = req.body;
    //             const updatedPost = await appDB.blogPost.update({
    //                 where: { id: resdata.id },
    //                 data: resdata,
    //             });
    //             res.status(200).json(updatedPost);
    //         } catch (error) {
    //             res.status(500).json({ error: 'Error updating post' });
    //         }
    //         break;
    //     // case 'DELETE':
    //     //     // Delete a post
    //     //     try {
    //     //         const { id } = req.body;
    //     //         await appDB.post.delete({
    //     //             where: { id: Number(id) },
    //     //         });
    //     //         res.status(200).json({ message: 'Post deleted successfully' });
    //     //     } catch (error) {
    //     //         res.status(500).json({ error: 'Error deleting post' });
    //     //     }
    //     //     break;
    //     default:
    //         res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    //         res.status(405).end(`Method ${method} Not Allowed`);
    // }
}
