import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();
  await prisma.post.deleteMany({});
  await prisma.post.create({
    data: {
      id: 1,
      userId: 1,
      text: "Hello, world!",
    },
  });

  const queryPost = () =>
    prisma.post.findUnique({
      where: {
        id_userId: {
          id: 1,
          userId: 1,
        },
        deletedAt: null,
      },
    });

  const singleQuery = await queryPost();

  const concurrent = await Promise.all(Array.from({ length: 2 }, queryPost));
  console.log({ concurrent, singleQuery });

  /* logs

  {
  concurrent: [ null, null ],
  singleQuery: { id: 1, userId: 1, text: 'Hello, world!', deletedAt: null }
  }

  */
}

main().catch((e) => console.error(e));
