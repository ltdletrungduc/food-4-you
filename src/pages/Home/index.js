import React from "react";
import Button from "../../components/common/Button";
import Container from "../../components/common/Container";
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
		</div>
	);
};

export default Home;
