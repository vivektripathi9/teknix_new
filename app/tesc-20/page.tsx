import Collection from "./sections/Collection/Collection";
import Connect from "./sections/Connect/Connect";
import Gallery from "./sections/Gallery/Gallery";
import Hero from "./sections/Hero/Hero";
import Journal from "./sections/Journal/Journal";
import Welcome from "./sections/Welcome/Welcome";

export default function Tesc20Page() {
  return (
    <main>
      <Hero />
      <Welcome />
      <Collection />
      <Gallery />
      <Journal />
      <Connect />
    </main>
  );
}
