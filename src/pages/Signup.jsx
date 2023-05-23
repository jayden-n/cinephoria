import React, { Fragment } from 'react';

const Signup = () => {
  return (
    <Fragment>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51e53f54-0d9f-40ec-9e05-c030def06ac9/07389c6e-9d7a-47fb-959a-596861e37d7a/CA-en-20230515-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[500px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form>
                <input type="email" />
                <input type="password" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
