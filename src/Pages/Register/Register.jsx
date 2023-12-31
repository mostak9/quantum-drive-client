import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/AuthProvder/AuthProvider";
import swal from "sweetalert";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Register = () => {
  const { createUser, userUpdate } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // const user = {name, photo, email, password};

    if (password.length < 6) {
      setError("⚠️Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("⚠️Password must contain at least one Uppercase character");
      return;
    } else if (!/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(password)) {
      setError(
        "⚠️Password must contain at least one special(@, #, &) character"
      );
      return;
    }
    else if(!/\d/.test(password)) {
      setError('⚠️Password must contain al least one integer');
      return
    }
    createUser(email, password)
      .then(() => {
        userUpdate(name, photo).then().catch();
        swal("Success!", "User created successfully!", "success");
        form.reset();
        setError("");
        navigate("/");
      })
      .catch(() => {
        setError("user already exist");
      });
  };
  return (
    <div>
      <div className="h-full">
        <div className=" flex h-full items-center py-16">
          <main className="w-full max-w-md mx-auto p-6">
            <div className="mt-7 border border-gray-200 rounded-xl shadow-sm dark:border-gray-700">
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <h1 className="block text-2xl font-bold ">Sign up</h1>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Already have an account?
                    <Link
                      to={"/login"}
                      className="text-blue-600 decoration-2 hover:underline font-medium"
                    >
                      Login here
                    </Link>
                  </p>
                </div>

                <div className="mt-5">
                  <SocialLogin />

                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm mb-2">
                          Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="py-3 px-4 block border w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:text-gray-400"
                            required
                            aria-describedby="email-error"
                            placeholder="Type your name"
                          />
                          <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                            <svg
                              className="h-5 w-5 text-red-500"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        </div>
                        <p
                          className="hidden text-xs text-red-600 mt-2"
                          id="email-error"
                        >
                          Please include a valid email address so we can get
                          back to you
                        </p>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm mb-2">
                          Photo link
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="photo"
                            name="photo"
                            className="py-3 px-4 block border w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:text-gray-400"
                            required
                            aria-describedby="email-error"
                            placeholder="Profile picture link"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm mb-2">
                          Email address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="py-3 px-4 block border w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:text-gray-400"
                            required
                            aria-describedby="email-error"
                            placeholder="Email"
                          />
                        </div>
                        <p
                          className="hidden text-xs text-red-600 mt-2"
                          id="email-error"
                        >
                          Please include a valid email address so we can get
                          back to you
                        </p>
                      </div>

                      <div>
                        <label
                          htmlFor="password"
                          className="block text-sm mb-2"
                        >
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPass ? "text" : "password"}
                            id="password"
                            name="password"
                            className="relative py-3 px-4 border block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:text-gray-400"
                            required
                            aria-describedby="password-error"
                            placeholder="Password"
                          />
                          <p
                            className="absolute cursor-pointer text-xl right-2 top-1/3"
                            onClick={() => setShowPass(!showPass)}
                          >
                            {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
                          </p>
                        </div>
                        <p
                          className="italic text-xs text-red-600 mt-2"
                          id="password-error"
                        >
                          {error}
                        </p>
                      </div>

                      <button
                        type="submit"
                        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Register;
