import { useState, useEffect } from "react";

interface FormData {
  email: string;
  password: string;
  username?: string;
  confirm?: string;
  // image: number;
}

interface FormErrors {
  email: string;
  password: string;
  username?: string;
  confirm?: string;
}

export const useAuthForm = (isSignUp = false) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    ...(isSignUp && { username: "", confirm: "" }),
  });

  const [error, setError] = useState<FormErrors>({
    email: "",
    password: "",
    ...(isSignUp && { username: "", confirm: "" }),
  });

  const [touched, setTouched] = useState(
    Object.keys(formData).reduce((acc, key) => {
      acc[key as keyof FormData] = false;
      return acc;
    }, {} as Record<keyof FormData, boolean>)
  );

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  useEffect(() => {
    const newErrors: FormErrors = { email: "", password: "" };

    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 4)
      newErrors.password = "Password must be at least 4 characters";

    if (isSignUp) {
      if (!formData.username) newErrors.username = "Username is required";
      if (!formData.confirm) newErrors.confirm = "Please confirm password";
      else if (formData.confirm !== formData.password)
        newErrors.confirm = "Passwords do not match";
    }

    setError(newErrors);
  }, [formData, isSignUp]);

  const isFormValid = Object.values(error).every((err) => err === "");

  return {
    formData,
    setFormData,
    error,
    touched,
    handleChange,
    handleBlur,
    isFormValid,
  };
};
