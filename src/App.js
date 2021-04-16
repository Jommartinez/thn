import { useState, useEffect } from 'react'
import './assets/styles/index.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Rooms from './components/Rooms'
import Summary from './components/Summary'
import useFetch from './hooks/useFetch'
import { UrlApi, STORAGE, BASE_PATH } from './utils/constans'

function App() {
	const rooms = useFetch(UrlApi)
	const [promo, setPromo] = useState({
		status: false,
		discount: 0,
	})
	const tomorrow = new Date()
	tomorrow.setDate(new Date().getDate() + 1)
	const [summaryHotel, setSummaryHotel] = useState({
		id: null,
		name: null,
		checkin: new Date(),
		checkout: tomorrow,
		totalPrice: null,
		people: {
			children: 0,
			adults: 1,
		},
	})
	useEffect(() => {
		getSummaryHotel()
		getPromoCode()
	}, [])

	const getPromoCode = () => {
		const queryString = window.location.search
		const urlParams = new URLSearchParams(queryString)
		const url_code = urlParams.get('promo_code')
		if (url_code) {
			setPromo({
				status: true,
				discount: url_code,
			})
		} else {
			setPromo({
				status: false,
				discount: 0,
			})
		}
	}

	const getSummaryHotel = () => {
		const storageHotel = localStorage.getItem(STORAGE)

		if (storageHotel) {
			setSummaryHotel(JSON.parse(storageHotel))
		}
	}
	return (
		<>
			<Header />
			<Hero summaryHotel={summaryHotel} setSummaryHotel={setSummaryHotel} />
			<section className="container steps">
				<h3>Rooms & Rates</h3>
				<p>Plan your perfect stay at our hotel</p>
				<img src={`${BASE_PATH}/img/los-cocos-1.png`} alt="steps" />
			</section>
			<section className="container">
				<Rooms
					rooms={rooms}
					summaryHotel={summaryHotel}
					setSummaryHotel={setSummaryHotel}
				/>
				<Summary summaryHotel={summaryHotel} promo={promo} />
			</section>
			<Footer />
		</>
	)
}

export default App
