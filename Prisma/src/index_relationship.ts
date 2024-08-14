import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTodos(userId: number) {
    try {
        const res = await prisma.todo.findMany({
            where: {
                userId: userId
            }
        })
        console.log("Found Toudos", res);

    }
    catch (err) {
        console.log("Not Found and Todo", err);
    }
}
async function getTodosAndUserData(userId: number) {
    try {
        const res = await prisma.todo.findMany({
            where: {
                userId: userId
            },
            select: {
                todo: true,
                user: true
            }
        })
        console.log("Found Toudos", res);

    }
    catch (err) {
        console.log("Not Found and Todo", err);
    }
}
getTodosAndUserData(1);