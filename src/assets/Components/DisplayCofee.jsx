import { useLoaderData } from "react-router-dom";

const DisplayCofee = () => {
  const cofee = useLoaderData();
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content gap-x-14 flex-col lg:flex-row">
          <div>
          <img
            src={cofee.photourl}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          </div>
          <div> 
            <p className="font-bold text-[#331A15]">Cofee Details: </p>
            <h1 ><span className="font-bold">Name: </span> {cofee.name}</h1>
            <h1 ><span className="font-bold">Chef: </span> {cofee.chef}</h1>
            <h1 ><span className="font-bold">Supplier: </span> {cofee.supplier}</h1>
            <h1 ><span className="font-bold">Category: </span> {cofee.category}</h1>
            <p className="py-6">
              <span className="font-bold">Details: </span>
              {cofee.details}
            </p>
            <button className="btn btn-accent">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCofee;
