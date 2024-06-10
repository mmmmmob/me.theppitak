import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Info from "./components/Info";
import Title from "./components/Title";

function App() {
  return (
    <div className="flex h-screen w-screen justify-center bg-slate-200 max-sm:flex-col dark:bg-slate-800">
      <Title />
      <Info />
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
