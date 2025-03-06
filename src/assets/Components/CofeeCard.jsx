import PropTypes from "prop-types";
import { useContext } from "react";
import { AiFillEdit } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
const CofeeCard = ({ cofee, cofees,setCofees }) => {
  const {user}=useContext(AuthContext);
  const Navigate =useNavigate();
  console.log(cofee);
  const { _id, name, chef, category, photourl } = cofee;

  const deleteCofee = (id) => {
    console.log(id);
    if(user){
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        
        if (result.isConfirmed) {
          fetch(`https://cofee-store-server-jcjtyuiek-mojahidt17s-projects.vercel.app/cofees/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your Cofee has been deleted.",
                  icon: "success",
                });
                const remainingcofee=cofees.filter(cof=>cof._id!=id);
                setCofees(remainingcofee)
              }
            });
        }
      });
    }
    else{
      Navigate('/signIn')
    }
  
  };
  return (
    <div className="card transition-transform duration-200 hover:scale-105 card-side shadow-xl h-full bg-[#F5F4F1]">
      <figure className="h-full">
        <img src={photourl} className="p-4" alt="Movie" />
      </figure>
      <div className="card-body">
        <div className=" flex justify-between items-center">
          <div>
            <p className="card-title mb-3">Name: {name}</p>
            <p>Chef: {chef}</p>
            <p>Category: {category}</p>
          </div>
          <div className="card-actions">
            <div className="join join-vertical space-y-4">
              <Link to={`/displayCofee/${_id}`}>

                <button className="btn rounded-2xl join-item bg-[#D2B48C] text-white">
                  {" "}
                  <FaEye />
                </button>
              </Link>
              <Link to={`/updateCofee/${_id}`}>
                <button className="btn join-item rounded-xl bg-[#3C393B] text-white">
                  <AiFillEdit />
                </button>
              </Link>

              <button
                onClick={() => deleteCofee(_id)}
                className="btn join-item rounded-xl bg-[#EA4744] text-white"
              >
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
CofeeCard.propTypes = {
  cofee: PropTypes.object.isRequired,
  cofees: PropTypes.array,
  setCofees:PropTypes.func.isRequired,

};
export default CofeeCard;
