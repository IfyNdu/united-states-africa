import { Context, Router } from 'usa-types';


export default ({ router }: Context): Router => {

  router.get('/video', (__, res) => {

    res.send({ videos: 'ALL VIDEOS' });
  });

  router.get('/video/:id', (req, res) => {

    res.send({ video: `THIS ${req.params.id} VIDEO` });
  });

  return router;
}
