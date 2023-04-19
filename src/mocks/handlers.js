import { rest } from 'msw';
// import mockRocketData from './mockRocketData';

const handlers = [
  rest.get('https://api.spacexdata.com/v4/', (req, res, ctx) => res(
    ctx.json({ Name: 'fake name' }), ctx.delay(150),
  )),
];

export default handlers;
