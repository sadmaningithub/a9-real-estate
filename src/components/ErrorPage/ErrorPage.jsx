import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        
            <section className="flex items-center p-16">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn&apos;t find this page.</p>
                        <p className="mt-4 mb-8 ">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link to='/' className="px-8 py-4 font-semibold rounded-xl bg-[#2B3440] text-white ">
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </section>
       
    );
};

export default ErrorPage;