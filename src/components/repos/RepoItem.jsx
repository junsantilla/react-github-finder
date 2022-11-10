import React from "react";
import PropTypes from "prop-types";

function RepoItem({ repo: { name, id } }) {
	return <div>{name}</div>;
}

RepoItem.propTypes = {
	repo: PropTypes.object.isRequired,
};

export default RepoItem;
