import { useState } from "react";
interface ConfirmPasswordProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
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

const ConfirmPassword = ({
  onChange,
  value,
  errorMsg,
  onBlur,
  touched,
}: ConfirmPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col relative">
      <label htmlFor="password" className="mb-1 text-sm">
        Confirm Password
      </label>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Confirm password"
        name="confirm"
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        id="password"
        className="p-2 rounded bg-[rgb(217,217,217)] text-black outline-none  placeholder:text-sm"
        required
      />
      {touched.confirm && errorMsg.confirm && (
        <p className="text-red-500 text-sm mt-1">{errorMsg.confirm}</p>
      )}
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-1 top-[27px] flex items-center justify-center w-8 h-8 rounded bg-[rgb(106,104,104)] hover:bg-[rgb(90,90,90)] transition cursor-pointer"
      >
        <img
          src={showPassword ? "/assets/close.png" : "/assets/open.png"}
          alt="toggle password visibility"
          className="w-5 h-5"
        />
      </button>
    </div>
  );
};

export default ConfirmPassword;
