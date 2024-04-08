import Navbar from "./components/Fragments/Navbar";
import Hero from "./components/Fragments/Hero";
import Pelayanan from "./components/Fragments/Pelayanan";
import Price from "./components/Fragments/Price";
import FAQ from "./components/Fragments/FAQ";
import Review from "./components/Fragments/Review";
import Footer from "./components/Fragments/Footer";
import Whatsapp from "./components/Elements/Whatsapp";

function App() {
  return (
    <main className="max-w-[1200px] mx-auto px-2 flex flex-col gap-y-10 overflow-clip">
      <Whatsapp />
      <Navbar />
      <Hero />
      <Pelayanan />
      <Price />
      <FAQ />
      <Review />
      <Footer />
    </main>
  );
}

export default App;
