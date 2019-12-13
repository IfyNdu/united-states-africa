import { Context, Router } from 'usa-types';


export default ({ router }: Context): Router => {

  router.get('/', (__, res) => {

    res.send({ expense: 'EXPENSE!!!' });
  });

  return router;
}
