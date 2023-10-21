import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/AuthProvder/AuthProvider";
import swal from "sweetalert";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const {userLogin} = useContext(AuthContext);
  const [error, setError]  = useState('');
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  console.log(location);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    if(password.length <6) {
      setError('⚠️password must be at least 6 characters');
      return
    }
    userLogin(email, password)
    .then(() =>  {
      swal('Success!', 'Logged in successfully', 'success');
      setError('');
      navigate(location.state || '/')
    })
    .catch(err =>  {
      console.log(err.message);
      setError('⚠️Invalid email or password')
    })
  }
  return (
    <div>
      <html className="h-full">
        <body className=" flex h-full items-center py-16">
          <main className="w-full max-w-md mx-auto p-6">
            <div className="mt-7  border  rounded-xl shadow-sm ">
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <h1 className="block text-2xl font-bold">Log in</h1>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account yet?
                    <Link to={'/register'}  className="text-blue-600 decoration-2 hover:underline font-medium">Register here</Link>
                   
                  </p>
                </div>

                <div className="mt-5">
                  <SocialLogin/>

                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm mb-2 ">
                          Email address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 "
                            required
                            aria-describedby="email-error"
                            placeholder="Email"
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
                        <div className="flex justify-between items-center">
                          <label
                            htmlFor="password"
                            className="block text-sm mb-2 "
                          >
                            Password
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            type={showPass ? "text" : "password"}
                            id="password"
                            name="password"
                            className="py-3 px-4 block border w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:text-gray-400"
                            required
                            aria-describedby="password-error"
                            placeholder="Password"
                          />
                          <p className="absolute cursor-pointer text-xl right-2 top-1/3" onClick={()=> setShowPass(!showPass)}>{showPass ? <AiFillEyeInvisible/>: <AiFillEye/>}</p>
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
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </body>
      </html>
    </div>
  );
};

export default Login;
