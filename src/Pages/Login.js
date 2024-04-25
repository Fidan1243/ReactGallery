import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({setToken,token}) {
  let [eErr,setEerr] = useState("");
  let [pErr,setPerr] = useState("");
  const navigation = useNavigate();
  const SubmitHandle = async (e) => {
    e.preventDefault();
    console.log("hiii")
    const fetchData = await axios.post(
      "http://localhost:5000/users/signin",
      {
        email: e.target.email.value,
        password: e.target.password.value,
      },
      {
        headers: {
          "Contetnt-Type": "application/json",
        },
      }
    ).then((res)=>{
      setToken(res.data.token);
      navigation('/')
    }).catch((err)=>{
      setEerr(err.response.data.email !== undefined ? err.response.data.email.msg : "");
        setPerr(err.response.data.password !== undefined ? err.response.data.password.msg : "");
    });
  };

  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={SubmitHandle}
          class="space-y-6"
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
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          Don't have any account?
          <Link
            to={"/signup"}
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
