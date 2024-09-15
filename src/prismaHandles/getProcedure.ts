import { prisma } from "..";

export const getProcedures = () =>
  new Promise(async (res, rej) => {
    const procedures = await prisma.procedures.findMany().then((res) => res);
    console.log(procedures);
    try {
      res(procedures);
    } catch (err) {
      rej(err);
    }
  });

export const getProcedure = (procedureId: number) =>
  new Promise(async (res, rej) => {
    const procedure = await prisma.photo.findUnique({
      where: {
        id: procedureId,
      },
    });
    console.log(procedure);
    try {
      if (!procedure) {
        throw new Error(`Процедура с id ${procedure} не найдена`);
      }
      res(procedure);
    } catch (err) {
      rej(err);
    }
  });