import { useEffect, useState } from "react";
import Property from "../Property/Property";
import { Link } from "react-router-dom";


const FeatureProperties = () => {

    const [properties, setProperties] = useState([])

    useEffect(() => {
        fetch('properties.json')
            .then(res => res.json())
            .then(data => setProperties(data))
    }, [])

    return (
        <div className="my-24">
            <div className="text-center space-y-7">
                <h1 className="text-3xl font-bold">Featured Properties</h1>
                <p className="text-lg	">These featured listings contain exclusive real estate opportunities within the city</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        properties.slice(0, 3).map(property => <Property key={property.id} property={property}></Property>)
                    }
                </div>
                <Link to='/properties'> <button className="btn mt-7 hover:bg-white hover:text-slate-700 bg-slate-700 text-white"> Show All</button> </Link>
            </div>
        </div>
    );
};

export default FeatureProperties;