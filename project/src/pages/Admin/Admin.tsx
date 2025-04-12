import { useEffect, useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { IInfo } from "../../types/info";
import styles from "./admin.module.scss";
import Alert from "../../components/Alert/Alert";
import { useNavigate } from "react-router-dom";

const Admin = () => {
	const [isAuth, setIsAuth] = useState<boolean>(false);
	const [checkAuth, setCheckAuth] = useState<boolean>(false);
	const [visible, setVisible] = useState<boolean>(false);
	const [text, setText] = useState<string>("");
	const [type, setType] = useState<"success" | "error">("success");

	const [info, setInfo] = useState<IInfo>({
		email: "",
		phone: "",
		instagram: "",
		facebook: "",
	});

	const navigate = useNavigate();

	useEffect(() => {
		const loadContactInfo = async () => {
			if (isAuth) {
				const resp = await fetch(
					"https://steamnestoasis.ca/api/contact_info"
				);
				if (resp.status === 200) {
					const data = await resp.json();
					setInfo(data);
				}
			}
		};
		loadContactInfo();
	}, [isAuth]);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			const reLogin = async () => {
				const resp = await fetch(
					"https://steamnestoasis.ca/api/admin/reLogin",
					{
						headers: {
							authorization: `Bearer ${token}`,
						},
					}
				);
				if (resp.status == 200) {
					const data = await resp.json();
					localStorage.setItem("token", data.token);
					setIsAuth(true);
				} else {
					localStorage.removeItem("token");
				}
				setCheckAuth(true);
			};
			reLogin();
		} else {
			setCheckAuth(true);
		}
	}, []);

	const changeInfo = async (e: any) => {
		e.preventDefault();
		const resp = await fetch(
			"https://steamnestoasis.ca/api/admin/contact_info",
			{
				method: "PUT",
				headers: {
					authorization: `Bearer ${localStorage.getItem("token")}`,
					"Content-type": "application/json",
				},
				body: JSON.stringify(info),
			}
		);
		if (resp.status == 200) {
			setType("success");
			setText("Information successfully updated");
		} else {
			setType("error");
			setText("Update failed. Please try again.");
		}
		setVisible(true);
	};

	if (checkAuth) {
		if (isAuth) {
			return (
				<>
					<Alert
						text={text}
						type={type}
						visible={visible}
						close={() => setVisible(false)}
					/>
					<div className={styles.wrapper}>
						<form onSubmit={changeInfo} className={styles.forma}>
							<h3 className={styles.forma__title}>
								Settings
								<div className={styles.forma__hr}></div>
							</h3>

							<div className={styles.forma__inputGroup}>
								<label htmlFor='Phone'>Phone</label>
								<input
									className={styles.forma__input}
									type='text'
									placeholder='phone'
									onChange={(e) =>
										setInfo({
											...info,
											phone: e.target.value,
										})
									}
									value={info.phone}
								/>
							</div>
							<div className={styles.forma__inputGroup}>
								<label htmlFor='Email'>Email</label>
								<input
									className={styles.forma__input}
									type='text'
									placeholder='email'
									onChange={(e) =>
										setInfo({
											...info,
											email: e.target.value,
										})
									}
									value={info.email}
								/>
							</div>
							<div className={styles.forma__inputGroup}>
								<label htmlFor='Instagram'>Instagram</label>
								<input
									className={styles.forma__input}
									type='text'
									placeholder='instagram'
									onChange={(e) =>
										setInfo({
											...info,
											instagram: e.target.value,
										})
									}
									value={info.instagram}
								/>
							</div>
							<div className={styles.forma__inputGroup}>
								<label htmlFor='Facebook'>Facebook</label>
								<input
									className={styles.forma__input}
									type='text'
									placeholder='facebook'
									onChange={(e) =>
										setInfo({
											...info,
											facebook: e.target.value,
										})
									}
									value={info.facebook}
								/>
							</div>
							<div>
								<button className={styles.forma__button}>
									Change
								</button>
								<button
									onClick={() => navigate("/")}
									className={styles.forma__goBackButton}
								>
									Back to home
								</button>
							</div>
						</form>
					</div>
				</>
			);
		} else {
			return <LoginForm loginAdmin={() => setIsAuth(true)} />;
		}
	} else {
		return <div className={styles.loading}>Loadin</div>;
	}
};

export default Admin;
