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
        slug: 'This is normal blog',
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
        slug: 'This is manish blog',
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
        slug: 'This is manish blog',
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
        slug: 'This is manish blog',
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
    }
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
