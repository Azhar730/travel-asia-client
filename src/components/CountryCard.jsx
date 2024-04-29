// import { IoStarSharp } from "react-icons/io5";
// import { MdDateRange } from "react-icons/md";
//, day, price, rating


const CountryCard = ({ country }) => {
    const { name, image, description } = country
    return (
        <div className='w-96 px-8 py-6 rounded-xl shadow-lg bg-[#FFF] border border-[#f39017]'>
            <img className='h-[170px] w-[350px] rounded-lg' src={image} alt="" />
            <h1 className="text-3xl font-bold text-center text-[#f39017]">{name}</h1>
            <p className="text-lg text-gray-500">{description}</p>
            {/* <div className="flex mt-3 justify-between text-xl mb-3 px-2">
                <p className="flex items-center"><MdDateRange></MdDateRange>{day}<small>Days</small></p>
                <p className="flex items-center"><IoStarSharp></IoStarSharp>{rating}</p>
            </div>
            <div className="border-b-2 border-dashed border-gray-400"></div>
            <div className="px-4">
                <p className="text-lg text-gray-500 font-semibold">Price</p>
                <h1 className="text-4xl font-bold text-[#f48b09]">{price}</h1>
            </div> */}
        </div>
    );
};

export default CountryCard;