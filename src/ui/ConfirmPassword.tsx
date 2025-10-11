import { useState } from "react";

const ConfirmPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col relative">
      <label htmlFor="password" className="mb-1 text-sm">
        Confirm Password
      </label>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Confirm password"
        id="password"
        className="p-3 rounded bg-[rgb(217,217,217)] text-black outline-none"
        required
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-1 top-[27px] flex items-center justify-center w-10 h-10 rounded bg-[rgb(106,104,104)] hover:bg-[rgb(90,90,90)] transition cursor-pointer"
      >
        <img
          src={showPassword ? "/assets/close.png" : "/assets/open.png"}
          alt="toggle password visibility"
          className="w-6 h-6"
        />
      </button>
    </div>
  );
};

export default ConfirmPassword;
