import { prisma } from "..";

export const getPhotos = () =>
  new Promise(async (res, rej) => {
    const photos = await prisma.photo.findMany().then((res) => res);
    console.log(photos);
    try {
      res(photos);
    } catch (err) {
      rej(err);
    }
  });

export const getPhoto = (photoId: number) =>
  new Promise(async (res, rej) => {
    const photo = await prisma.photo.findUnique({
      where: {
        id: photoId,
      },
    });
    console.log(photo);
    try {
      if (!photo) {
        throw new Error(`Фотография с id ${photoId} не найдена`);
      }
      res(photo);
    } catch (err) {
      rej(err);
    }
  });