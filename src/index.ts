import Koa from "koa";
const cors = require('@koa/cors');
import koaBody from "koa-body";
import { photosRouter, proceduresRouter } from "./router/index";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

async function main() {
  const app = new Koa();
  app.listen(3001, () => {
    console.log("http://localhost:3001");
  });

  app.use(koaBody());
  app.use(cors());

  app.use(photosRouter.routes());
  app.use(proceduresRouter.routes());
  app.use(photosRouter.allowedMethods);
  app.use(proceduresRouter.allowedMethods);


  await prisma.$connect();
}

main()
.then(async () => {
  await prisma.$disconnect();
})
.catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
})