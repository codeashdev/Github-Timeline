import React, { useEffect, useContext } from "react";

import {
  FaCodepen, FaStore, FaUserFriends, FaUsers,
} from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import RepoList from "../components/repos/RepoList";
import GithubContext from "../context/github/GithubContext";
import { getUserAndRepos } from "../context/github/GithubActions";

const User = () => {
  const {
    user, loading, repos, dispatch,
  } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login);
      dispatch({ type: "GET_USER_AND_REPOS", payload: userData });
    };

    getUserData();
  }, [dispatch, params.login]);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }
  // check for valid url to users website
  const websiteUrl = blog?.startsWith("http") ? blog : `https://${blog}`;

  return (
    <div className="w-full mx-auto lg:w-10/12">
      <div className="mb-4">
        <Link to="/" className="btn btn-ghost">
          Back To Search
        </Link>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">

        <div className="custom-card-image mb-6 md:mb-0">
          <figure>
            <img src={avatar_url} alt="UserImage" className="rounded-full " />
          </figure>
        </div>

        <div className="col-span-2">
          <div className="mb-6">
            <h1 className="text-3xl card-title">
              {name}
              <div className="ml-2 mr-1 badge bg-[#161B22]">{type}</div>
              {hireable && (
              <div className="mx-1 badge bg-[#161B22]">Hireable</div>
              )}
            </h1>
            <p>{bio}</p>
            <div className="mt-4 card-actions">
              <a
                href={html_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                Github Profile
              </a>
            </div>
          </div>

          <div className="w-full rounded-lg shadow-md bg-base-100 stats">
            {location && (
            <div className="stat">
              <div className="stat-title text-md">Location</div>
              <div className="text-lg stat-value">{location}</div>
            </div>
            )}
            {blog && (
            <div className="stat">
              <div className="stat-title text-md">Website</div>
              <div className="text-lg stat-value">
                <a href={websiteUrl} target="_blank" rel="noreferrer">
                  {websiteUrl}
                </a>
              </div>
            </div>
            )}
            {twitter_username && (
            <div className="stat">
              <div className="stat-title text-md">Twitter</div>
              <div className="text-lg stat-value">
                <a
                  href={`https://twitter.com/${twitter_username}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {twitter_username}
                </a>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="stat">
            <div className="stat-figure text-[#161B22]">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-[#161B22]">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {following}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-[#161B22]">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Repos</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_repos}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-[#161B22]">
              <FaStore className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Gists</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_gists}
            </div>
          </div>
        </div>
      </div>

      <RepoList repos={repos} />
    </div>
  );
};

export default User;
