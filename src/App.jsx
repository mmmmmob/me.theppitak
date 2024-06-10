import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Title from "./components/Title";

function App() {
  return (
    <div className="flex h-screen w-screen flex-col justify-center bg-slate-200 dark:bg-slate-800 dark:text-slate-300">
      <Title />
      <hr className="m-5 h-px self-center border-0 bg-gray-300 max-sm:w-11/12 md:w-8/12 dark:bg-gray-600" />
      <Info />
      <Footer />
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
