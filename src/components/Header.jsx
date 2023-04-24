export default  function Header() {

    return (
        <header className="w-full flex justify-between items-center px-5 bg-sky-950">
            <div className="w-10 h-10 my-2 rounded-md bg-white">
            </div>
            <ul className="flex gap-4 text-white font-semibold">
                <li><a href="#" className="hover:text-amber-500">Home</a></li>
                <li><a href="#" className="hover:text-amber-500">Menu</a></li>
                <li><a href="#" className="hover:text-amber-500">Contato</a></li>
                <li><a href="#" className="hover:text-amber-500">Login</a></li>
            </ul>

        </header>
    )
  }