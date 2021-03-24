import { useEffect, useState } from "react";
import "./Content.scss";
import Number from "./Number";

function Content() {
	var [data, setData] = useState(null);

	useEffect(() => {
		fetch("/data.json")
			.then((res) => res.json())
			.then((result) => setData(result));
	}, []);

	return (
		<main className="Content">
			<h1 className="Content__title">Ours conferences in numbers</h1>
			<div className="Content__grid">
				{data?.map((item) => (
					<Number key={item.id} title={item.title} number={item.value} />
				))}
			</div>
		</main>
	);
}

export default Content;
