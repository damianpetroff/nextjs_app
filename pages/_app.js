// `pages/_app.js`
import "../styles/global.css";
import "../styles/Home.module.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../lib/theme";
import createEmotionCache from "../lib/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import ResponsiveAppBar from "../components/navbar"

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
 }) {
  return (
    <CacheProvider value={emotionCache}>
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
);
}