import React from "react"
import { connect } from "react-redux"
import { Employers } from "./employers/Employers"
import { config } from "./config/config"
import { configMonth } from "./config/configMonth.js"
import { EmployersActive } from "./employerActive/employersActive"
import "./styles.scss"
import { onChangeAdd, onChangeRemove } from "../store/employers/action"

const mapStateToProps = (store) => {
	return {
		employers: store.employers.employers,
		isLoading: store.employers.isEmployersLoading,
		error: store.employers.error,
		employersActive: store.employers.employersActive,
		active: store.employers.active,
		notActive: store.employers.notActive,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeAdd: (id) => dispatch(onChangeAdd(id)),
		onChangeRemove: (id) => dispatch(onChangeRemove(id)),
	}
}

export const Home = connect(
	mapStateToProps,
	mapDispatchToProps
)((props) => {
	const date = new Date()
	const currentMonth = date.getMonth()
	const orderedMonths = [
		...configMonth.slice(currentMonth),
		...configMonth.slice(0, currentMonth),
	]
	const { employers, employersActive } = props
	return (
		<div>
			<div className="container">
				<div className="column-left">
					<h2>Employees</h2>
					<div className="wrapper">
						{config.map((letter) => (
							<Employers
								employers={employers
									.filter((employer) => employer.firstName.includes(letter))
									.sort((a, b) => (a.firstName > b.firstName ? 1 : -1))}
								letter={letter}
								onchangeAdd={() => onChangeAdd()}
								onChangeRemove={() => onChangeRemove()}
							/>
						))}
					</div>
				</div>
				<div className="column-right">
					<h2>Employees birthday</h2>
					<div className="employersBirthday">
						{employersActive.length ? (
							orderedMonths.map((month, index) => (
								<EmployersActive
									employersActiveList={employersActive
										.filter((employer) => {
											return new Date(employer.dob).getMonth() === index
										})
										.sort((a, b) => (a.dob > b.dob ? 1 : -1))}
									month={month}
								/>
							))
						) : (
							<p>Employees List is empty</p>
						)}
					</div>
				</div>
			</div>
		</div>
	)
})
