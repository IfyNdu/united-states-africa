import { Context } from 'usa-types';


export default (router: Context): Context => {

  router.post('/', async (req, res) => {

    const data = await router.ctx.config.addImage(req.body);
    res.send({ data });
  });

  return router;
}
