import React from "react";
import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import RepoItem from "./RepoItem";

function RepoList() {
	const { repos, loading } = useContext(GithubContext);
	if (!loading) {
		return (
			<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
				{repos?.map((repo) => (
					<RepoItem key={repo.id} repo={repo} />
				))}
			</div>
		);
	}
}

export default RepoList;
