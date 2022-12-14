import { createSignal, Show } from "solid-js";
import Button from "./components/Button";
import Noggle from "./components/Noggle";
import Sun from "./assets/sun.svg";
import Moon from "./assets/moon.svg";
import { connect } from "@wagmi/core";
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";
import toast, { Toaster } from "solid-toast";
import { getAccount } from "@wagmi/core";

export default function App() {
  const [dark, setDark] = createSignal(false);

  return (
    <div
      style={{
        "background-image": dark()
          ? "url(pattern-dark.png)"
          : "url(pattern.png)",
      }}
      class="flex flex-col overflow-hidden gap-4 items-center justify-between p-4 h-[100vh]"
    >
      <div
        style={{
          color: dark() ? "white" : "black",
          "font-family": "Londrina Solid",
        }}
        class="flex items-center select-none justify-center gap-2 font-medium text-3xl"
      >
        <Noggle color="red" size={60} /> Kit
      </div>
      <div class="h-full flex items-center justify-center ">
        <div class="flex h-min gap-4">
          <div class="hover:scale-110 transition-transform duration-300">
            <Button
              onClick={async () => {
                const { isConnected } = getAccount();

                if (isConnected) toast.error("Already signed in...");
                else {
                  const account = await connect({
                    connector: new MetaMaskConnector(),
                  });

                  toast.success("Signed in!");
                }
              }}
              dark={dark()}
            />
          </div>
          <div class="hover:scale-110 transition-transform duration-300">
            <button
              onClick={() => setDark(!dark())}
              style={{
                "background-color": dark() ? "#282828" : "#F4F4F4",
                "border-color": dark() ? "#4B4B4B" : "#E3E0E0",
              }}
              class="h-full px-2 rounded-lg flex items-center justify-center border-2"
            >
              <Show when={dark()} fallback={Sun}>
                <Moon />
              </Show>
            </button>
          </div>
        </div>
      </div>
      <a
        draggable={false}
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/SamScolari"
        style={{ color: dark() ? "white" : "black" }}
        class="flex items-center gap-2 font-medium select-none"
      >
        Made with <Noggle color="red" size={32} /> by Sam
      </a>
      <Toaster />
    </div>
  );
}
