import { useState } from "react";

export const validate = (form) => {
  let errors = {};
  Object.keys(form).forEach((key) => {
    if (!form[key]) {
      errors[key] = "Field is required";
    } else {
      errors[key] = null;
    }
  });
  return errors;
};

export const isEmpty = (errors) => {
  return Object.values(errors).every((err) => !err);
};

const useContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const reset = () => {
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const [errors, setErrors] = useState({
    name: null,
    email: null,
    message: null,
  });

  const setField = (key, val) => {
    setForm((prev) => ({
      ...prev,
      [key]: val,
    }));
    setError(key, null);
  };

  const setError = (key, val) => {
    setErrors((prev) => ({
      ...prev,
      [key]: val,
    }));
  };

  return {
    form,
    errors,
    reset,
    setField,
    setError,
    setErrors,
  };
};

export default useContactForm;
