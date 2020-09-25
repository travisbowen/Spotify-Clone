import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<div className='footer'>
			<div className='footer__left'>
				<p>Album and song details</p>
			</div>
			<div className='footer__center'>
				<p>PLayer controls</p>
			</div>
			<div className='footer__right'>
				<p>Volume controls</p>
			</div>
		</div>
	);
}

export default Footer;
