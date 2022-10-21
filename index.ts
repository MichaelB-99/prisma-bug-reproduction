import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();
  await prisma.post.deleteMany({});
  await prisma.postWithoutUniqueConstraint.deleteMany({});

  await prisma.post.create({
    data: {
      id: 1,
      userId: 1,
      text: "Hello, world!",
    },
  });

  await prisma.postWithoutUniqueConstraint.create({
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

  const queryPostWithoutUnique = () =>
    prisma.postWithoutUniqueConstraint.findUnique({
      where: {
        id: 1,
        userId: 1,

        deletedAt: null,
      },
    });

  const concurrentPosts = await Promise.all(
    Array.from({ length: 2 }, queryPost)
  );
  const concurrentPostsNoUniqueConstraint = await Promise.all(
    Array.from({ length: 2 }, queryPostWithoutUnique)
  );
  console.log({ concurrentPosts, concurrentPostsNoUniqueConstraint });

  /* logs

  {
  concurrent: [ null, null ],
  singleQuery: { id: 1, userId: 1, text: 'Hello, world!', deletedAt: null }
  }

  */
}

main().catch((e) => console.error(e));
