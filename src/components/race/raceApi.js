import Router from 'koa-router';
import RaceService from './raceService';
const router = new Router();
router.prefix('/race');
router.get('/list', async (ctx, next) => {
    try {
        const raceResult = await new RaceService().list();
        ctx.body = raceResult;
    } catch (error) {
        await next(error);
    }
});
router.post('/', async (ctx, next) => {
    try {
        const raceResult = await new RaceService().add(ctx.request.body);
        ctx.body = raceResult;
    } catch (error) {
        await next(error);
    }
});
export default router;