import { Link } from "react-router";

export default function Landing(){
    return(
        <>
        <section className="sm:w-1/2 w-full h-screen flex flex-col ">
            <img src="/public/ClarityCapital.png" className="object-contain" alt="logo" />
            <div className="flex flex-col justify-center text-center gap-8 p-8">

                {/* <h2 className="text-7xl leading-20">Banking Simplified</h2> */}
                <p className="text-2xl">Experience transparent, efficient, and secure financial management</p>
                <div className="flex flex-row w-full gap-4">

                <Link className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full text-white text-start py-4 px-4 text-xl rounded" to={"/Register"}>Sign Up</Link>
                <Link className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full text-white text-start py-4 px-4 text-xl rounded" to={"/Login"}>Log in</Link>
                </div>
            </div>

            <section className="flex p-8 gap-4">
                <div className="flex flex-col gap-2 text-center">
                   <i className="bi bi-globe text-4xl"></i> 
                   <p>Global SWIFT Transfers</p>
                </div>
                <div className="flex flex-col gap-2 text-center">
                   <i className="bi bi-lock text-4xl"></i>
                   <p>Advanced Security</p>
                </div>
                <div className="flex flex-col justify-center gap-2 text-center">
                   <i className="bi bi-clock-history text-4xl"></i> 
                   <p >24/7 Management</p>
                </div>
            </section>
        </section>
        </>
    )
}