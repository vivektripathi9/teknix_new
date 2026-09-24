import Connect from "../tesc-20/sections/Connect/Connect";
import Hero from "./sections/Hero/Hero";
import Overview from "./sections/Overview/Overview";
import Specifications from "./sections/Specifications/Specifications";

export default function Tesc50Page() {
  return (
    <main>
      <Hero />
      <Overview />
      <Specifications />
      <Connect />
    </main>
  );
}
