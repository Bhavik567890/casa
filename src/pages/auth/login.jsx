import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LogInPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    reset,

    formState: { errors, isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data, 28);
    reset();
  };

  const isAuthenticated = false;

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/create/property");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <Link
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 m-auto"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
          </Link>
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Email Address
              </label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    disabled={isSubmitting}
                    type="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
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
                Your Password
              </label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    disabled={isSubmitting}
                    type="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                )}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex items-center justify-end">
              <Link
                to="/forgot-password"
                className="text-sm  font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className={`w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover-bg-primary-700 dark:focus:ring-primary-800 ${
                !isValid ? "cursor-not-allowed opacity-80" : "cursor-pointer"
              }`}
            >
              Sign In
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <Link
                to="/"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
