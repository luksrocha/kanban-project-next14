import { db } from "../src/db";

async function main() {
    const firstCollumn = await db.collumn.upsert({
        where: { id: "teste" },
        update: {},
        create: {
            id: "teste",
            description: "First Collumn",
            title: "To do",
            tasks: {
                create: {
                    description: "first task",
                    title: "first tasks example",
                },
            },
        },
    });
    const secondCollumn = await db.collumn.upsert({
        where: { id: "teste2" },
        update: {},
        create: {
            id: "teste2",
            description: "Second Collumn",
            title: "Doing",
        },
    });
    const thirdCollumn = await db.collumn.upsert({
        where: { id: "teste3" },
        update: {},
        create: {
            id: "teste3",
            description: "Second Collumn",
            title: "Done",
        },
    });
}

main()
    .then(async () => {
        await db.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await db.$disconnect();
        process.exit(1);
    });
