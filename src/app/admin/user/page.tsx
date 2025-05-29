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
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2">Name</th>
            <th className="border-b p-2">Email</th>
            <th className="border-b p-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {dummyUsers.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border-b p-2">{user.name}</td>
              <td className="border-b p-2">{user.email}</td>
              <td className="border-b p-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserPage;
