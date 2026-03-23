import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ArtisansPage } from "./pages/ArtisansPage";
import { ArtisanProfilePage } from "./pages/ArtisanProfilePage";
import { ApprenticeshipsPage } from "./pages/ApprenticeshipsPage";
import { WorkshopsPage } from "./pages/WorkshopsPage";
import { ImpactPage } from "./pages/ImpactPage";
import { CommunityPage } from "./pages/CommunityPage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/SILSILA/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "artisans", Component: ArtisansPage },
      { path: "artisans/:id", Component: ArtisanProfilePage },
      { path: "apprenticeships", Component: ApprenticeshipsPage },
      { path: "workshops", Component: WorkshopsPage },
      { path: "impact", Component: ImpactPage },
      { path: "community", Component: CommunityPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
