const CountryCard = ({ country }) => {
    const { name, image, description } = country
    return (
        <div className='w-96 px-8 py-6 rounded-xl shadow-lg bg-[#FFF] border border-[#f39017]'>
            <img className='h-[170px] w-[350px] rounded-lg' src={image} alt="" />
            <h1 className="text-3xl font-bold text-center text-[#f39017]">{name}</h1>
            <p className="text-lg text-gray-500">{description}</p>
        </div>
    );
};

export default CountryCard;