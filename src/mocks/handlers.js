import { rest } from 'msw';
import mockRocketData from './mockRocketData';
import mockMissionData from './mockMissionData';

const handlers = [
  rest.get('https://api.spacexdata.com/v4/rockets', (req, res, ctx) => res(
    ctx.status(200), ctx.json(mockRocketData), ctx.delay(150),
  )),
  rest.get('https://api.spacexdata.com/v3/missions', (req, res, ctx) => res(
    ctx.status(200), ctx.json(mockMissionData), ctx.delay(150),
  )),
];

export default handlers;
