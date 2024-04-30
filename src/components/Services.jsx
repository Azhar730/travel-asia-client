import { MdFlight } from "react-icons/md";
import { MdLocalHotel } from "react-icons/md";
import { LuTicket } from "react-icons/lu";
import { IoMdBoat } from "react-icons/io";
import { MdDirectionsRailwayFilled } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

const Services = () => {
    return (
        <div className="py-20">
            <div className="px-16 mb-20 text-center">
                <h1 className="text-6xl font-bold text-[#b1690b]">AdventureAxis Services</h1>
                <p className="mt-4">AdventureAxis offers expert-guided expeditions, customized adventure tours, and unique cultural experiences tailored to thrill-seekers and travelers. From adrenaline-pumping activities to eco-friendly adventures, we prioritize safety, sustainability, and unforgettable experiences. Our 24/7 customer support ensures seamless journeys, while promoting responsible travel and cultural immersion.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-16">
                <div className="relative h-[400px] w-96 border rounded-xl shadow-2xl border-[#FFF] bg-[#FFF]">
                    <div className="absolute ml-40 -mt-10 h-[80px] w-[80px] rounded-full shadow-lg bg-[#FFF]"><MdLocalHotel className="absolute text-3xl ml-6 mt-6 text-[#F9461D]"></MdLocalHotel></div>
                    <div className="px-8">
                        <h1 className="text-center text-2xl font-bold mt-12 text-[#ee9f38]">HOTEL BOOKING</h1>
                        <p className="text-lg text-gray-500 font-semibold">Discover the perfect stay with our hotel booking service. Browse a diverse selection of accommodations worldwide, from luxury resorts to cozy guesthouses. Enjoy convenient booking, flexible options, and dedicated customer support for a stress-free travel experience tailored to your needs and preferences.</p>
                    </div>
                </div>
                <div className="relative h-[400px] w-96 border rounded-xl shadow-2xl border-[#FFF] bg-[#FFF]">
                    <div className="absolute ml-40 -mt-10 h-[80px] w-[80px] rounded-full shadow-lg bg-[#FFF]"><MdFlight className="absolute text-3xl ml-6 mt-6 text-[#F9461D]"></MdFlight></div>
                    <div className="px-8">
                        <h1 className="text-center text-2xl font-bold mt-12 text-[#ee9f38]">FLIGHT BOOKING</h1>
                        <p className="text-lg text-gray-500 font-semibold">Elevate your travel experience with our flight booking service. Explore a wide range of destinations, airlines, and ticket options to find the best flights for your journey. Enjoy seamless booking, competitive prices, and reliable customer support for an effortless and enjoyable travel experience.</p>
                    </div>
                </div>
                <div className="relative h-[400px] w-96 border rounded-xl shadow-2xl border-[#FFF] bg-[#FFF]">
                    <div className="absolute ml-40 -mt-10 h-[80px] w-[80px] rounded-full shadow-lg bg-[#FFF]"><LuTicket className="absolute text-3xl ml-6 mt-6 text-[#F9461D]"></LuTicket></div>
                    <div className="px-8">
                        <h1 className="text-center text-2xl font-bold mt-12 text-[#ee9f38]">TICKET BOOKING</h1>
                        <p className="text-lg text-gray-500 font-semibold">Streamline your travel plans with our comprehensive ticket booking service. Browse and book tickets for flights, trains, buses, and more, all in one convenient platform. Enjoy easy booking, flexible options, and reliable customer support to ensure a smooth and stress-free travel experience.</p>
                    </div>
                </div>
                <div className="relative h-[400px] w-96 border rounded-xl shadow-2xl border-[#FFF] bg-[#FFF]">
                    <div className="absolute ml-40 -mt-10 h-[80px] w-[80px] rounded-full shadow-lg bg-[#FFF]"><IoMdBoat className="absolute text-3xl ml-6 mt-6 text-[#F9461D]"></IoMdBoat></div>
                    <div className="px-8">
                        <h1 className="text-center text-2xl font-bold mt-12 text-[#ee9f38]">CRUISES BOOKING</h1>
                        <p className="text-lg text-gray-500 font-semibold">Sail away to unforgettable destinations with our cruise booking service. Explore a world of luxury and adventure aboard top-rated cruise lines. From exotic destinations to onboard amenities, book your dream voyage with ease, flexibility, and exceptional customer support for a seamless cruising experience.</p>
                    </div>
                </div>
                <div className="relative h-[400px] w-96 border rounded-xl shadow-2xl border-[#FFF] bg-[#FFF]">
                    <div className="absolute ml-40 -mt-10 h-[80px] w-[80px] rounded-full shadow-lg bg-[#FFF]"><MdDirectionsRailwayFilled className="absolute text-3xl ml-6 mt-6 text-[#F9461D]"></MdDirectionsRailwayFilled></div>
                    <div className="px-8">
                        <h1 className="text-center text-2xl font-bold mt-12 text-[#ee9f38]">TRAIN BOOKING</h1>
                        <p className="text-lg text-gray-500 font-semibold">Embark on a journey of discovery with our train booking service. Explore scenic routes, bustling cities, and charming towns aboard iconic trains. With easy booking, flexible options, and reliable customer support, enjoy a hassle-free travel experience on the rails.</p>
                    </div>
                </div>
                <div className="relative h-[400px] w-96 border rounded-xl shadow-2xl border-[#FFF] bg-[#FFF]">
                    <div className="absolute ml-40 -mt-10 h-[80px] w-[80px] rounded-full shadow-lg bg-[#FFF]"><FaStar className="absolute text-3xl ml-6 mt-6 text-[#F9461D]"></FaStar></div>
                    <div className="px-8">
                        <h1 className="text-center text-2xl font-bold mt-12 text-[#ee9f38]">AMAZING TOUR</h1>
                        <p className="text-lg text-gray-500 font-semibold">Experience the extraordinary with our Amazing Tour service. From breathtaking landscapes to cultural wonders, embark on unforgettable adventures tailored to thrill-seekers and explorers alike. Discover hidden gems, immersive experiences, and expert guidance for an amazing journey of a lifetime.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;