import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-sky-700 text-slate-100 p-2 rounded shadow grid grid-cols-2 mt-9">
        <p>Name:</p>
        <p>{session?.user.name}</p>
        <p>Email:</p>
        <p>{session?.user.email}</p>
        <p>Role:</p>
        <p>{session?.user.role}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
