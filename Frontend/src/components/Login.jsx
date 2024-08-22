import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close the modal button */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('my_modal_3').close()}
            >
              ✕
            </button>

            <div className="max-w-lg mx-auto bg-white rounded-md p-12 mt-6 relative">
              <div>
                <h1 className="text-2xl font-semibold mb-2 text-center">Login</h1>
                <p className="text-gray-600 mb-4 text-center">to Discover Wisdom</p>

                <input
                  type="email"
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
                  className="w-full bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"
                >
                  Submit
                </button>
              </div>

              <p className="text-center m-2">
                Don't have an account?
                <Link to="/signup" className="text-pink-500 hover:underline m-2">
                  Register Now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
