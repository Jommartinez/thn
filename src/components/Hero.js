import Filter from './Filter'

const Hero = (props) => {
	const { summaryHotel, setSummaryHotel } = props
	return (
		<section className="hero">
			<Filter summaryHotel={summaryHotel} setSummaryHotel={setSummaryHotel} />
		</section>
	)
}
export default Hero
