import { Link } from "react-router-dom";


const Category = () => {

    const categories = ['Single-Family Homes', 'Luxury Homes', 'Cottage', 'Penthouse', 'Condominiums', 'Townhouses']

    // console.log(categories)

    return (
        <div className="mb-24">
            <div className="text-center my-7">
                <h1 className="text-3xl font-bold">Search by Category</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">

                <Link to={`/category/${categories[0]}`}>
                    <div className="card bg-base-100 shadow-xl image-full">
                        <figure><img src="../../../src/assets/img/1.png" alt="" /></figure>
                        <div className="card-body items-center justify-center">
                            <h2 className="card-title">Single-Family Homes</h2>
                        </div>
                    </div>
                </Link>

                <Link to={`/category/${categories[1]}`}>

                    <div className="card bg-base-100 shadow-xl image-full">
                        <figure><img src="../../../src/assets/img/2.png" alt="" /></figure>
                        <div className="card-body items-center justify-center">
                            <h2 className="card-title">Luxury Homes </h2>
                        </div>
                    </div>
                </Link>

                <Link to={`/category/${categories[2]}`}>

                    <div className="card bg-base-100 shadow-xl image-full">
                        <figure><img src="../../../src/assets/img/3.png" alt="" /></figure>
                        <div className="card-body items-center justify-center">
                            <h2 className="card-title">Cottage </h2>
                        </div>
                    </div>
                </Link>
                <Link to={`/category/${categories[3]}`}>
                    <div className="card bg-base-100 shadow-xl image-full">
                        <figure><img src="../../../src/assets/img/5.png" alt="" /></figure>
                        <div className="card-body items-center justify-center">
                            <h2 className="card-title">Penthouse </h2>
                        </div>
                    </div>
                </Link>
                <Link to={`/category/${categories[4]}`}>

                    <div className="card bg-base-100 shadow-xl image-full">
                        <figure><img src="../../../src/assets/img/8.png" alt="" /></figure>
                        <div className="card-body items-center justify-center">
                            <h2 className="card-title">Condominiums (Condos) </h2>
                        </div>
                    </div>
                </Link>
                <Link to={`/category/${categories[5]}`}>
                    <div className="card bg-base-100 shadow-xl image-full">
                        <figure><img src="../../../src/assets/img/9.png" alt="" /></figure>
                        <div className="card-body items-center justify-center">
                            <h2 className="card-title">Townhouses </h2>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Category;