import Router from 'koa-router';
import RaceService from './raceService';
import Race from './race';
const router = new Router();
router.prefix('/race');
router.get('/list', async (ctx, next) => {
    const raceResult = await new RaceService().list();
   
    ctx.body = raceResult;

});
router.post('/', async (ctx, next) => {
    const newRace = Object.assign(new Race(), ctx.request.body)
    const raceResult = await new RaceService().add(newRace);
    ctx.body = raceResult;

});
export default router;