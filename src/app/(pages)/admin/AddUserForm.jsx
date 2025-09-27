"use client";

import { useState } from "react";
import { supabase } from "../../../lib/servises/supabase";

export default function AddUserForm() {
    const [form, setForm] = useState({ name: "", email: "" });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    async function addUser(e) {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        const { error } = await supabase
            .from("users")
            .insert([{ name: form.name, email: form.email }]);

        if (error) {
            setError(error.message);
        } else {
            setSuccess(true);
            setForm({ name: "", email: "" });
        }
    }

    return (
        <form
            onSubmit={addUser}
            className="mb-8 p-6 bg-white rounded-lg shadow space-y-4"
        >
            <h2 className="text-xl font-semibold">➕ Add New User</h2>

            {error && <p className="text-red-600">{error}</p>}
            {success && <p className="text-green-600">✅ User added successfully!</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border p-2 rounded w-full"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="border p-2 rounded w-full"
                    required
                />
            </div>

            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Add User
            </button>
        </form>
    );
}
