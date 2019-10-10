import React, { useEffect, useState } from "react";
import axios from "axios";
import ImgPage from "./ImgPage";

export default function Incoming(props) {
	const [img, setImg] = useState("2019-");

	useEffect(props => {
		console.log("Incoming > props: ", props);

		let fullurl = "https://api.nasa.gov/planetary/apod?api_key=w09O1Uai158ieWogRkLmLXAuhfgfGFYeiEm8LnDn";
		
		// let newday = `&date=${props.newday}`;
		// fullurl += (props.newday.length != 0 ? props.newday : null);

		// console.log(newday);
		
		axios
			.get(fullurl)
			.then(res => {
				console.log(res);
				setImg(res.data);
			})
			.catch(err => console.log("Problem: ", err));
	}, []);
	return (
		<div className="img">
			<ImgPage url={img.url} hdurl={img.hdurl} title={img.title} explanation={img.explanation} date={img.date} />
		</div>
	);
}
