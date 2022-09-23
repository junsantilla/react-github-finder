import React from "react";

function Footer() {
	const footerYear = new Date().getFullYear();

	return (
		<div className="footer bg-gray-700 footer-center p-10 text-primary-content">
			<p>Copyright &copy; {footerYear} All right reseved</p>
		</div>
	);
}

export default Footer;
