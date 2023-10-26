import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  location: Yup.string().required("Location is required"),
  address: Yup.string().required("Address is required"),
  phoneNumber: Yup.string()
    .matches(/^0[789][01]\d{8}$/, "Invalid Nigerian phone number")
    .required("Phone Number is required"),
  ninNumber: Yup.string()
    .matches(/^[0-9]{11}$/, "NIN must be 11 digits")
    .required("NIN Number is required"),
});

const steps = [
  "Personal Information",
  "Address Information",
  "Account Information",
];

const RegisterPage = () => {
  const [step, setStep] = useState(0);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      location: "",
      address: "",
      phoneNumber: "",
      ninNumber: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      console.log("Final data:", data);
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <Link
            to="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 m-auto"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
          </Link>
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Register
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            {step === 0 && (
              <>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your Name"
                        disabled={isSubmitting}
                      />
                    )}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        disabled={isSubmitting}
                      />
                    )}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="password"
                        disabled={isSubmitting}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="••••••••"
                      />
                    )}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <Controller
                    name="confirmPassword"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="••••••••"
                        disabled={isSubmitting}
                      />
                    )}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <div>
                  <label
                    htmlFor="location"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Location
                  </label>
                  <Controller
                    name="location"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your Location"
                        disabled={isSubmitting}
                      />
                    )}
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.location.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Address
                  </label>
                  <Controller
                    name="address"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        disabled={isSubmitting}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your Address"
                      />
                    )}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.address.message}
                    </p>
                  )}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone Number
                  </label>
                  <Controller
                    name="phoneNumber"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your Phone Number"
                        maxLength={11}
                        disabled={isSubmitting}
                      />
                    )}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="ninNumber"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    NIN Number
                  </label>
                  <Controller
                    name="ninNumber"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your NIN Number"
                        disabled={isSubmitting}
                        maxLength={11}
                      />
                    )}
                  />
                  {errors.ninNumber && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.ninNumber.message}
                    </p>
                  )}
                </div>
              </>
            )}
            <div className="flex justify-between">
              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  type="button"
                >
                  Previous
                </button>
              )}
              {step < steps.length - 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Next
                </button>
              )}
            </div>
            {step === steps.length - 1 && (
              <div className="mt-4">
                <button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className={`w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${
                    !isValid
                      ? "cursor-not-allowed opacity-80"
                      : "cursor-pointer"
                  }`}
                >
                  Sign Up
                </button>
              </div>
            )}
          </form>
          <div className="mt-4 text-sm font-light text-gray-500 dark:text-gray-400">
            Step {step + 1} of {steps.length}
          </div>
          {step === steps.length - 1 && (
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign In
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
