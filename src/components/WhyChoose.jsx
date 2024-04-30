import { FaHotel } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { BiSolidLike } from "react-icons/bi";

const WhyChoose = () => {
    return (
        <div className="py-20">
            <div className="px-16 mb-20 text-center">
                <h1 className="text-6xl font-bold text-[#f3c78c]">WHY CHOOSE US</h1>
                <p className="mt-4">Choose us for unparalleled expertise and personalized service. With a passion for adventure and a commitment to excellence, we craft unique experiences tailored to your preferences. From expert guides to seamless logistics, trust us to elevate your journey with unforgettable memories and unparalleled satisfaction.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-16">
                <div className="relative h-[300px] w-96 border rounded-xl shadow-2xl border-[#FFF] bg-[#FFF]">
                    <div className="absolute ml-40 -mt-10 h-[80px] w-[80px] rounded-full shadow-lg bg-[#F9461D]"><FaHotel className="absolute text-3xl ml-6 mt-6 text-[#FFF]"></FaHotel></div>
                    <div className="px-8">
                        <h1 className="text-center text-2xl font-bold mt-12 text-[#ee9f38]">HANDPICKED HOTEL</h1>
                        <p className="text-lg text-gray-500 font-semibold">Carefully selected accommodations offering exceptional quality, comfort, and amenities, ensuring a memorable stay tailored to your preferences and needs.</p>
                    </div>
                </div>
                <div className="relative h-[300px] w-96 border rounded-xl shadow-2xl border-[#FFF] bg-[#FFF]">
                    <div className="absolute ml-40 -mt-10 h-[80px] w-[80px] rounded-full shadow-lg bg-[#F9461D]"><TfiWorld className="absolute text-3xl ml-6 mt-6 text-[#FFF]"></TfiWorld></div>
                    <div className="px-8">
                        <h1 className="text-center text-2xl font-bold mt-12 text-[#ee9f38]">WORLD CLASS SERVICE</h1>
                        <p className="text-lg text-gray-500 font-semibold">Experience unparalleled hospitality and attention to detail from our dedicated team, committed to providing exceptional service and creating unforgettable travel experiences.</p>
                    </div>
                </div>
                <div className="relative h-[300px] w-96 border rounded-xl shadow-2xl border-[#FFF] bg-[#FFF]">
                    <div className="absolute ml-40 -mt-10 h-[80px] w-[80px] rounded-full shadow-lg bg-[#F9461D]"><BiSolidLike className="absolute text-3xl ml-6 mt-6 text-[#FFF]"></BiSolidLike></div>
                    <div className="px-8">
                        <h1 className="text-center text-2xl font-bold mt-12 text-[#ee9f38]">BEST PRICE GUARANTEE</h1>
                        <p className="text-lg text-gray-500 font-semibold">Rest assured knowing you Are getting the best deal available, with our commitment to offering competitive prices and unbeatable value for your travel investment.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;