import { Route } from "@/interfaces/RouteInterface";
// SRP, OCP
// Future proofing the navbar in case more sections get added
export const UserRoutes: Route[] = [
  {
    routeId: 1,
    route: "/",
    linkTitle: "Home",
  },
  {
    routeId: 2,
    route: "/categories",
    linkTitle: "Categories",
  },
  {
    routeId: 3,
    route: "/products",
    linkTitle: "Products",
  },
  {
    routeId: 4,
    route: "/contacts",
    linkTitle: "Contacts",
  },
];
