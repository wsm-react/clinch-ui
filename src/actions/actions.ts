"use server";

import appDB from '@/_lib/prisma-lib';
import { revalidatePath } from 'next/cache';



export async function createUser(formdata: FormData) {
    console.log(formdata);

    // Extract and process form data
    const email = formdata.get("email") as string;
    const name = formdata.get("name") as string;
    const hashPassword = formdata.get("hashPassword") as string;

    // Create the user in the database
    await appDB.user.create({
        data: {
            email: email,
            name: name,
            hashPassword: hashPassword,
        },
    });

    revalidatePath('/admin/user/');
}


export async function createBlogPost(formdata: FormData) {
    // Extract and process form data
    const slug = (formdata.get("slug") as string).replace(/\s+/g, "-").toLowerCase();
    const title = formdata.get("title") as string;
    const body = formdata.get("body") as string;
    const published = formdata.get("published") === "true"; // Assuming published is sent as a string "true" or "false"
    // const authorId = formdata.get("authorId") as number; // Author ID for the relation

    // Ensure authorId is provided
    // if (!authorId) {
    //     throw new Error("Author ID is required to create a blog post.");
    // }

    // // Create the blog post in the database
    // await appDB.blogPost.create({
    //     data: {

    //         slug: slug,
    //         title: title,
    //         body: body,
    //         published: published,
    //         author: {
    //             connect: {
    //                 id: authorId,
    //             },
    //         },
    //     },
    // });
}
