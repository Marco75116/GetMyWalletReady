import { useEffect, useState } from "react";

const useWindow = () => {
	const [windowWidthPx, setWindowWidthPx] = useState<number | undefined>(
		undefined,
	);

	useEffect(() => {
		// Ensure window is defined (i.e., we're running in the browser)
		if (typeof window !== "undefined") {
			const handleResize = () => setWindowWidthPx(window.innerWidth);

			// Set initial width
			setWindowWidthPx(window.innerWidth);

			window.addEventListener("resize", handleResize);

			// Clean up the event listener on component unmount
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	return windowWidthPx;
};

export default useWindow;
