function CardInfo() {
    return (
        <div className="w-1/2 h-96 flex justify-between items-center border-2 border-amber-500 backdrop-brightness-125 p-4 rounded-xl shadow-black shadow-2xl">
            <div className="w-56 h-full flex">
                <img src="/src/assets/image1.jpg" alt="..." className="w-full object-cover rounded-xl mr-2 hover:scale-95 cursor-pointer" />
                <img src="/src/assets/image2.jpg" alt="..." className="w-full object-cover rounded-xl mr-2 hover:scale-95 cursor-pointer backdrop-blur-3xl" />
            </div>
            <div className="w-60 h-full flex flex-col items-start p-4 border-2 overflow-hidden border-black rounded-xl">
                <h3 className="text-3xl font-bold text-white underline underline-offset-4 mb-4">titule</h3>
                <h3 className="w-42 text-xl font-semibold text-slate-200">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe aspernatur est ratione voluptatem delectus minima necessitatibus archpudiandae commodi vero culpa.</h3>
            </div>
        </div>
    );
}

export default CardInfo;