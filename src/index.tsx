import { createRoot } from "react-dom/client";
import App from "./App";
import _kc from "./keycloak/Keycloak";

const renderApp = () =>
  createRoot(document.getElementById("app") as HTMLElement).render(<App />);

_kc.initKeycloak(renderApp);
