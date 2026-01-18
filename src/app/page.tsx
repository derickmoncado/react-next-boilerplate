"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowBigDown, Smile, Package, Inbox, Menu, CircleCheck, Send } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

	const [emblaRef, emblaApi] = useEmblaCarousel({ axis: "x", direction: "ltr", loop: true, align: "center" }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

	const onSelect = useCallback((api: typeof emblaApi) => {
		if (!api) return;
		setSelectedIndex(api.selectedScrollSnap());
		setPrevBtnEnabled(api.canScrollPrev());
		setNextBtnEnabled(api.canScrollNext());
	}, []);

	const onInit = useCallback((api: typeof emblaApi) => {
		if (!api) return;
		setScrollSnaps(api.scrollSnapList());
	}, []);

	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
	const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		onInit(emblaApi);
		onSelect(emblaApi);
		emblaApi.on("reInit", onInit);
		emblaApi.on("reInit", onSelect);
		emblaApi.on("select", onSelect);
	}, [emblaApi, onInit, onSelect]);

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
				&nbsp; here is a carousel from <Link href="https://www.embla-carousel.com/">Embla Carousel</Link>
			</p>
			<br />
			<section className="embla" ref={emblaRef}>
				<div className="embla__container">
					<div className="embla__slide">Slide 1</div>
					<div className="embla__slide">Slide 2</div>
					<div className="embla__slide">Slide 3</div>
				</div>
			</section>
			<div className="embla__controls">
				<div className="embla__buttons">
					<button className="embla__button embla__button--prev" type="button" onClick={scrollPrev} disabled={!prevBtnEnabled}>
						Prev
					</button>
					<button className="embla__button embla__button--next" type="button" onClick={scrollNext} disabled={!nextBtnEnabled}>
						Next
					</button>
				</div>
				<div className="embla__dots">
					{scrollSnaps.map((_, index) => (
						<button key={index} className={`embla__dot${index === selectedIndex ? " embla__dot--selected" : ""}`} type="button" onClick={() => scrollTo(index)} aria-label={`Go to slide ${index + 1}`} />
					))}
				</div>
			</div>
			<br />
			==========================================================
			<br />
			<br />
			<p>
				And here are some icons from <Link href="https://www.embla-carousel.com/">Lucide Icons</Link>
			</p>
			<p>
				<Smile /> <Package /> <Inbox /> <Menu /> <CircleCheck /> <Send />
			</p>
			<br />
			==========================================================
			<br />
			<br />
			<p>This is your boilerplate now, go build something cool.</p>
		</div>
	);
}
