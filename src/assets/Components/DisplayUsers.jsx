/* eslint-disable react/jsx-key */
import { useLoaderData } from "react-router-dom";

const DisplayUsers = () => {
    const users=useLoaderData();
    let count=1;
    return (
        <div className=" mx-auto max-w-4xl mb-5">
            <h1 className="text-xl text-center my-10">Here is Our All users</h1>
        <table className="table table-zebra">
          {/* head */}
       
          <thead className="bg-gray-300">
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Eamail</th>
             
            </tr>
          </thead>
          <tbody>
          { 
            users.map(user=> <tr key={user._id}>
                <th>{count++}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                
              </tr>)
          }
            {/* row 1 */}
           
           
          
          </tbody>
        </table>
      </div>
    );
};

export default DisplayUsers;