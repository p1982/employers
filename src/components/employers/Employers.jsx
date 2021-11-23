import React from "react";
import PropTypes from "prop-types";
import { Employer } from "../employer/employer";
import { EmployerNone } from "../employer/EmployerNone";
import "../styles.scss";

export const Employers = (props) => {
	const { employers, letter } = props
	return (
		<div className="column">
			<h4>{letter}</h4>
			{employers.length ? (
				employers.map((employer) => (
					<div key={employer.id}>
						<Employer employer={employer} letter={letter} />
					</div>
				))
			) : (
				<EmployerNone text="No Employees" />
			)}
		</div>
	)
}

Employers.propTypes = {
	leter: PropTypes.string,
	employers: PropTypes.array,
}
