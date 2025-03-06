import { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import CofeeCard from "./assets/Components/CofeeCard";

function App() {
  const loadedCofees = useLoaderData();
  console.log(loadedCofees)
  const [cofees, setCofees] = useState(loadedCofees);

  return (
    <div>
        
        <section className="relative overflow-hidden z-10">
  <img
    src="images/more/4.png"
    alt="Banner Image"
    className="absolute top-20  left-0 object-contain "
    style={{ width: "200px", height: "250px" }} 
  />
  <img
    src="images/more/5.png"
    alt="Banner Image"
    className="absolute  bottom-0 right-0 sm:block hidden object-contain"
    style={{ maxWidth: "250px", maxHeight: "550px" }} 
  />
  <div className="relative z-10 mx-auto px-4">
    <div className="text-center my-8">
      <p>--- Sip & Savor ---</p>
      <h2 className="text-2xl font-rancho my-2">Our Popular Products</h2>

      <NavLink
        className="bg-[#E3B577] text-xl btn transition duration-500 hover:scale-105 text-white py-3 px-6"
        to="/addCofee"
      >
        Add Cofee
      </NavLink>
    </div>
    <div className="grid md:grid-cols-2 md:px-0 px-4 mt-10 mx-auto gap-10 max-w-3xl">
      {cofees.map((cofee) => (
        <CofeeCard
          key={cofee._id}
          cofees={cofees}
          setCofees={setCofees}
          cofee={cofee}
        />
      ))}
    </div>
  </div>
</section>

      {/* follow on instragam section  */}
      <div className="mt-10 mx-auto mb-5">
        <p className="text-center text-[#1B1A1A]">Follow Us Now</p>
        <h2 className="text-center font-rancho font-bold text-2xl">Follow on Instagram</h2>
        <div className="grid md:grid-cols-4 grid-cols-2 md:px-0 px-4 mt-4 mx-auto gap-5 md:gap-10 max-w-3xl">
          <div className="card bg-base-100 w-36 md:w-48 h-full ">
            <figure>
              <img
                src="images/cups/Rectangle 9.png"
                alt="cups"
              />
            </figure>
           
          </div>
          <div className="card bg-base-100 w-36 md:w-48 h-full ">
            <figure>
              <img
                src="images/cups/Rectangle 10.png"
                alt="cups"
              />
            </figure>
           
          </div>
          <div className="card bg-base-100 w-36 md:w-48 h-full ">
            <figure>
              <img
                src="images/cups/Rectangle 11.png"
                alt="cups"
              />
            </figure>
           
          </div>
          <div className="card bg-base-100 w-36 md:w-48 h-full ">
            <figure>
              <img
                src="images/cups/Rectangle 12.png"
                alt="cups"
              />
            </figure>
           
          </div>
          <div className="card bg-base-100 w-36 md:w-48 h-full ">
            <figure>
              <img
                src="images/cups/Rectangle 13.png"
                alt="cups"
              />
            </figure>
           
          </div>
          <div className="card bg-base-100 w-36 md:w-48 h-full ">
            <figure>
              <img
                src="images/cups/Rectangle 14.png"
                alt="cups"
              />
            </figure>
           
          </div>
          <div className="card bg-base-100 w-36 md:w-48 h-full ">
            <figure>
              <img
                src="images/cups/Rectangle 15.png"
                alt="cups"
              />
            </figure>
           
          </div>
          <div className="card bg-base-100 w-36 md:w-48 h-full ">
            <figure>
              <img
                src="images/cups/Rectangle 16.png"
                alt="cups"
              />
            </figure>
           
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default App;
