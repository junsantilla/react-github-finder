import React from "react";
import { FaCodepen, FaStore, FaUserFriends, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import RepoList from "../components/repos/RepoList";

function User() {
	const { user, fetchUser, fetchRepos, loading } = useContext(GithubContext);

	const params = useParams();

	const {
		avatar_url,
		location,
		bio,
		blog,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
		twitter_username,
		type,
	} = user;

	useEffect(() => {
		fetchUser(params.login);
		fetchRepos(params.login);
	}, []);

	if (loading) {
		return <Spinner />;
	}

	return (
		<>
			<div className="w-full mx-auto lg:w-10/12">
				<div className="mb-4">
					<Link to="/" className="btn btn-ghost ">
						Back to Search
					</Link>
				</div>
				<div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 mb-8 md:gap-8">
					<div className="custom-card-image mb-6 md:mb-0">
						<div className="shadow-xl image-full">
							<figure>
								<img
									src={avatar_url}
									alt="profile image"
									className="rounded-lg"
								/>
							</figure>
						</div>
					</div>
					<div className="col-span-3 pl-5">
						<div className="mb-6">
							<h1 className="text-3xl card-title">
								{login}
								<div className="ml-2 mr-1 badge badge-success">
									{type}
								</div>
								{hireable && (
									<div className="mx-1 badge badge-info">
										Hireable
									</div>
								)}
							</h1>
							<p className="mt-2">{bio}</p>
							<div className="mt-4 card-actions">
								<a
									href={html_url}
									target="_blank"
									rel="noreffer"
									className="btn btn-outline"
								>
									Visit Github Profile
								</a>
							</div>
						</div>
						<div className="w-full rounded-lg shadow-md bg-base-100 stats">
							{location && (
								<div className="stat">
									<div className="stat-title text-md">
										Location
									</div>
									<div className="stat-value text-lg">
										{location}
									</div>
								</div>
							)}
							{blog && (
								<div className="stat">
									<div className="stat-title text-md">
										Website
									</div>
									<div className="stat-value text-lg">
										<a href={blog} target="_blank">
											{blog}
										</a>
									</div>
								</div>
							)}
							{twitter_username && (
								<div className="stat">
									<div className="stat-title text-md">
										Twitter
									</div>
									<div className="stat-value text-lg">
										{twitter_username}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
					<div className="stat">
						<div className="stat-figure text-secondary">
							<FaUser className="text-3xl md:text-5xl" />
						</div>
						<div className="stat-title pr-5">Followers</div>
						<div className="stat-value pr-5 text-3xl md:text-4xl">
							{followers}
						</div>
					</div>
					<div className="stat">
						<div className="stat-figure text-secondary">
							<FaUserFriends className="text-3xl md:text-5xl" />
						</div>
						<div className="stat-title pr-5">Following</div>
						<div className="stat-value pr-5 text-3xl md:text-4xl">
							{following}
						</div>
					</div>
					<div className="stat">
						<div className="stat-figure text-secondary">
							<FaCodepen className="text-3xl md:text-5xl" />
						</div>
						<div className="stat-title pr-5">Public Repos</div>
						<div className="stat-value pr-5 text-3xl md:text-4xl">
							{public_repos}
						</div>
					</div>
					<div className="stat">
						<div className="stat-figure text-secondary">
							<FaStore className="text-3xl md:text-5xl" />
						</div>
						<div className="stat-title pr-5">Public Gists</div>
						<div className="stat-value pr-5 text-3xl md:text-4xl">
							{public_gists}
						</div>
					</div>
				</div>

				<RepoList />
			</div>
		</>
	);
}

export default User;
