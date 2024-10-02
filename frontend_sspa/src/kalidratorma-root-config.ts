// single-spa-config.js
import { registerApplication, start } from "single-spa";

// Simple usage
registerApplication(
  "app2",
  () => import("../../frontend/src/index_spa.js"),
  (location) => location.pathname.startsWith("/"),
  { some: "value" }
);

start();
