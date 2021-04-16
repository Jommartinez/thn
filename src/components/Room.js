import { BASE_PATH } from '../utils/constans'
const Room = (props) => {
	const { room, summaryHotel, setSummaryHotel } = props
	const handleClick = () => {
		setSummaryHotel({
			...summaryHotel,
			id: room.id,
			name: room.name,
			totalPrice: room.price,
		})
	}
	const classes = summaryHotel.id === room.id ? 'active' : ''
	return (
		<article className={`room ${classes}`} onClick={() => handleClick()}>
			<div className="content">
				<img src={`${BASE_PATH}/${room.image}`} alt={room.name} />
				<div className="data">
					<h3>{room.name}</h3>
					<p>{room.description}</p>
					<p className="size">Size: {room.options[0].size}m2</p>
					<div className="options">
						<div className="options-room">
							<p>
								<img src={`${BASE_PATH}/img/double-bed.svg`} alt={room.name} />
								Beds: {room.options[0].beds}
							</p>
							<p>People: {room.options[0].people}</p>
						</div>
						<h3>€{room.price}</h3>
					</div>
				</div>
			</div>
		</article>
	)
}
export default Room
