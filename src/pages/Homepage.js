import { useGSAP } from '@gsap/react';
import HeroImg from '../assets/hero.png';
import HeroImg1 from '../assets/1.png';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Homepage = () => {
	const container = useRef(null);
	gsap.registerPlugin(ScrollTrigger);

	const timeline = gsap.timeline({
		scrollTrigger: {
			ease: 'power3.out',
			trigger: '.hero-section',
			start: '40% center',
			end: '70% center',
			markers: true,
			scrub: 2,
			pin: true,
		},
	});
	useGSAP(
		() => {
			timeline
				.to('.hero-image', {
					height: '300px',
					width: '200px',
					left: '10%',
					bottom: '50vh',
				})
				.to('.image', {
					height: '400px',
				});
		},
		{ scope: container }
	);

	return (
		<section>
			<div className='hero-section' ref={container}>
				<div className='hero-img'>
					<img className='hero-image' src={HeroImg} alt='' />
					<div className='image flex'>
						<img className='hero-image1' src={HeroImg1} alt='' />
					</div>
				</div>
				<div className='hero-content flex-col'>
					<h1>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
						vero, facilis quia, hic dolorum tempora consequatur labore, ex ab
						error quaerat perspiciatis nostrum autem sequi necessitatibus
						consequuntur dolorem voluptas impedit!
					</h1>
					<h1>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
						vero, facilis quia, hic dolorum tempora consequatur labore, ex ab
						error quaerat perspiciatis nostrum autem sequi necessitatibus
						consequuntur dolorem voluptas impedit!
					</h1>
					<h1>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
						vero, facilis quia, hic dolorum tempora consequatur labore, ex ab
						error quaerat perspiciatis nostrum autem sequi necessitatibus
						consequuntur dolorem voluptas impedit!
					</h1>
				</div>
			</div>
		</section>
	);
};

export default Homepage;
