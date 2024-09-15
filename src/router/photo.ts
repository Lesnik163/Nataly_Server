import Router from 'koa-router';
import { getPhoto, getPhotos } from '../prismaHandles/getPhoto';

export const photosRouter = new Router();
photosRouter.get('/photos', async (ctx) => {
    try {
        const result = await getPhotos();
        ctx.body = result;
    } 
    catch (error) {
        console.error('error', error);
        ctx.status = 500;
        ctx.body = 'Internal error';
    }
});

photosRouter.get('/photos/:id', async (ctx) => {
    const id = +ctx.params.id
    try {
        const result = await getPhoto(id);
        ctx.body = result;
    } 
    catch (error) {
        console.error('error', error);
        ctx.status = 500;
        ctx.body = 'Internal error';
    }
});
