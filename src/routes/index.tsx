import Home from "@/pages/Home";
import Following from "@/pages/Following";

type RouteType = {
  path: string;
  component: any;
  layout?: any;
};

const publicRoutes: RouteType[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/following",
    component: Following,
  },
];

const privateRoutes: RouteType[] = [];

export { publicRoutes, privateRoutes };
