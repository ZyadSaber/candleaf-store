import HomePage from "../pages/home-page";
import LogIn from "../pages/log-in-page";

const PageRoutes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "account",
    // Component: HomePage,
    nestedRoutes: [
      {
        path: "log_in",
        Component: LogIn,
      },
    ],
  },
];

export default PageRoutes;
