import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Title />
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
