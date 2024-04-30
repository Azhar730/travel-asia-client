import { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../components/useAuth";

const MyLists = () => {
    const {user}= useAuth()
    const email = user.email
    const [spots, setSpots] = useState([])
    useEffect(() => {
        fetch('https://travel-asia-server-eight.vercel.app/touristsSpot')
            .then(res => res.json())
            .then(data => {
                setSpots(data.filter(item=>item.userEmail==email))
            })
    }, [email])
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://travel-asia-server-eight.vercel.app/touristsSpot/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = spots.filter(cof=>cof._id !== id)
                            setSpots(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div>
            <h1 className="text-4xl font-bold">My Lists: {spots.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="text-xl">
                            <th></th>
                            <th>Spot Name</th>
                            <th>Country Name</th>
                            <th>Photo</th>
                            <th>Cost</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            spots.map((spot,idx) => <tr key={idx} className="text-lg font-medium">
                                <th>{idx=idx+1}</th>
                                <td>{spot.spotName}</td>
                                <td>{spot.countryName}</td>
                                <td><img className="w-28" src={spot.photo}/></td>
                                <td>{spot.averageCost}</td>
                                <td>
                                    <button onClick={() => handleDelete(spot._id)} className='btn bg-[#e85856] text-white text-xl'><MdDelete></MdDelete></button>
                                </td>
                                <td>
                                    <Link to={`/updateSpot/${spot._id}`} className='btn bg-[#693457] text-white text-xl'><MdEdit></MdEdit></Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyLists;