import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PageRoutes from "./routes";
import BasePage from "../packages/base-page";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<BasePage />}>
        {PageRoutes.map(({ path, Component }) => {
          return (
            <Route path={path} key={path.toString()} element={<Component />} />
          );
        })}
      </Route>
      <Route path="*" element={undefined} />
    </Route>
  )
);
