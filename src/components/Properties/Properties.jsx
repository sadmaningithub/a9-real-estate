import { useLoaderData } from "react-router-dom";
import SingleProperty from "../SIngleProperty/SingleProperty";

const Properties = () => {

    const properties = useLoaderData()
    console.log(typeof properties)

    return (
        <div className="mt-10 mb-24 space-y-7">
            <h1 className="font-bold text-4xl text-center ">Search Your Next Property Here</h1>
            <div className=" grid grid-cols-3 gap-10 ">
                {
                    properties.map((property, idx) => <SingleProperty key={idx} property={property}></SingleProperty>)
                }
            </div>
        </div>

    );
};

export default Properties;