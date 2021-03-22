import Conference from "./Conference";
import "./Header.scss";
import Register from "./Register";

function Header() {
	return (
		<header className="Header">
			<img className="Header__logo" src="../images/logo.svg" alt="Logo" />
			<Conference />
			<div className="Header__register">
				<Register />
			</div>
		</header>
	);
}

export default Header;
