import React from "react"

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
