import React from "react";
import Button from "../../components/common/Button";
import Container from "../../components/common/Container";
import PromoProduct from "../../components/PromoProduct";

const mockProduct = [
	{
		id: 1234,
		name: "Product Name",
		des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
		imgSrc: "product_1@0,25x.png",
		imgSrcset: {},
	},
];
const Home = () => {
	return (
		<div className='homepage'>
			<section className='banner'>
				<Container>
					<img
						className='pasta-image banner__poster'
						srcSet='pasta_1@0,1x.png 576w,
									pasta_1@0,25x.png 768w,
   									pasta_1@0,5x.png 1440w,
									   pasta_1@0,75x.png 1920w,
									   pasta_1.png 3840w'
						src='pasta_1@0,5x.png'
					/>
					<div className='banner__content col-xl-6 col-12 '>
						<div className='banner__content-wrapper'>
							<div className='question font-AD'>are you hungry?</div>
							<div className='message font-FTG'>dont wait!</div>
							<div className='suggestion bold-font'>
								let start to order food now
							</div>
							<div className='line'></div>
							<div className='text-box'>
								<p className='font-FTG'>this monday happy hours</p>
								<div className='font-FTG'>1+1=3</div>
							</div>
							<Button className='order bold-font' pdVer={20} pdHor={40}>
								<span>order now</span>
							</Button>
						</div>
					</div>
				</Container>
				<div id='parallelogram'></div>
			</section>
			<section className='promo'>
				<div className='section__title'>
					<h2 className='font-FTG'>choose &amp; enjoy</h2>
				</div>
				<div className='section__des'>
					<p className='main-font'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
						ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
						accumsan lacus vel facilisis.
					</p>
				</div>
				<div className='test-promo-slider'>
					<PromoProduct></PromoProduct>
					<PromoProduct></PromoProduct>
					<PromoProduct></PromoProduct>
				</div>
			</section>
		</div>
	);
};

export default Home;
