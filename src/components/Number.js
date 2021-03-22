import "./Number.scss";

function Number({ title, number }) {
	return (
		<article className="Number">
			<h2 className="Number__title">{title}</h2>
			<p className="Number__number">{number > 750 ? "750+" : number}</p>
		</article>
	);
}

export default Number;
