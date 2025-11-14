import Header from "./components/Header";
import CarBrands from "./components/CarBrands";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main" itemScope itemType="https://schema.org/ItemList">
        <CarBrands />
      </main>
      <Footer />
    </>
  );
}
