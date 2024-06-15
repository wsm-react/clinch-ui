import { Prisma, PrismaClient } from '@prisma/client'
const appDB = new PrismaClient()

// const initialUsers: Prisma.UserCreateInput[] = [
//     {
//         email: 'string',
//         name: 'string',
//         hashPassword: 'string',
//     }
// ]

const initialBlog: Prisma.BlogPostCreateInput[] = [
    {
        slug: 'this-is-normal-blog',
        title: 'This is blog title',
        body: 'this is blog body',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "arun99178@gmail.com"
                },
                create: {
                    email: 'arun99178@gmail.com',
                    name: 'arun kumar Gupta',
                    hashPassword: 'string',
                }
            }
        }
    },
    {
        slug: 'this-is-manish-blog',
        title: 'This is manish title',
        body: 'this is manish body',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "manish@gmail.com"
                },
                create: {
                    email: 'manish@gmail.com',
                    name: 'manish kumar Gupta',
                    hashPassword: 'string',
                }
            }
        }
    },
    {
        slug: 'This is varun blog',
        title: 'This is varun title',
        body: 'this is varun body',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "varun@gmail.com"
                },
                create: {
                    email: 'varun@gmail.com',
                    name: 'varun kumar Gupta',
                    hashPassword: 'string',
                }
            }
        }
    },
    {
        slug: 'This is anjali blog',
        title: 'This is anjali title',
        body: 'this is anjali body',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "anjali@gmail.com"
                },
                create: {
                    email: 'anjali@gmail.com',
                    name: 'anjali kumar Gupta',
                    hashPassword: 'string',
                }
            }
        }
    },
    {
        slug: 'This is roshani blog',
        title: 'This is roshani title',
        body: 'this is roshani body',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "roshani@gmail.com"
                },
                create: {
                    email: 'roshani@gmail.com',
                    name: 'roshani kumar Gupta',
                    hashPassword: 'string',
                }
            }
        }
    },

]

async function main() {
    console.log("Start Seeding .... ");
    for (const posts of initialBlog) {
        const newPost = await appDB.blogPost.create({ data: posts });
        console.log(`created post with id  ${posts.id}`);
    }

    console.log("End Seeding .... ");
}

main()
    .then(async () => {
        await appDB.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await appDB.$disconnect()
        process.exit(1)
    })
