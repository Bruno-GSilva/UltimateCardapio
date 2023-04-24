import CardFoods from "./components/Cards/CardFoods";
import CardInfo from "./components/Cards/CardInfo";
import Header from "./components/Header";

export default function App() {

  return (
    <>
      <Header />
      <section className="w-full h-screen flex flex-col justify-center items-center bg-black">
        <h2 className="mb-4 text-4xl text-yellow-500 font-bold">Digital Cardapio</h2>
        <CardInfo />
        <h3 className="w-1/2 mt-10 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque minus animi eligendi? Aut sequi numquam voluptatem, atque, ut est dignissimos facere soluta vero optio, iste minus libero! Totam, sed quaerat.</h3>
      </section>
      <section className="w-full h-screen flex justify-center items-center bg-black">
        <CardFoods/>
        <CardFoods/>
        <CardFoods/>
        <CardFoods/>
      </section>
    </>
  )
}