import { useEffect } from "react";
import styles from "./alert.module.scss";

interface IAlert {
	text: string;
	type: "success" | "error";
	visible: boolean;
	close: () => void;
}

const Alert = ({ text, type, visible, close }: IAlert) => {
	useEffect(() => {
		if (!visible) return;
		const timer = setTimeout(close, 3000);
		return () => clearTimeout(timer);
	}, [visible, close]);

	return (
		<div
			className={`${styles.alert} ${styles[type]} ${
				visible ? styles.show : styles.hide
			}`}
		>
			{text}
		</div>
	);
};

export default Alert;
