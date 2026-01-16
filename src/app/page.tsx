"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowBigDown } from "lucide-react";

export default function Home() {
	const [emblaRef] = useEmblaCarousel({ loop: true });

	return (
		<div className="container">
			<h1>Home</h1>
			<p>some placeholder text</p>
			<br />
			==========================================================
			<br />
			<br />
			<p>
				<ArrowBigDown />
				&nbsp; here is a carousel
			</p>
			<br />
			<div className="embla" ref={emblaRef}>
				<div className="embla__container">
					<div className="embla__slide">Slide 1</div>
					<div className="embla__slide">Slide 2</div>
					<div className="embla__slide">Slide 3</div>
				</div>
			</div>
		</div>
	);
}
