import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../State/Auth/Action";

const Profile = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const token = localStorage.getItem("jwt");
  console.log(auth.user);
  useEffect(() => {
    dispatch(getUser(token));
  }, []);
  const primaryAddress =
    auth.user?.address.length > 0 ? auth.user?.address[0] : {};
  console.log(auth.user?.address);
//   console.log(auth.user.role);
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-8">
      <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white text-center py-6">
        <h2 className="text-3xl font-semibold">Profile Details</h2>
      </div>
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">
              <strong>Name:</strong>
            </p>
            <p className="text-xl font-medium text-gray-900">{auth.user?.firstName} {auth.user?.lastName}</p>
          </div>
          <div>
            <p className="text-gray-600">
              <strong>Email:</strong>
            </p>
            <p className="text-xl font-medium text-gray-900">{auth.user?.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">
              <strong>Role:</strong>
            </p>
            <p className="text-xl font-medium text-gray-900">{auth.user?.role==="ADMIN"?"ADMIN":"CUSTOMER"}</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Primary Address
        </h3>
        {primaryAddress ? (
          <div className="space-y-2">
            <p className="text-lg">
              <strong>Street:</strong> {primaryAddress.streetAddress || "N/A"}
            </p>
            <p className="text-lg">
              <strong>City:</strong> {primaryAddress.city || "N/A"}
            </p>
            <p className="text-lg">
              <strong>State:</strong> {primaryAddress.state || "N/A"}
            </p>
            <p className="text-lg">
              <strong>ZIP Code:</strong> {primaryAddress.zipCode || "N/A"}
            </p>
            <p className="text-lg">
              <strong>Country:</strong> {primaryAddress.country || "India"}
            </p>
          </div>
        ) : (
          <p className="text-lg text-gray-700">No primary address available.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
