import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCofee = () => {
const cofee=useLoaderData()
const {_id,name,chef,supplier,taste,category,details,photourl}=cofee;
console.log(cofee)
    const handleUpdate=e=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const chef=form.chef.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photourl=form.photourl.value;
        const updatedcofee={name,chef,supplier,taste,category,details,photourl}
       console.log(cofee)
       console.log(_id)
       fetch(`https://cofee-store-server-jcjtyuiek-mojahidt17s-projects.vercel.app/cofees/${_id}`,{
        method:'PUT',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(updatedcofee)
      })
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
           Swal.fire({
                    title: "Good job!",
                    text: "You Cofee is Updated!",
                    icon: "success"
                  });
        }
       })
    
    }
    return (
        <div className="bg-[#F4F3F0] md:p-28 p-16">
        <h1 className="text-center font-bold text-5xl">Update Coffee</h1>
        <p className="text-center mt-4 p-5 text-[#1b1a1a]">
        Fill in the details below to add a new coffee item. Provide the name, chef, supplier, taste, category, and any additional details. You can also upload a photo to showcase the coffee.
        </p>
        <form onSubmit={handleUpdate}>
          <div className="md:flex gap-x-10">
            <fieldset className="fieldset  md:w-1/2 ">
              <legend className="fieldset-legend md:text-xl">Name</legend>
              <input  type="text" name="name" defaultValue={name} className="input md:w-full py-6" placeholder="Enter YOur name" />
            </fieldset>
            <fieldset className="fieldset md:w-1/2">
              <legend className="fieldset-legend md:text-xl ">Chef</legend>
              <input type="text " name="chef" defaultValue={chef} className="input md:w-full py-6" placeholder="Enter Coffe Chef" />
            </fieldset>
          </div>
          <div className="md:flex gap-x-10">
            <fieldset className="fieldset  md:w-1/2 ">
              <legend className="fieldset-legend md:text-xl">Supplier</legend>
              <input  type="text" name="supplier" defaultValue={supplier} className="input  md:w-full py-6" placeholder="Enter Supplier name" />
            </fieldset>
            <fieldset className="fieldset md:w-1/2">
              <legend className="fieldset-legend md:text-xl ">Taste</legend>
              <input type="text " name="taste" defaultValue={taste} className="input md:w-full py-6" placeholder="Enter Coffe Taste" />
            </fieldset>
          </div>
          <div className="md:flex gap-x-10">
            <fieldset className="fieldset  md:w-1/2 ">
              <legend className="fieldset-legend md:text-xl">Category</legend>
              <input  type="text" name="category" defaultValue={category} className="input  md:w-full py-6" placeholder="Enter Category" />
            </fieldset>
            <fieldset className="fieldset md:w-1/2">
              <legend className="fieldset-legend md:text-xl ">Details</legend>
              <input type="text " name="details" defaultValue={details} className="input md:w-full py-6" placeholder="Enter Coffe Details" />
            </fieldset>
          </div>
          <div >
            <fieldset className="fieldset  ">
              <legend className="fieldset-legend md:text-xl">Photo</legend>
              <input  type="text" name="photourl" defaultValue={photourl} className="input  w-full py-6" placeholder="Enter Phote URL" />
            </fieldset>
           
          </div>
          <div className="w-full mt-1.5">
              <input type="submit" 
              className="bg-[#D2B48C] w-full hover:bg-[#331A15] border border-[#331A15] hover:text-white font-bold  py-1.5  " 
              value="Update Cofee" />
          </div>
          
        </form>
      </div>
    );
};

export default UpdateCofee;