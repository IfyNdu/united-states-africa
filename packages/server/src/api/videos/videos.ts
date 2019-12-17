import { Context } from 'usa-types';


export default (router: Context): Context => {

  router.get('/video', (__, res) => {

    res.send({ videos: 'ALL VIDEOS' });
  });

  router.get('/video/:id', (req, res) => {

    res.send({ video: `THIS ${req.params.id} VIDEO` });
  });
  
  router.post('/video/tag', async (req, res) => {

    const data = await router.ctx.video.addTag(req.body);
    res.send({ data });
  });

  router.post('/video/category', async (req, res) => {

    const data = await router.ctx.video.addCategory(req.body);
    res.send({ data });
  });

  return router;
}
