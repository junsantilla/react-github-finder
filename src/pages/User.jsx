import React from "react";
import { FaCodepen, FaStore, FaUserFriends, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";

function User() {
	const { user, fetchUser, loading } = useContext(GithubContext);

	const params = useParams();

	const {
		name,
		company,
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
		type,
	} = user;

	useEffect(() => {
		fetchUser(params.login);
	}, []);

	if (loading) {
		return <p>Loading</p>;
	}

	return (
		<>
			<div className="w-full mx-auto lg:w-10/12">
				<div className="mb-4">
					<Link to="/" className="btn btn-ghost">
						Back to Search
					</Link>
				</div>
				<div className="grid grid-cols-1 xl:grid-cols-3">
					<div className="custom-card-image mb-6 md:mb-0">
						<div className="shadow-xl card image-full">
							<figure>
								<img src={avatar_url} alt="" />
							</figure>
						</div>
					</div>
					<div className="col-sopan-2 pl-5">
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
					</div>
				</div>
			</div>
		</>
	);
}

export default User;
