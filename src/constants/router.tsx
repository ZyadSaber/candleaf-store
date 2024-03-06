import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PageRoutes from "./routes";
import BasePage from "../packages/base-page";
import NotFoundPage from "../packages/not-found-page";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<BasePage />}>
        {PageRoutes.map(({ path, Component, nestedRoutes }) => {
          return (
            <Route
              path={path}
              key={path.toString()}
              element={Component ? <Component /> : null}
            >
              {nestedRoutes &&
                nestedRoutes.map(
                  ({ path: nestedPath, Component: NestedComponent }) => (
                    <Route
                      path={nestedPath}
                      key={path.toString()}
                      element={<NestedComponent />}
                    />
                  )
                )}
            </Route>
          );
        })}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
