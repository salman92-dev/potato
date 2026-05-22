import Navbar from "./navbar";
const Hero = () => {
    return (
        <div className="flex items-end justify-center h-screen bg-[#241F21] pb-16">
            <Navbar />
            <div className="">
                <h1 className="urbanist font-extrabold text-5xl max-md:text-center">
                COME. GET. STUFFED.
                </h1>
            </div>
        </div>
    );
}
export default Hero;