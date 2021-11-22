import React from "react"
import PropTypes from "prop-types"
import "../styles.scss"

export const EmployerNone = (props) => {
	const { text } = props
	return (
		<div className="item">
			<p className="text">{text}</p>
		</div>
	)
}

EmployerNone.propTypes = {
	text: PropTypes.string,
}
