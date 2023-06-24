import React from "react";

export const SectionDeliver = ({ profile }) => {
  return (
    <div className="mt-6 bg-white px-6 py-4">
      <h2 className="mb-3 text-sm">Deliver To</h2>
      <div className="mt-2 flex justify-between">
        <p className="text-sm text-brand-secondary">Name</p>
        <p className="text-sm text-black">{profile.name}</p>
      </div>
      <div className="mt-2 flex justify-between">
        <p className="text-sm text-brand-secondary">Phone No</p>
        <p className="text-sm text-black">{profile.phoneNumber}</p>
      </div>
      <div className="mt-2 flex justify-between">
        <p className="text-sm text-brand-secondary">Address</p>
        <p className="text-sm text-black">{profile.address}</p>
      </div>
      <div className="mt-2 flex justify-between">
        <p className="text-sm text-brand-secondary">House No</p>
        <p className="text-sm text-black">{profile.houseNumber}</p>
      </div>
      <div className="mt-2 flex justify-between">
        <p className="text-sm text-brand-secondary">City</p>
        <p className="text-sm text-black">{profile.city}</p>
      </div>
    </div>
  );
};
