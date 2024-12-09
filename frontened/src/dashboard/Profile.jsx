import { useContext } from "react";
import CreateContext from "../context/CreateContext";

const Profile = () => {
  const { userDetails } = useContext(CreateContext);
  const name = localStorage.getItem('name') || 'Guest';

  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Admin Profile</h1>
      <div className="flex flex-col items-start w-full space-y-2">
        <p className="text-lg text-gray-600">
          <span className="font-bold text-gray-800">Name:</span> {name}
        </p>
        <p className="text-lg text-gray-600">
          <span className="font-bold text-gray-800">Email:</span> {userDetails?.email || 'No email provided'}
        </p>
      </div>
      <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
        Edit Profile
      </button>
    </div>
  );
};

export default Profile;
