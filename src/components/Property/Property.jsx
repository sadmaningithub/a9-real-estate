import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { IoPricetagOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const Property = ({ property }) => {
    // console.log(property)
    const { id, estate_title, image, price, status, area, location, facilities } = property

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="p-4">
                <img src={image} alt={estate_title} />
            </figure>
            <div className=" ">
                <div className="card-body space-y-3">
                    <div className="flex flew-row justify-between items-center">
                        <h2 className="card-title">
                            {estate_title}
                            <div className="badge badge-secondary border-0 bg-slate-700 text-white">{status}</div>
                        </h2>
                        <p className="flex justify-end text-lg">{area}</p>
                    </div>
                    <div className="flex flex-row gap-1 items-center ">
                        <SlLocationPin />
                        <p className="grow-0 text-base">{location}</p>
                    </div>

                    <hr className=""/>
                    <div className="flex flex-col lg:flex-row text-sm gap-2">
                        {
                            facilities.map((facility, index) => <span className="flex-wrap px-2 py-1 rounded-2xl bg-slate-700 text-white" key={index}> {facility} </span>)
                        }
                    </div>
                </div>
                <div className="card-actions flex flex-row items-center justify-between text-lg p-8 pt-0">
                    <div>
                        <h4 className="flex flex-row gap-1 items-center"><IoPricetagOutline/> {price}$</h4>
                    </div>
                    <Link to={`/property/${id}`}> <button className="btn btn-primary hover:bg-white hover:text-slate-700 bg-slate-700 text-white border-0 px-7 "> View Property</button> </Link>
                </div>
            </div>
        </div>
    );
};

Property.propTypes ={
    property: PropTypes.object.isRequired
}

export default Property;