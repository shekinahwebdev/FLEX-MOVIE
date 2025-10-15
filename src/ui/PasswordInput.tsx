import { useState } from "react";

interface PasswordInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  touched: {
    email: boolean;
    username: boolean;
    password: boolean;
    confirm: boolean;
  };
  errorMsg: {
    email: string;
    username?: string;
    password: string;
    confirm?: string;
  };
}

const PasswordInput = ({
  onChange,
  value,
  errorMsg,
  touched,
  onBlur,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col relative">
      <label htmlFor="password" className="mb-1 text-sm">
        Password
      </label>
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        id="password"
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        placeholder="Enter your password"
        className="p-3 rounded bg-[rgb(217,217,217)] text-black outline-none"
        required
      />
      {touched.password && errorMsg.password && (
        <p className="text-red-500 text-sm mt-1 ">{errorMsg.password}</p>
      )}
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

export default PasswordInput;
