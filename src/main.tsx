import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-tooltip/dist/react-tooltip.css";
import App from "./App.tsx";
import { Provider as RxDBProvider } from "rxdb-hooks";
import { initDatabase } from "./database/database.ts";

const db = await initDatabase();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RxDBProvider db={db}>
      <App />
    </RxDBProvider>
  </StrictMode>
);
