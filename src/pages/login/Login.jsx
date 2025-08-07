import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

// validationSchema.js
import * as Yup from "yup";

import axios from "axios";

import { Formik, Form, Field, ErrorMessage } from "formik";

const loginValidationSchema = Yup.object().shape({
  emailId: Yup.string()
    .email("Invalid email address") // must be valid email
    .required("Email is required"), // required field

  password: Yup.string()
    .min(6, "Password must be at least 6 characters") // min length
    .required("Password is required"), // required field
});

export default function Login() {
  const navigate = useNavigate();
  const initialValues = {
    emailId: "",
    password: "",
  };

  const authToken = localStorage?.getItem("auth");
  useEffect(() => {
    console.log();
    if (authToken) {
      //   return ;
      navigate("/");
    }
  }, [authToken]);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080//api/auth/login",
        values
      );

      if (response.status == 200) {
        const authToken = response.data.data.accessToken;
        localStorage.setItem("auth", authToken);
        resetForm();
      }

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className=" h-screen bg-center flex  justify-center items-center bg-[url(https://images.unsplash.com/photo-1521651000640-f7b2cb02ffb1)] bg-cover">
      <div className="flex flex-col gap-4">
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="rounded-lg min-w-[540px] bg-white opacity-100 shadow-lg border bg-card text-card-foreground px-8 py-12 mx-auto w-full max-w-md">
                <div className="flex flex-col space-y-1.5 items-center">
                  <h3 className="font-semibold tracking-tight text-xl">
                    Log in with your email
                  </h3>
                  {/* <p className="text-sm text-zinc-600">
                      Enter your information to login
                    </p> */}
                </div>
                <div className="mt-10">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Email
                      </label>

                      <Field
                        className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        //   id="emailId"
                        placeholder="example@gmail.com"
                        type="email"
                        name="emailId"
                      />
                      <ErrorMessage
                        name="emailId"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex justify-between">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="password"
                        >
                          Password
                        </label>

                        <a href="#" className="text-sm underline">
                          Forgot password
                        </a>
                      </div>
                      <Field
                        className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="password"
                        placeholder="Enter your password"
                        type="password"
                        name="password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </div>
                    <button
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2 w-full"
                      type="submit"
                    >
                      Log in
                    </button>

                    <div className="mx-auto flex gap-1 text-sm">
                      <p>Don't have an account yet?</p>
                      <a href="/" className="underline">
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
