import React from "react";
import PropTypes from "prop-types";

export const Birthday = (props) => {
	const { employer, month } = props
	const date = new Date(employer.dob)
	const day = date.getDate()
	const year = date.getFullYear()
	return (
		<div>
			<p>
				{employer.firstName} {employer.lastName} - {day} {month}, {year} year
			</p>
		</div>
	)
}

Birthday.propTypes = {
	month: PropTypes.string,
	employer: PropTypes.object,
}
