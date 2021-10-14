import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import arr from "./output";

function App() {
	const [slice, setSlice] = useState([""]);

	const shuffle = () => {
		let _slice = arr.sort(() => 0.5 - Math.random());
		setSlice(_slice.slice(0, 10));
	};

	return (
		<div className="App">
			<div>
				<button onClick={shuffle}>wygeneruj losowe 10 słów</button>
			</div>
			<div>
				{slice.map((item, i) => (
					<p key={{ i }}>{item}</p>
				))}
			</div>
		</div>
	);
}

export default App;
