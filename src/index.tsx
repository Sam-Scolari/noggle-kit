/* @refresh reload */
import "./index.css";
import { render } from "solid-js/web";

import App from "./App";

import { createClient, configureChains, mainnet } from "@wagmi/core";
import { publicProvider } from "@wagmi/core/providers/public";

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

render(() => <App />, document.getElementById("root"));
