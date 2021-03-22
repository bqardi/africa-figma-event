import "./Conference.scss";
import Register from "./Register";

function Conference() {
	return (
		<article className="Conference">
			<h1 className="Conference__title">
				<span className="Conference__upperCase">Figma Africa</span>{" "}
				International Conference
			</h1>
			<p>December 6 - 8, 2018</p>
			<p>
				Kigali Conference Centre
				<br />
				Kimihurura Roundabout
			</p>
			<Register />
			<p className="Conference__note">*Limited seats available</p>
		</article>
	);
}

export default Conference;
