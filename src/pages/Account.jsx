import React, { Fragment } from 'react';
import SavedShows from '../components/SavedShows';

const Account = () => {
  return (
    <Fragment>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51e53f54-0d9f-40ec-9e05-c030def06ac9/07389c6e-9d7a-47fb-959a-596861e37d7a/CA-en-20230515-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />{' '}
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </Fragment>
  );
};

export default Account;
