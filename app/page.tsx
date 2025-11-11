import Header from './components/Header'
import CarBrands from './components/CarBrands'

export default function Home() {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <CarBrands />
      </main>
    </div>
  )
}