import React from 'react';

const PostStutus = () => {
    return (
      <div className='mt-8'>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body ">
            <div className="flex flex-row p-3">
              <div className="mr-2">
                <div className="avatar">
                  <div className="w-20 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
              </div>
              <div className="w-full h-full">
                <input
                  type="text"
                  placeholder="share your feelings"
                  className="input w-full h-20 input-bordered input-secondary"
                />
              </div>
            </div>

                <div className="flex w-full items-center justify-center bg-grey-lighter">
                <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-blue-500">
                    <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="mt-2 text-base leading-normal">Select a file</span>
                    <input type="file" className='hidden' />
                </label>
            </div>
            
          </div>
          <button className='btn w-[90%] mx-auto mb-8'>Post</button>
        </div>
      </div>
    );
};

export default PostStutus;