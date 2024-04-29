const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/B6Hbqsdg/4.webp" className="w-full rounded-lg h-[560px]" />
                <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
                <div className="text-center px-20 mt-40 absolute text-white">
                    <h3 className="text-4xl font-bold text-[#f6f5f3]">Embark on Epic Journeys with AdventureAxis: Explore, Experience, Discover!</h3>
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
                    <h3 className="text-4xl font-bold text-[#bfed07]">Find Your Dream Home with DwellDreams</h3>
                    <p>Discover the perfect home for you. Explore diverse listings tailored to your needs and preferences. With intuitive search features and comprehensive details, finding your dream home has never been easier. Start your journey today.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/Gtm8bBcv/city-center-appertments.jpg" className="w-full rounded-lg h-[560px]" />
                <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
                <div className="text-center px-20 mt-40 absolute text-white">
                    <h3 className="text-4xl font-bold text-[#bfed07]">Find Your Dream Home with DwellDreams</h3>
                    <p>Discover the perfect home for you. Explore diverse listings tailored to your needs and preferences. With intuitive search features and comprehensive details, finding your dream home has never been easier. Start your journey today.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/P5sM60b0/4.jpg" className="w-full rounded-lg h-[560px]" />
                <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
                <div className="text-center px-20 mt-40 absolute text-white">
                    <h3 className="text-4xl font-bold text-[#bfed07]">Find Your Dream Home with DwellDreams</h3>
                    <p>Discover the perfect home for you. Explore diverse listings tailored to your needs and preferences. With intuitive search features and comprehensive details, finding your dream home has never been easier. Start your journey today.</p>
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