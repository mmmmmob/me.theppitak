import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Info from "./components/Info";
import Project from "./components/Project";
import Title from "./components/Title";
import WorkExp from "./components/WorkExp";

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-slate-300 text-slate-800 dark:bg-slate-900 dark:text-slate-300">
        <div className="sticky top-0 w-full">
          <Header />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="my-6 flex w-full flex-col items-center justify-center sm:max-w-5xl">
            <Title />
            <hr className="m-5 h-px self-center border-0 bg-gray-400 max-sm:w-11/12 md:w-8/12 dark:bg-gray-600" />
            <Info />
            <WorkExp />
            <Project />
          </div>
        </div>
        <div className="sticky bottom-0 w-full">
          <Footer />
        </div>
      </div>
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
