import { rest } from 'msw';
import mockRocketData from './mockRocketData';

const handlers = [
  rest.get('https://api.spacexdata.com/v4/rockets', (req, res, ctx) => res(
    ctx.json(mockRocketData), ctx.delay(150),
  )),
];

export default handlers;
