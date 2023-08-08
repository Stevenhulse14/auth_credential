This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

npm i next-auth dotenv bcrypt
that is neede for bcrypt
npm i --save-dev @types/bcrypt
npm i prisma --save-dev

npx prisma init
-- to initialize a primas schema template

npm i @prisma/client @auth/prisma-adapter
-- to install prisma client and prisma adapter

TO CHANGE TO MONGODB DATABASE YOU MUST CHANGE THE `provider = mongodb` IN THE SCHEMA.PRISMA FILE

Ids in mongodb start with `_id` and not `id` so we have to change that .
To change this `String @id @default(auto()) @map("_id") @db.ObjectId`

`npx prisma generate`
