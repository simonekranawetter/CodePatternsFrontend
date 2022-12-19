// Giving route it's own interface to be able to display the different routes
// easily extendable in the navbar
export interface Route {
  routeId: number;
  route: string;
  linkTitle: string;
}
