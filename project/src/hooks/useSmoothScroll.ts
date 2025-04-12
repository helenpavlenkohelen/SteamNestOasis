import { useCallback } from "react";

const useSmoothScroll = () => {
	const scrollTo = useCallback((id: string) => {
		const section = document.querySelector(`#${id}`);
		if (section) {
			section.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	}, []);
	return scrollTo;
};

export default useSmoothScroll;

//
// scrollIntoView
