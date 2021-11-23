import React from "react";
import PropTypes from "prop-types";

export const NoBirthday = (props) => {
	const { text } = props
	return (
		<div>
			<p>{text}</p>
		</div>
	)
}

NoBirthday.propTypes = {
	text: PropTypes.string,
}