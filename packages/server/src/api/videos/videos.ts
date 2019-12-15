import { Context, Router } from 'usa-types';


export default ({ ctx, router }: Context): Router => {

  router.get('/video', (__, res) => {

    res.send({ videos: 'ALL VIDEOS' });
  });

  router.get('/video/:id', (req, res) => {

    res.send({ video: `THIS ${req.params.id} VIDEO` });
  });

  router.post('/video/category', async (req, res) => {

    const data = await ctx.video.addCategory(req.body);
    res.send({ data });
  });

  return router;
}
