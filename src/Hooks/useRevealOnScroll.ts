// useRevealOnScroll.js
import { useEffect, useRef } from 'react';

export default function useRevealOnScroll(options = {}) {
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate-fade-in-up');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2, ...options },
		);

		if (ref.current) observer.observe(ref.current);

		return () => observer.disconnect();
	}, [options]);

	return ref;
}
