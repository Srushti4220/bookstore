import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px] bg-white rounded-md border border-gray-300 shadow-lg p-12 relative">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Close Button */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>
          
          <h3 className="text-2xl font-semibold mb-2 text-center p-3">Contact Us</h3>
          <p className="mb-4 font-light text-left text-gray-500 sm:text-xl">
            Got an issue? Want to send feedback? Need details about our Courses? Let us know.
          </p>
          
          {/* Input Fields */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
            {...register("name", { required: "Full Name is required" })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <textarea
  placeholder="Type your Message"
  className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2 resize-none"
  {...register("msg", { required: "Message is required" })}
/>
          {errors.msg && <p className="text-red-500">{errors.msg.message}</p>}

          <button
            type="submit"
            className="w-full bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
