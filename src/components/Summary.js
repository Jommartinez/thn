import { STORAGE } from '../utils/constans'

const Summary = (props) => {
	const { summaryHotel, promo } = props
	const handleClick = () => {
		localStorage.setItem(STORAGE, JSON.stringify(summaryHotel))
	}
	const differenceDates =
		new Date(summaryHotel.checkout) - new Date(summaryHotel.checkin)
	const days = Math.ceil(differenceDates / (1000 * 3600 * 24))

	const discount = promo ? promo.discount / 100 : 1
	const priceDiscount =
		summaryHotel.totalPrice - summaryHotel.totalPrice * discount

	const checkin = new Date(summaryHotel.checkin)
	const formatDateCheckin = `${checkin.getDate()}-${
		checkin.getMonth() + 1
	}-${checkin.getFullYear()}`

	const checkout = new Date(summaryHotel.checkout)
	const formatDateCheckout = `${checkout.getDate()}-${
		checkout.getMonth() + 1
	}-${checkout.getFullYear()}`

	return (
		<section className="summary">
			<div className="content">
				<div className="info">
					<h2>Reservation Summary</h2>
					<h3>{summaryHotel.name}</h3>
					<div className="info-check">
						<p>
							<b>Check in</b> <br />
							From 15.00h
						</p>
						<p>
							<b>Check out</b> <br />
							Before 12.00h
						</p>
					</div>
					<div className="info-date">
						<h4>Reservation date</h4>
						<p>{`From ${formatDateCheckin} to ${formatDateCheckout}`}</p>
					</div>

					<h4>People</h4>
					<p>{`${
						summaryHotel.people.adults
							? `${summaryHotel.people.adults} Adults`
							: ''
					}`}</p>
					<p>{`${
						summaryHotel.people.children
							? `${summaryHotel.people.children} Children`
							: ''
					} `}</p>
				</div>
				<div className="total">
					<div className="price">
						<h3>Total</h3>
						<h3>
							€
							{summaryHotel.totalPrice
								? days
									? promo.status === true
										? priceDiscount * days
										: summaryHotel.totalPrice * days
									: ''
								: ''}
						</h3>
					</div>
					<button onClick={handleClick}>Save</button>
				</div>
			</div>
		</section>
	)
}
export default Summary
