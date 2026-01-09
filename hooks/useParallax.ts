import { useEffect, useState } from 'react';

// Returns a style object with transform based on scroll position relative to window height.
// speed: simple multiplier (e.g. 0.1 for slow movement)
export function useParallax(speed = 0.1) {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setOffset(window.scrollY * speed);
        }
        // Initial calculation
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return { transform: `translateY(${offset}px)` };
}
