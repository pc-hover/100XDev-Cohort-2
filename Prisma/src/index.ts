import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create(
        {
            data: {
                email: username,
                password,
                firstName,
                lastName
            },
            // select: {
            //     id: true,
            //     password: true
            // }

        }
    )
    console.log(res)
}
// insertUser('pcmisqtwdh456', 'Pawdwss!456', 'Joewd', 'Smitdwh');


interface UpdateParams {
    firstName: string,
    lastName: string
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
    prisma.user.update(
        {
            where: { email: username },
            data: {
                firstName,
                lastName
            }
        }
    )
}

// updateUser('johndoe123', { firstName: 'Jonathan', lastName: 'Doe' });

async function deleteUser(username: string) {

    const res = await prisma.user.delete({
        where: { email: username }
    })
    console.log(res);
}

// deleteUser("janesmith456")

async function getUser(username: string) {

    const res = prisma.user.findFirst({
        where: {
            email: username
        }
    })
    console.log(res)
}
getUser("janesmith456")
