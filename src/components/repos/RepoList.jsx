import React from "react";
import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import RepoItem from "./RepoItem";

function RepoList() {
	const { repos, loading } = useContext(GithubContext);
	if (!loading) {
		return (
			<div className="round-lg shadow-lg card bg-base-100">
				<div className="card-body">
					<h2 className="text-3xl my-4 font-bold card-title">
						Top Repositories
					</h2>
					{repos?.map((repo) => (
						<RepoItem key={repo.id} repo={repo} />
					))}
				</div>
			</div>
		);
	}
}

export default RepoList;
