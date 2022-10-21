# prisma-bug-reproduction
An issue where running  multiple `findUnique` queries with non unique values  (`extendedWhereUnique`) concurrently on a model  with a compound unique constraint will cause prisma to return null instead of the record.
- Only occurs with `findUnique` and when using `extendedWhereUnique`
- Only occurs when the model has a `@@unique()` constraint
- Only occurs when `findUnique` queries are run concurrently 

### How to reproduce

1. Clone this repo.
2. Create the `.env` file and add the `DATABASE_URL` env var.
4. Run  `yarn` or `npm install`.
3. Run `yarn prisma migrate dev` or `npm run prisma migrate dev`.
5. Run `yarn dev` or `npm run dev`.
