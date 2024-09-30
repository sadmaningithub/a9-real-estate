import { useLoaderData, useParams } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { RiRuler2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";

const PropertyDetails = () => {

    const properties = useLoaderData()
    console.log(typeof properties)
    const propertyIdObj = useParams()
    console.log(propertyIdObj)
    const propertyId = parseInt(propertyIdObj.id)
    console.log(typeof propertyId)
    const property = properties.find(property => property.id == propertyId)
    console.log(typeof property)
    // console.log(typeof propertyId, properties)


    return (
        <div className="mt-10 mb-24">
            <div className="space-y-7">
                <img src={property.image} alt={`Picture of ${property.estate_title}`} />
                <div className="flex gap-5 flex-col lg:flex-row justify-between items-center">
                    <h1 className="font-bold text-4xl">{property.estate_title}</h1>
                    <h5 className="flex items-center gap-2 font-bold text-2xl">
                        <IoPricetagOutline />
                        {property.price}$
                    </h5>
                </div>
                <h4 className="font-medium text-xl">{property.segment_name}</h4>
                <h1 className="font-bold text-4xl">Details</h1>
                <p className="font-normal text-lg text-justify">{property.description}</p>
                <h1 className="font-bold text-2xl" >Status</h1>
                <h5 className="font-normal text-lg">{property.status}</h5>
                <h1 className="font-bold text-2xl" >Area</h1>
                <h5 className="flex flex-row items-center text-lg gap-1">
                    <RiRuler2Line />
                    {property.area}
                </h5>
                <h1 className="font-bold text-2xl" >Location</h1>
                <h5 className="flex flex-row items-center gap-1 text-lg">
                    <SlLocationPin />
                    {property.location}
                </h5>
                <h1 className="font-bold text-2xl" >Facilities</h1>
                <h5>{property.facilities.map((facility, index) => <span className="flex items-center gap-2 font-normal text-lg" key={index}> <FaCheck />
                    {facility} </span>)}
                </h5>
                <div className="flex flex-col lg:flex-row gap-5 justify-center">
                    <button className="btn hover:bg-white hover:text-slate-700 bg-slate-700 text-white">Add to Wishlist</button>
                    <button className="btn hover:bg-white hover:text-slate-700 bg-slate-700 text-white">Buy</button>
                </div>

            </div>
        </div >
    );
};

export default PropertyDetails;