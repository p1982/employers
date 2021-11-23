import React from "react";
import { connect } from "react-redux";
import { RadioInput } from "../input/Radio";
import { onChangeAdd, onChangeRemove } from "../../store/employers/action";
import "../styles.scss";

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeAdd: (id) => dispatch(onChangeAdd(id)),
		onChangeRemove: (id) => dispatch(onChangeRemove(id)),
	}
}

export const Employer = connect(
	null,
	mapDispatchToProps
)((props) => {
	const { employer, onChangeAdd, onChangeRemove } = props
	const id = employer.id
	return (
		<div className="item">
			<p className={employer.isActive ? "active" : ""}>
				{employer.firstName} {employer.lastName}
			</p>
			<RadioInput
				text="active"
				anotherText="not-active"
				name="employer"
				isActive={employer.isActive}
				onChangeAdd={() => onChangeAdd(id)}
				onChangeRemove={() => onChangeRemove(id)}
			/>
		</div>
	)
})
