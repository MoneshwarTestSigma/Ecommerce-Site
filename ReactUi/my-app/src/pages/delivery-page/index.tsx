import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


const Delivery=()=>{
	const [countdown,setCountdown] = useState(5);
	const navigate=useNavigate();
	useEffect(() => {
		const timer = setTimeout(() => {
			setCountdown((prevCountdown) => prevCountdown - 1);
		}, 1000);

		return () => clearTimeout(timer);
	}, [countdown]);

	useEffect(() => {
		if (countdown === 0) {
			navigate("/");
		}
	}, [countdown, navigate]);
	
    return (
        <html lang="en">
<head>

	<link href='https://fonts.googleapis.com/css?family=Lato:300,400|Montserrat:700' rel='stylesheet' type='text/css'/>
	<style>
		@import url(//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.1/normalize.min.css);
		@import url(//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css);
	</style>
	<link rel="stylesheet" href="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/default_thank_you.css"/>
	<script src="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/jquery-1.9.1.min.js"></script>
	<script src="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/html5shiv.js"></script>
</head>
<body>
	<header className="site-header" id="header">
		<h1 className="site-header__title" data-lead-id="site-header-title">THANK YOU!</h1>
	</header>

	<div className="main-content">
		<i className="fa fa-check main-content__checkmark" id="checkmark"></i>
		<p className="main-content__body" data-lead-id="main-content-body">Thanks for Shopping with us.Your product will be delivered soon .</p>
	</div>
	<div>
		<h1> Redirecting in {countdown} seconds</h1>
	</div>

	<footer className="site-footer" id="footer">
		<p className="site-footer__fineprint" id="fineprint">Copyright ©2023 | All Rights Reserved</p>
	</footer>
</body>
</html>
    );
}
export default Delivery;