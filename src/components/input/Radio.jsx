import React from "react";
import PropTypes from "prop-types";
import "../styles.scss";

export const RadioInput = (props) => {
	const { onChangeAdd, onChangeRemove, name, text, anotherText, id, isActive } =
		props
	return (
		<form className="form">
			<p className="text">
				<input
					onChange={() => onChangeRemove(id)}
					type="radio"
					value="not-active"
					name={name}
					checked={!isActive}
				/>
				{anotherText}
			</p>
			<p className="text">
				<input
					onChange={() => onChangeAdd(id)}
					type="radio"
					value="active"
					name={name}
					checked={isActive}
				/>
				{text}
			</p>
		</form>
	)
}

RadioInput.propTypes = {
	text: PropTypes.string,
	onchangeAdd: PropTypes.func,
	onChangeRemove: PropTypes.func,
	name: PropTypes.string,
	anotherText: PropTypes.string,
	id: PropTypes.string,
	isActive: PropTypes.bool,
}
