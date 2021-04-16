import { BASE_PATH } from '../utils/constans'

const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/">Rooms</a>
					</li>
					<li>
						<a href="/">Restaurant</a>
					</li>
				</ul>
			</nav>
			<div className="logo">
				<img src={`${BASE_PATH}/img/logo.png`} alt="Los Cocos" />
			</div>
			<nav>
				<ul>
					<li>
						<a href="/">Weedings</a>
					</li>
					<li>
						<a href="/">Membership</a>
					</li>
					<li>
						<a href="/">Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
export default Header
