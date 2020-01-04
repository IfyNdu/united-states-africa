import { Context } from 'usa-types';


export default (router: Context): Context => {

  router.get('/videos', (__, res) => {

    res.send({ videos: 'ALL VIDEOS' });
  });

  router.get('/videos/:id', (req, res) => {

    res.send({ video: `THIS ${req.params.id} VIDEO` });
  });

  router.post('/videos', async (req, res) => {

    const data = await router.ctx.video.add(req.body);
    res.send({ data });
  });
  
  router.post('/videos/tag', async (req, res) => {

    const data = await router.ctx.video.addTag(req.body);
    res.send({ data });
  });

  router.post('/videos/tag-video', async (req, res) => {

    const data = await router.ctx.video.tagVideo(req.body);
    res.send({ data });
  });

  router.post('/videos/source', async (req, res) => {

    const data = await router.ctx.video.addSource(req.body);
    res.send({ data });
  });

  router.post('/videos/category', async (req, res) => {

    const data = await router.ctx.video.addCategory(req.body);
    res.send({ data });
  });

  return router;
}
