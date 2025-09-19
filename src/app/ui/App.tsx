import type {FC} from "react";
import {MainPage} from "../../pages/main/ui/MainPage";
import {MainTemplate} from "../../pages/main/ui/MainTemplate";

import "../styles/app.scss";

export const App: FC = () => (
  <MainTemplate>
    <MainPage />
  </MainTemplate>
);
