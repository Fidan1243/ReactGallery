import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register({setToken}) {
  let [eErr, setEerr] = useState("");
  let [pErr, setPerr] = useState("");
  let [cpErr, setCperr] = useState("");
  let [nErr, setNerr] = useState("");
  const navigation = useNavigate();
  const SubmitHandle = async (e) => {
    e.preventDefault();
    console.log("hiii");
    const fetchData = await axios
      .post(
        "http://localhost:5000/users/signup",
        {
          email: e.target.email.value,
          name: e.target.name.value,
          password: e.target.password.value,
          confirmPassword: e.target.cpassword.value,
        },
        {
          headers: {
            "Contetnt-Type": "application/json",
          },
        }
      )
      .then((res) => {
        navigation({
          pathname: "/signin",
          data: {
            setToken,
          },
        });
      })
      .catch((err) => {
        setEerr(
          err.response.data.email !== undefined
            ? err.response.data.email.msg
            : ""
        );
        setPerr(
          err.response.data.password !== undefined
            ? err.response.data.password.msg
            : ""
        );
        setCperr(
          err.response.data.confirmPassword !== undefined
            ? err.response.data.confirmPassword.msg
            : ""
        );
        setNerr(
          err.response.data.name !== undefined ? err.response.data.name.msg : ""
        );
      });
    //console.log(fetchData.data.token)
  };

  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register to site account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          class="space-y-6"
          onSubmit={SubmitHandle}
          action="#"
          method="POST"
        >
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-rose-900"
            >
              {eErr}
            </label>
          </div>
          <div>
            <label
              for="name"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Fullname
            </label>
            <div class="mt-2">
              <input
                id="name"
                name="text"
                type="name"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <label
              for="name"
              class="block text-sm font-medium leading-6 text-rose-900"
            >
              {nErr}
            </label>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-rose-900"
            >
              {pErr}
            </label>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label
                for="cpassword"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
            </div>
            <div class="mt-2">
              <input
                id="cpassword"
                name="cpassword"
                type="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <label
              for="cpassword"
              class="block text-sm font-medium leading-6 text-rose-900"
            >
              {cpErr}
            </label>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          Already have an account?
          <Link
            to={"/signin"}
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
