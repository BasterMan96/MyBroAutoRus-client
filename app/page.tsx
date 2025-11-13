import Header from "./components/Header/Header"
import CarBrands from "./components/CarBrands" 

export default function Home() {
  return (
    <>
      <Header />
      <main className="main" itemScope itemType="https://schema.org/ItemList">
        <CarBrands />
      </main>
    </>
  )
}