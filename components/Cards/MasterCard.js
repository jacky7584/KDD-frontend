import React from 'react';

export default function MasterCard({ name, subName, avatar, github, email }) {
  let avatarUrl;
  if (avatar.data.attributes['format']) {
    if (avatar.data.attributes.format['small']) {
      avatarUrl = avatar.data.attributes.formats.small.url;
    }
  } else {
    avatarUrl = avatar.data.attributes.url;
  }
  return (
    <>
      <div className="p-3 rounded-lg flex flex-row sm:flex-col items-center sm:content-center border hover:shadow-lg ease-linear transition-all duration-150">
        <div className="flex items-center justify-center">
          <picture className="max-w-[100px] sm:max-w-[150px] aspect-square m-2">
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}${avatarUrl}`}
              alt={name}
              loading="lazy"
              className="w-full h-full rounded-full shadow-lg object-cover"
            ></img>
          </picture>
        </div>
        <div className="mx-2">
          <div className="my-2 sm:text-center">
            <div className="text-xl md:text-2xl font-medium">{name}</div>
            <div className="text-md md:text-lg font-normal">{subName}</div>
          </div>

          {github || email ? (
            <div className="my-2 flex flex-row text-md sm:place-content-center">
              {github ? (
                <a
                  className="mr-3 text-md lg:text-lg"
                  href={`https://github.com/${github}`}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  <i className="bi bi-github text-slate-600 hover:text-slate-400"></i>
                </a>
              ) : null}
              {email ? (
                <a className="text-md lg:text-lg" href={`mailto:${email}`}>
                  <i className="bi bi-envelope text-slate-600 hover:text-slate-400"></i>
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
