import CardInfo from "./components/Cards/CardInfo";
import Header from "./components/Header";

export default function App() {

  return (
    <>
      <Header />
      <section className="w-full h-screen flex justify-center items-center bg-sky-900">
        <CardInfo />
      </section>
      <section className="w-full h-screen flex justify-center items-center bg-sky-900">

      </section>
    </>
  )
}