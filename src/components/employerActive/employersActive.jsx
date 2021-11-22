import React from "react"
import { Birthday } from "../birthday/Birthday"
import { NoBirthday } from "../birthday/NoBirthday"

export const EmployersActive = (props) => {
	const { month, employersActiveList } = props
	return (
		<div className="employersActiveList">
			<h4>{month}</h4>
			{employersActiveList.length ? (
				employersActiveList.map((employer) => (
					<Birthday employer={employer} month={month} />
				))
			) : (
				<NoBirthday text="List is empty" />
			)}
		</div>
	)
}
