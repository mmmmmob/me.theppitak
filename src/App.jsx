import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Info from "./components/Info";
import Title from "./components/Title";

function App() {
  return (
    <div className="flex h-screen w-screen flex-col justify-center bg-slate-200 dark:bg-slate-800 dark:text-slate-300">
      <Title />
      <Info />
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
