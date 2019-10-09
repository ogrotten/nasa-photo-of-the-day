import React from "react";
import DateForm from "./DateForm";

const ImgPage = props => {
	return (
		<div className="imgpage" key={props.url} props={props}>
			<div className="top">
				<DateForm props={props} />
			</div>
			<img className="img" src={props.url} />
			<div className="bottom">
				<h2>{props.title}</h2>
				<p>{props.date}</p>
				<p>{props.explanation}</p>
			</div>
		</div>
	);
};
export default ImgPage;
