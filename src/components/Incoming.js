import React, { useEffect, useState } from "react";
import axios from "axios";
import ImgPage from "./ImgPage";

export default function Incoming() {
	const [img, setImg] = useState([]);

	useEffect(() => {
		axios
			.get(`https://api.nasa.gov/planetary/apod?api_key=w09O1Uai158ieWogRkLmLXAuhfgfGFYeiEm8LnDn`)
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
