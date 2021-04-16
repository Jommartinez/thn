import Room from './Room'
const Rooms = (props) => {
	const {
		rooms: { result },
		summaryHotel,
		setSummaryHotel,
	} = props

	return (
		<section className="rooms">
			{result &&
				result.map((room) => (
					<Room
						key={room.id}
						room={room}
						summaryHotel={summaryHotel}
						setSummaryHotel={setSummaryHotel}
					/>
				))}
		</section>
	)
}
export default Rooms
