import Hero from "./sections/Hero/Hero";
import ContactForm from "./sections/ContactForm/ContactForm";
import LocationsMap from "./sections/LocationsMap/LocationsMap";
import ReachOut from "./sections/ReachOut/ReachOut";

export default function ContactPage() {
  return (
    <main>
      <Hero />
      <ReachOut />
      <LocationsMap />
      <ContactForm />
    </main>
  );
}
