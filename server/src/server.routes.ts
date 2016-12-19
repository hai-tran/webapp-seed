import { IControllerRoutesPair } from './shared';
import { UserRoutesPair, TaskRoutesPair } from './api';

export const ApiRoutesPair: IControllerRoutesPair[] = [
  UserRoutesPair,
  TaskRoutesPair,
];
