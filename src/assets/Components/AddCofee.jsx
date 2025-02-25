import Swal from 'sweetalert2';

const AddCofee = () => {
  const handleAddCofee=e=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const chef=form.chef.value;
    const supplier=form.supplier.value;
    const taste=form.taste.value;
    const category=form.category.value;
    const details=form.details.value;
    const photourl=form.photourl.value;
    const cofee={name,chef,supplier,taste,category,details,photourl}
    console.log(cofee)
    fetch('http://localhost:5000/cofees',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(cofee)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      form.reset()
      if(data.insertedId){
        Swal.fire({
          title: "Good job!",
          text: "Your Cofee is Added!",
          icon: "success"
        });
        
      }
    })
  }
  return (
    <div 
    className="bg-[#F4F3F0]  p-16 ">
   
      <div className='max-w-4xl mx-auto '>
      <h1 className="text-center font-bold text-2xl md:text-5xl">Add New Coffee</h1>
      <p className="text-center mt-4 p-5 text-[#1b1a1a]">
      Fill in the details below to add a new coffee item. Provide the name, chef, supplier, taste, category, and any additional details. You can also upload a photo to showcase the coffee.
      </p>
      <form onSubmit={handleAddCofee}>
        <div className="md:flex gap-x-10">
          <fieldset className="fieldset  md:w-1/2 ">
            <legend className="fieldset-legend md:text-xl">Name</legend>
            <input  type="text" required name="name" className="input md:w-full py-5" placeholder="Enter YOur name" />
          </fieldset>
          <fieldset className="fieldset md:w-1/2">
            <legend className="fieldset-legend md:text-xl ">Chef</legend>
            <input type="text " required name="chef" className="input md:w-full py-5" placeholder="Enter Coffe Chef" />
          </fieldset>
        </div>
        <div className="md:flex gap-x-10">
          <fieldset className="fieldset  md:w-1/2 ">
            <legend className="fieldset-legend md:text-xl">Supplier</legend>
            <input  type="text" required name="supplier" className="input  md:w-full py-5" placeholder="Enter Supplier name" />
          </fieldset>
          <fieldset className="fieldset md:w-1/2">
            <legend className="fieldset-legend md:text-xl ">Taste</legend>
            <input type="text " name="taste" className="input md:w-full py-5" placeholder="Enter Coffe Taste" />
          </fieldset>
        </div>
        <div className="md:flex gap-x-10">
          <fieldset className="fieldset  md:w-1/2 ">
            <legend className="fieldset-legend md:text-xl">Category</legend>
            <input  type="text" required name="category" className="input  md:w-full py-5" placeholder="Enter Category" />
          </fieldset>
          <fieldset className="fieldset md:w-1/2">
            <legend className="fieldset-legend md:text-xl ">Details</legend>
            <input type="text " name="details" className="input md:w-full py-5" placeholder="Enter Coffe Details" />
          </fieldset>
        </div>
        <div >
          <fieldset className="fieldset  ">
            <legend className="fieldset-legend md:text-xl">Photo</legend>
            <input  type="text" name="photourl" className="input  w-full py-5" placeholder="Enter Phote URL" />
          </fieldset>
         
        </div>
        <div className="w-full mt-1.5">
            <input type="submit" 
            className="bg-[#D2B48C] w-full hover:bg-[#331A15] border border-[#331A15] hover:text-white font-bold  py-1.5  " 
            value="Add Cofee" />
        </div>
        
      </form>
      </div>
    </div>
  );
};

export default AddCofee;
