import React from "react";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const dummyUsers: User[] = [
  { id: 1, name: "Sushan G.", email: "sushan@example.com", role: "Admin" },
  { id: 2, name: "Aayushma", email: "aayushma@example.com", role: "Editor" },
  { id: 3, name: "Ramesh", email: "ramesh@example.com", role: "Viewer" },
];

function UserPage() {
  return (
    <div className="p-6 w-full max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Users</h1>
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-blue-100 text-blue-800">
            <th className="border-b border-blue-300 p-3">Name</th>
            <th className="border-b border-blue-300 p-3">Email</th>
            <th className="border-b border-blue-300 p-3">Role</th>
          </tr>
        </thead>
        <tbody>
          {dummyUsers.map((user) => (
            <tr
              key={user.id}
              className="hover:bg-blue-50 transition-colors duration-200"
            >
              <td className="border-b border-blue-200 p-3 font-semibold text-blue-900">
                {user.name}
              </td>
              <td className="border-b border-blue-200 p-3 text-blue-800">
                {user.email}
              </td>
              <td className="border-b border-blue-200 p-3 text-blue-700">
                {user.role}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserPage;
