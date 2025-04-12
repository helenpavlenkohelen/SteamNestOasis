import React, { useState } from "react";
import styles from "./loginForm.module.scss";
import Alert from "../Alert/Alert";

interface IloginForm {
	loginAdmin: () => void;
}

const LoginForm = ({ loginAdmin }: IloginForm) => {
	const [login, setLogin] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [visible, setVisible] = useState<boolean>(false);
	const [text, setText] = useState<string>("");
	const [type, setType] = useState<"success" | "error">("success");

	const submit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const resp = await fetch(
				"https://steamnestoasis.ca/api/admin/login",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ login, password }),
				}
			);
			console.log("Response status:", resp.status);

			if (!resp.ok)
				throw new Error(`Error ${resp.status}: ${resp.statusText}`);
			const data = await resp.json();
			console.log(data);

			if (resp.status === 200) {
				localStorage.setItem("token", data.token);
				loginAdmin();
				setText("Login successful!");
				setType("success");
				setVisible(true);
				setTimeout(() => setVisible(false), 3000);
			} else {
				setText(data.message);
				setType("error");
				setVisible(true);
			}
		} catch (error) {
			console.error("Ошибка при авторизации:", error);
			setText("Something went wrong. Try again.");
			setType("error");
			setVisible(true);
		}
	};

	return (
		<>
			<Alert
				text={text}
				type={type}
				visible={visible}
				close={() => setVisible(false)}
			/>
			<form className={styles.forma} onSubmit={submit}>
				<div className={styles.forma__inputGroup}>
					<label htmlFor='Phone'>Login</label>
					<input
						className={styles.forma__input}
						type='text'
						placeholder='login'
						value={login}
						onChange={(e) => setLogin(e.target.value)}
					/>
				</div>
				<div className={styles.forma__inputGroup}>
					<label htmlFor='Phone'>Password</label>
					<input
						className={styles.forma__input}
						type='password'
						placeholder='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button className={styles.forma__button}>Login</button>
			</form>
		</>
	);
};

export default LoginForm;
