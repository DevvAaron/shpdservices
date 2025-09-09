import { useEffect, useRef, useState } from "react";
export function useAnimateOnScroll(
    animationClass,
    options = {
        threshold: 0.1,
        once: true,
        delay: 0,
    }
) {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, options.delay || 0);

                    if (options.once) observer.disconnect();
                }
            },
            { threshold: options.threshold || 0.1 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [options]);

    const className = isVisible
        ? `animate__animated ${animationClass}`
        : '';

    return [ref, className];
}
