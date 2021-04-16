import { BASE_PATH } from '../utils/constans'
const Footer = () => {
	return (
		<footer>
			<div className="footer-left">
				<img src={`${BASE_PATH}/img/los-cocos-iso-footer.png`} alt="logo" />
				<ul>
					<li>Terms and Conditions</li>
					<li>Privacy Policy</li>
					<li>About us</li>
					<li>Partners</li>
				</ul>
			</div>
			<div className="footer-right">
				<p>reservations@loscocosbungaows.com</p>
				<p>Tlf: +34 982 458 720</p>
				<img src={`${BASE_PATH}/img/footer_icons.png`} alt="logo" />
			</div>
		</footer>
	)
}
export default Footer
