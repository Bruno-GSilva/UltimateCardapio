function CardInfo() {
    return (
        <div className="w-1/2 h-96 flex justify-between items-center border-2 p-4 border-black rounded-xl">
            <div className="h-full flex">
                <img src="/src/assets/image1.jpg" alt="..." className="w-40 object-cover rounded-xl mr-2 hover:scale-95 cursor-pointer" />
                <img src="/src/assets/image2.jpg" alt="..." className="w-40 object-cover rounded-xl mr-2 hover:scale-95 cursor-pointer backdrop-blur-3xl" />
            </div>
            <div className="w-60 h-full flex flex-col items-start p-4 border-2 overflow-hidden border-black rounded-xl">
                <h3 className="text-3xl font-bold text-white">titule</h3>
                <h3 className="w-42 text-xl font-semibold text-slate-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe aspernatur est ratione voluptatem delectus minima necessitatibus archpudiandae commodi vero culpa.</h3>
            </div>
        </div>
    );
}

export default CardInfo;