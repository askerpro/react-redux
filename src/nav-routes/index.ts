import Ajv from 'ajv';
import routes from './routes.json';

import { Route, schema } from './routesSchema';

const validator = new Ajv();

try {
  const isValid = validator.validate(schema, routes);
  if (!isValid) {
    throw new Error('invalid routes data, scheme missmatch');
  }
} catch (e) {
  console.log(e);
}

export const getRouteTitle = (
  route: string[],
  currentLvl: Route[] = routes,
): string | undefined => {
  const foundRoute = currentLvl.find((_route) => _route.path === route[0]);
  if (route.length === 1) {
    return foundRoute?.title;
  }
  return getRouteTitle(route.slice(1), foundRoute?.children);
};

export default routes;
