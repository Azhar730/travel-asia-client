const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/B6Hbqsdg/4.webp" className="w-full rounded-lg h-[560px]" />
                <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
                <div className="text-center px-20 mt-40 absolute text-white">
                    <h3 className="text-6xl font-bold text-[#FFF]">Discover Your Next Adventure with AdventureAxis</h3>
                    <button className="btn bg-[#D2B48C] border-none text-lg font-semibold mt-20 text-[#FFF]">Learn More</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/Kc9SRCxr/bangkok-2.jpg" className="w-full rounded-lg h-[560px]" />
                <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
                <div className="text-center px-20 mt-40 absolute text-white">
                <h3 className="text-6xl font-bold text-[#f6f5f3]">Discover Your Next Adventure with AdventureAxis</h3>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/L80n2HZb/hang-long-bay-vietnam.webp" className="w-full rounded-lg h-[560px]" />
                <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
                <div className="text-center px-20 mt-40 absolute text-white">
                <h3 className="text-6xl font-bold text-[#f6f5f3]">Discover Your Next Adventure with AdventureAxis</h3>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/0ytJjYhZ/Angkor-Wat-cambodia.webp" className="w-full rounded-lg h-[560px]" />
                <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
                <div className="text-center px-20 mt-40 absolute text-white">
                <h3 className="text-6xl font-bold text-[#f6f5f3]">Discover Your Next Adventure with AdventureAxis</h3>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;