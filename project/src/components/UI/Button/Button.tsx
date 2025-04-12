import styles from "./button.module.scss";
interface IButton {
	click: () => void;
	text: string;
}
const Button = ({ click, text }: IButton) => {
	return (
		<button onClick={click} className={styles.button}>
			{text}
		</button>
	);
};

export default Button;
