import Router from 'koa-router';
import race from './race';
const router = new Router();
router.prefix('/v1');
router.use(race.routes());
export default router;