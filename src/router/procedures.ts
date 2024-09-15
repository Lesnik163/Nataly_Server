import Router from 'koa-router';
import { getProcedures, getProcedure } from '../prismaHandles/getProcedure';

export const proceduresRouter = new Router();
proceduresRouter.get('/procedures', async (ctx) => {
    try {
        const result = await getProcedures();
        ctx.body = result;
    } 
    catch (error) {
        console.error('error', error);
        ctx.status = 500;
        ctx.body = 'Internal server error';
    }
});

proceduresRouter.get('/procedures/:id', async (ctx) => {
    const id = Number(ctx.params.id)
    try {
        const result = await getProcedure(id);
        ctx.body = result;
    } 
    catch (error) {
        console.error('error', error);
        ctx.status = 500;
        ctx.body = 'Internal server error';
    }
});
