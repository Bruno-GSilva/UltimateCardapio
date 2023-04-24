export default function Header() {
  return (
    <footer className="relative bottom-0 left-0 px-44 py-10 bg-neutral-900 text-white">
      <div className="flex justify-between">
        <img
          src="./src/assets/img/logo.png"
          alt="Sabores do Nordeste"
          className="h-32 object-cover"
        />
        <ul className="flex flex-col gap-1">
          <li className="font-sans font-light text-1xl">Home</li>
          <li className="font-sans font-light text-1xl">Cardápio</li>
          <li className="font-sans font-light text-1xl">Galeria</li>
          <li className="font-sans font-light text-1xl">Contatos</li>
          <li className="font-sans font-light text-1xl">Agendamento</li>
        </ul>
        <div className="flex flex-col gap-4 font-sans font-light">
          <ul>
            <li>Rua das Flores, 123, Jd. Primavera, Cid. Fictícia - UF</li>
            <li>+55 (11) 5555-1234</li>
          </ul>

          <ul className="flex gap-6">
            <li>
              <img
                src="./src/assets/img/facebook.png"
                alt="Facebook"
                className="w-8"
              />
            </li>
            <li>
              <img
                src="./src/assets/img/instagram.png"
                alt="Instagram"
                className="w-8"
              />
            </li>
            <li>
              <img
                src="./src/assets/img/whatsapp.png"
                alt="WhatsApp"
                className="w-8"
              />
            </li>
          </ul>
        </div>
      </div>

      <p className="pt-7 w-full text-center font-raleway font-light">
        © Sabores do Nordeste - Todos os direitos reservados.
      </p>
    </footer>
  );
}
