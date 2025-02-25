import { Link } from "react-router-dom";
import bannerImage from "/images/more/3.png";
const Header = () => {
  return (
    <div >
      {/* banner  */}
      <div className="relative overflow-hidden before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-20 before:z-10 mt-16">
        <img
          src={bannerImage}
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="md:min-h-dvh min-h-[300px]   relative z-10 h-full max-w-6xl mx-auto flex  justify-end items-center  text-white p-6">
       <div className="lg:w-1/2 md:w-2/3 ">
        
       <h2 className="sm:text-4xl text-2xl  font-bold mb-6 ">Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="sm:text-lg text- çbase  text-gray-200 mb-4">
          It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
          </p>

          <Link
           
            className="mt-4 hover:bg-transparent text-white text-base py-3 px-6 hover:border border-white rounded-lg transition duration-300 bg-[#E3B577]"
          >
            Book Now
          </Link>
       </div>
         </div>
        </div>
   
      {/* card items */}
      <div className=" bg-[#ECEAE3]">
      <div className="grid md:grid-cols-4 grid-cols-2 max-w-4xl mx-auto gap-4 px-2 ">
        <div className="card  card-md ">
          <div className="w-48 ms-6 mt-3">
           <img src="images/icons/1.png" alt="" />
          </div>
          <div className="card-body">
            <h2 className="card-title font-rancho text-xl">Awesome Aroma</h2>
            <p className="text-[#1B1A1A]">
            You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
        </div>
        <div className="card   card-md ">
          <div className="w-48 ms-6 mt-3">
           <img src="images/icons/2.png" alt="" />
          </div>
          <div className="card-body">
            <h2 className="card-title font-rancho text-xl">High Quality</h2>
            <p className="text-[#1B1A1A]">
            We served the coffee to you maintaining the best quality
            </p>
          </div>
        </div>
        <div className="card  card-md ">
          <div className="w-48 ms-6 mt-3">
           <img src="images/icons/3.png" alt="" />
          </div>
          <div className="card-body">
            <h2 className="card-title font-rancho text-xl">Pure Grades</h2>
            <p className="text-[#1B1A1A]">
            The coffee is made of the green coffee beans which you will love
            </p>
            
          </div>
        </div>
        <div className="card  card-md ">
          <div className="w-48 ms-6 mt-3">
           <img src="images/icons/4.png" alt="" />
          </div>
          <div className="card-body">
            <h2 className="card-title font-rancho text-xl">Proper Roasting</h2>
            <p className="text-[#1B1A1A]">
            Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
        
      </div>
      </div>
      
    </div>
  );
};

export default Header;
