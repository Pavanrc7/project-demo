import { useState } from "react";
import axios from "axios";
import Input from "../components/Inputs";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <Input label="Email" type="email" name="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email address" />
        <Input label="Password" type="password" name="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="Your password" />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Login</button>
      </form>
    </div>
  );
};

export default Login;
