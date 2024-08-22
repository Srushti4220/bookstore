import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className=" w-[600px]  bg-white rounded-md p-12">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <div className="max-w-lg mx-auto bg-white rounded-md p-12 mt-6  relative">
              <h3 className="text-2xl font-semibold mb-2 text-center p-3">Register Now</h3>
              <div>
                
                
              <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-3 py-2 border rounded-md mb-2"
                    {...register("name", { required: "Full Name is required" })}
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
    

                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full px-3 py-2 border rounded-md mb-2"
                    {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-3 py-2 border rounded-md mb-2"
                    {...register("password", { required: "Password is required" })}
                    />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
    

                  <button
                    type="submit"
                    className="w-full bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 "
                  >
                    Submit
                  </button>
               
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                
                <p className="text-xl">
                  Have an account?{" "}
                  <button
                    className="text-pink-500 hover:underline m-2"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
