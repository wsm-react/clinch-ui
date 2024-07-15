import { Prisma, PrismaClient } from '@prisma/client'
const appDB = new PrismaClient()
import { initialDataQueries } from '@/app/data/seed-demo-data';

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
        title: 'This is blog title 1',
        subTitle: 'This is blog subtitle 1',
        body: 'This is blog body 1',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "arun99178@gmail.com"
                },
                create: {
                    email: 'arun99178@gmail.com',
                    name: 'Arun Kumar Gupta',
                    hashPassword: 'password123',
                }
            }
        }
    },
    {
        slug: 'this-is-another-blog',
        title: 'This is blog title 2',
        subTitle: 'This is blog subtitle 2',
        body: 'This is blog body 2',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "john@example.com"
                },
                create: {
                    email: 'john@example.com',
                    name: 'John Doe',
                    hashPassword: 'securePassword',
                }
            }
        }
    },
    {
        slug: 'this-is-yet-another-blog',
        title: 'This is blog title 3',
        subTitle: 'This is blog subtitle 3',
        body: 'This is blog body 3',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "alice@example.com"
                },
                create: {
                    email: 'alice@example.com',
                    name: 'Alice Smith',
                    hashPassword: 'password321',
                }
            }
        }
    },
    {
        slug: 'this-is-a-different-blog',
        title: 'This is blog title 4',
        subTitle: 'This is blog subtitle 4',
        body: 'This is blog body 4',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "sam@example.com"
                },
                create: {
                    email: 'sam@example.com',
                    name: 'Sam Wilson',
                    hashPassword: 'password456',
                }
            }
        }
    },
    {
        slug: 'this-is-unique-blog',
        title: 'This is blog title 5',
        subTitle: 'This is blog subtitle 5',
        body: 'This is blog body 5',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "emma@example.com"
                },
                create: {
                    email: 'emma@example.com',
                    name: 'Emma Thompson',
                    hashPassword: 'password789',
                }
            }
        }
    },
    {
        slug: 'this-is-special-blog',
        title: 'This is blog title 6',
        subTitle: 'This is blog subtitle 6',
        body: 'This is blog body 6',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "chris@example.com"
                },
                create: {
                    email: 'chris@example.com',
                    name: 'Chris Evans',
                    hashPassword: 'securePassword123',
                }
            }
        }
    },
    {
        slug: 'this-is-interesting-blog',
        title: 'This is blog title 7',
        subTitle: 'This is blog subtitle 7',
        body: 'This is blog body 7',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "sarah@example.com"
                },
                create: {
                    email: 'sarah@example.com',
                    name: 'Sarah Brown',
                    hashPassword: 'securePassword456',
                }
            }
        }
    },
    {
        slug: 'this-is-exciting-blog',
        title: 'This is blog title 8',
        subTitle: 'This is blog subtitle 8',
        body: 'This is blog body 8',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "michael@example.com"
                },
                create: {
                    email: 'michael@example.com',
                    name: 'Michael Davis',
                    hashPassword: 'password1234',
                }
            }
        }
    },
    {
        slug: 'this-is-amazing-blog',
        title: 'This is blog title 9',
        subTitle: 'This is blog subtitle 9',
        body: 'This is blog body 9',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "jessica@example.com"
                },
                create: {
                    email: 'jessica@example.com',
                    name: 'Jessica Miller',
                    hashPassword: 'password567',
                }
            }
        }
    },
    {
        slug: 'this-is-fantastic-blog',
        title: 'This is blog title 10',
        subTitle: 'This is blog subtitle 10',
        body: 'This is blog body 10',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "david@example.com"
                },
                create: {
                    email: 'david@example.com',
                    name: 'David White',
                    hashPassword: 'securePassword789',
                }
            }
        }
    },
    {
        slug: 'this-is-brilliant-blog',
        title: 'This is blog title 11',
        subTitle: 'This is blog subtitle 11',
        body: 'This is blog body 11',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "lisa@example.com"
                },
                create: {
                    email: 'lisa@example.com',
                    name: 'Lisa Johnson',
                    hashPassword: 'password890',
                }
            }
        }
    },
    {
        slug: 'this-is-cool-blog',
        title: 'This is blog title 12',
        subTitle: 'This is blog subtitle 12',
        body: 'This is blog body 12',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "kevin@example.com"
                },
                create: {
                    email: 'kevin@example.com',
                    name: 'Kevin Brown',
                    hashPassword: 'securePassword890',
                }
            }
        }
    },
    {
        slug: 'this-is-nice-blog',
        title: 'This is blog title 13',
        subTitle: 'This is blog subtitle 13',
        body: 'This is blog body 13',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "natalie@example.com"
                },
                create: {
                    email: 'natalie@example.com',
                    name: 'Natalie Green',
                    hashPassword: 'password987',
                }
            }
        }
    },
    {
        slug: 'this-is-fun-blog',
        title: 'This is blog title 14',
        subTitle: 'This is blog subtitle 14',
        body: 'This is blog body 14',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "peter@example.com"
                },
                create: {
                    email: 'peter@example.com',
                    name: 'Peter Lee',
                    hashPassword: 'securePassword567',
                }
            }
        }
    },
    {
        slug: 'this-is-wonderful-blog',
        title: 'This is blog title 15',
        subTitle: 'This is blog subtitle 15',
        body: 'This is blog body 15',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "linda@example.com"
                },
                create: {
                    email: 'linda@example.com',
                    name: 'Linda Harris',
                    hashPassword: 'password654',
                }
            }
        }
    },
    {
        slug: 'this-is-awesome-blog',
        title: 'This is blog title 16',
        subTitle: 'This is blog subtitle 16',
        body: 'This is blog body 16',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "robert@example.com"
                },
                create: {
                    email: 'robert@example.com',
                    name: 'Robert Clark',
                    hashPassword: 'securePassword654',
                }
            }
        }
    },
    {
        slug: 'this-is-great-blog',
        title: 'This is blog title 17',
        subTitle: 'This is blog subtitle 17',
        body: 'This is blog body 17',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "julia@example.com"
                },
                create: {
                    email: 'julia@example.com',
                    name: 'Julia Martin',
                    hashPassword: 'password321',
                }
            }
        }
    },
    {
        slug: 'this-is-excellent-blog',
        title: 'This is blog title 18',
        subTitle: 'This is blog subtitle 18',
        body: 'This is blog body 18',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "steve@example.com"
                },
                create: {
                    email: 'steve@example.com',
                    name: 'Steve Turner',
                    hashPassword: 'securePassword321',
                }
            }
        }
    },
    {
        slug: 'this-is-epic-blog',
        title: 'This is blog title 19',
        subTitle: 'This is blog subtitle 19',
        body: 'This is blog body 19',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "olivia@example.com"
                },
                create: {
                    email: 'olivia@example.com',
                    name: 'Olivia Wright',
                    hashPassword: 'password789',
                }
            }
        }
    },
    {
        slug: 'this-is-remarkable-blog',
        title: 'This is blog title 20',
        subTitle: 'This is blog subtitle 20',
        body: 'This is blog body 20',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: "daniel@example.com"
                },
                create: {
                    email: 'daniel@example.com',
                    name: 'Daniel Wilson',
                    hashPassword: 'securePassword123',
                }
            }
        }
    },
];

async function main() {
    console.log("Start Seeding .... ");
    for (const posts of initialBlog) {
        const newPost = await appDB.blogPost.create({ data: posts });
        // console.log(newPost);
        console.log(`created post with id  ${newPost.id}, Post slug ${newPost.slug}`);
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
