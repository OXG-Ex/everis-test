import type {FC} from "react";
import {MainPage} from "../pages/main/ui/MainPage";
import {MainTemplate} from "../pages/main/ui/MainTemplate";

const App: FC = () => (
  <MainTemplate>
    <MainPage />
  </MainTemplate>
);

export default App;
