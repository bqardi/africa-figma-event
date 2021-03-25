import { useEffect, useState } from "react";
import "./Number.scss";

const DURATION = 1200;

function Number({ title, number }) {
	var [num, setNum] = useState(0);

	useEffect(() => {
		if (num < number) {
			var timeout = setTimeout(() => {
				setNum(num + 1);
			}, DURATION / number);
		}
		return () => clearTimeout(timeout);
	}, [num, number]);

	return (
		<article className="Number">
			<h2 className="Number__title">{title}</h2>
			<p className="Number__number">{num > 750 ? "750+" : num}</p>
		</article>
	);
}

export default Number;
