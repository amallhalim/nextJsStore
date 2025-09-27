import { supabase } from "../../../lib/servises/supabase";
import AddUserForm from "./AddUserForm";

export default async function Home() {
    // Fetch users on the server (SSR)
    const { data: users, error } = await supabase.from("users").select("*");

    if (error) {
        console.error(error);
        return <div>Failed to load users</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">👥 Users</h1>

            {/* Client Component (interactive) */}
            <AddUserForm />

            {/* Users List */}
            {users?.length ? (
                <ul className="space-y-4 mt-8">
                    {users.map((u) => (
                        <li
                            key={u.id}
                            className="p-4 bg-white rounded-lg shadow flex justify-between items-center hover:shadow-lg transition"
                        >
                            <div>
                                <p className="font-medium text-gray-900">{u.name}</p>
                                <p className="text-gray-500 text-sm">{u.email}</p>
                            </div>
                            <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                                Active
                            </span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-600 mt-4">No users found.</p>
            )}
        </div>
    );
}
