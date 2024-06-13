import styles from "./Auth.module.css";

const Auth = () => {
  return (
    <div className={`${styles["auth"]}`}>
      <div className={`${styles["auth-form"]} `}>
        {/* <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"> */}
        <form className="space-y-6" method="POST">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                required
                className="block w-full rounded-md bg-transparent border border-lime-300 
                    py-2 px-4 focus:outline-none 
                   focus:border-lime-500"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-bold leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-md bg-transparent border border-lime-300 
                    py-2 px-4 focus:outline-none 
                   focus:border-lime-500"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-lime-300 bg-custom-blue transition-all px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:text-black duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>

          <div>
            <p className="mt-8 font-bold">Don't have an account?</p>
            <button
              type="submit"
              className="mt-2 flex w-full justify-center rounded-md border border-lime-300 bg-custom-blue transition-all px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:text-black duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Auth;
