import DefaultTheme from "vitepress/theme";
import "@ahaui/css/dist/utilities.min.css";
import "./aha.scss";
import "./custom.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
  },
};
