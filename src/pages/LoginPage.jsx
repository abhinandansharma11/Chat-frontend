import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

import AuthVisualHero from "../components/AuthVisualHero";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };


return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-base-200/50">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8 bg-base-100 p-10 rounded-[2.5rem] shadow-xl border border-base-300">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-black tracking-tight text-base-content">Welcome Back</h1>
            <p className="text-base-content/60 font-medium mt-2">Log in to your workspace</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-base-content/70">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type="email"
                  className="input input-bordered w-full pl-11 bg-base-200/50 border-base-300 focus:border-primary transition-all h-14 rounded-2xl text-base-content placeholder:text-base-content/30"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-base-content/70">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pl-11 bg-base-200/50 border-base-300 focus:border-primary transition-all h-14 rounded-2xl text-base-content placeholder:text-base-content/30"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-base-content/40 hover:text-primary transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary w-full h-14 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20 normal-case" 
              disabled={isLoggingIn}
            >
              {isLoggingIn ? <Loader2 className="h-6 w-6 animate-spin" /> : "Sign in to GoChat"}
            </button>
          </form>

          <div className="text-center pt-2">
            <p className="text-base-content/60 font-medium">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary font-bold hover:underline">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <AuthVisualHero
        title="Experience the calm."
        subtitle="A beautifully minimal way to stay connected with your people, minus the noise."
      />
    </div>
  );
};
export default LoginPage;