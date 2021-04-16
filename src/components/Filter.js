import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Filter = (props) => {
	const { summaryHotel, setSummaryHotel } = props
	const tomorrow = new Date()
	tomorrow.setDate(new Date().getDate() + 1)
	const [startDate, setStartDate] = useState(new Date())
	const [endDate, setEndDate] = useState(tomorrow)
	const [adultsSelect, setAdultsSelect] = useState()
	const [childrenSelect, setChildrenSelect] = useState()

	const handleClick = () => {
		setSummaryHotel({
			...summaryHotel,
			checkin: startDate,
			checkout: endDate,
			people: {
				children: childrenSelect,
				adults: adultsSelect,
			},
		})
	}
	const handleChangeAdults = (e) => {
		setAdultsSelect(e.target.value)
	}
	const handleChangeChildren = (e) => {
		setChildrenSelect(e.target.value)
	}
	return (
		<div className="filter">
			<DatePicker
				selected={startDate}
				onChange={(date) => setStartDate(date)}
				selectsStart
				startDate={startDate}
				endDate={endDate}
				minDate={new Date()}
			/>
			<DatePicker
				selected={endDate}
				onChange={(date) => setEndDate(date)}
				selectsEnd
				startDate={startDate}
				endDate={endDate}
				minDate={startDate}
			/>
			<select onChange={(e) => handleChangeAdults(e)}>
				<option value="1">Adults: 1</option>
				<option value="2">Adults: 2</option>
				<option value="3">Adults: 3</option>
				<option value="4">Adults: 4</option>
				<option value="5">Adults: 5</option>
				<option value="6">Adults: 6</option>
			</select>
			<select onChange={(e) => handleChangeChildren(e)}>
				<option value="2">Children: 0</option>
				<option value="2">Children: 1</option>
				<option value="2">Children: 2</option>
				<option value="3">Children: 3</option>
				<option value="4">Children: 4</option>
				<option value="5">Children: 5</option>
				<option value="6">Children: 6</option>
			</select>
			<button className="modify" onClick={handleClick}>
				Modify
			</button>
		</div>
	)
}
export default Filter
