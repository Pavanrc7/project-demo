import { useState } from "react";
import axios from "axios";
import Input from "../components/Inputs";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/register", form);
      localStorage.setItem("token", res.data.token);
      alert("Registered successfully!");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <Input label="Name" name="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
        <Input label="Email" type="email" name="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email address" />
        <Input label="Password" type="password" name="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="Choose a password" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Register</button>
      </form>
    </div>
  );
};

export default Register;
