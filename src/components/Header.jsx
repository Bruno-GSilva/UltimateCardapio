import { Link } from "react-router-dom"
import Dashboard from "../pages/Dashboard"

export default function Header() {

    return (
        <header className="w-full flex justify-between items-center px-10 py-2 bg-blue-950">
            <div className="w-20 my-2">
                <img src="/src/assets/Logotipo.png" className="w-full h-full object-cover scale-150" />
            </div>
            <ul className="flex gap-4 text-2xl text-white font-semibold">
                <Link to="/" className="text-2xl text-white font-semibold hover:text-amber-500">Home</Link>
                <a href="#Menu" className="text-2xl text-white font-semibold hover:text-amber-500">Menu</a>
                <a href="#Footer" className="text-2xl text-white font-semibold hover:text-amber-500">Contato</a>
                <a href="#Footer" className="text-2xl text-white font-semibold hover:text-amber-500">Sobre Nos</a>
            </ul>
            <Link to="/Login" className="text-2xl text-white font-semibold hover:text-amber-500">Login</Link>
        </header>
    )
}