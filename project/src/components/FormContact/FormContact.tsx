import { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./formContact.module.scss";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IInfo, IRequestInfo } from "../../types/info";
import Alert from "../Alert/Alert";

const FormContact = () => {
	const [visible, setVisible] = useState<boolean>(false);
	const [text, setText] = useState<string>("");
	const [type, setType] = useState<"success" | "error">("success");

	const defaultRequestInfo: IRequestInfo = {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	};

	const [info, setInfo] = useState<IInfo>({
		email: "",
		phone: "",
		instagram: "",
		facebook: "",
	});

	const [requestInfo, setRequestInfo] =
		useState<IRequestInfo>(defaultRequestInfo);

	const sendInfo = async (e: any) => {
		e.preventDefault();
		const resp = await fetch("https://steamnestoasis.ca/api/order", {
			method: "POST",
			headers: {
				authorization: `Bearer ${localStorage.getItem("token")}`,
				"Content-type": "application/json",
			},
			body: JSON.stringify(requestInfo),
		});
		const data = await resp.json();
		if (resp.status == 200) {
			setType("success");
			setText("The order has been submitted to the discretion of");
			setRequestInfo(defaultRequestInfo);
		} else {
			setType("error");
			setText(data.message);
		}
		setVisible(true);
	};

	useEffect(() => {
		const loadContactInfo = async () => {
			const resp = await fetch(
				"https://steamnestoasis.ca/api/contact_info"
			);
			if (resp.status === 200) {
				const data = await resp.json();
				setInfo(data);
			}
		};
		loadContactInfo();
	}, []);

	return (
		<>
			<Alert
				text={text}
				type={type}
				visible={visible}
				close={() => setVisible(false)}
			/>

			<div className={styles.container} id={"form"}>
				<div className={styles.wrapperForma}>
					<div className={styles.contact}>
						<h3 className={styles.contact__title}>our contact</h3>
						<ul>
							{/* <li className={styles.contact__phone}>
								phone:{info.phone}
							</li>
							<li className={styles.contact__email}>
								email: {info.email}
							</li> */}
							<li className={styles.contact__phone}>
								phone:{" "}
								<a
									className={styles.contact__phoneLink}
									href={`tel:${info.phone.replace(
										/\s+/g,
										""
									)}`}
								>
									{info.phone}
								</a>
							</li>
							<li className={styles.contact__email}>
								email:{" "}
								<a
									className={styles.contact__emailLink}
									href={`mailto:${info.email}`}
								>
									{info.email}
								</a>
							</li>
						</ul>
						<ul className={styles.contact__itemSoc}>
							<li className={styles.contact__insta}>
								<a
									href={info.instagram}
									target='_blank'
									rel='noopener noreferrer'
								>
									<div>
										<FaInstagram />
									</div>
								</a>
							</li>
							<li className={styles.contact__face}>
								<a
									href={info.facebook}
									target='_blank'
									rel='noopener noreferrer'
								>
									<div>
										<FaFacebook />
									</div>
								</a>
							</li>
						</ul>
					</div>
					<form onSubmit={sendInfo} className={styles.forma}>
						<div className={styles.forma__containerName}>
							<div className={styles.forma__inputGroup}>
								<label htmlFor='first-name'>First Name</label>
								<input
									name='first-name'
									type='text'
									id='first-name'
									onChange={(e) =>
										setRequestInfo({
											...requestInfo,
											firstName: e.target.value,
										})
									}
									value={requestInfo.firstName}
								/>
							</div>
							<div className={styles.forma__inputGroup}>
								<label htmlFor='last-name'>Last Name</label>
								<input
									name='last-name'
									type='text'
									id='last-name'
									onChange={(e) =>
										setRequestInfo({
											...requestInfo,
											lastName: e.target.value,
										})
									}
									value={requestInfo.lastName}
								/>
							</div>
						</div>
						<div className={styles.forma__containerEmail}>
							<label htmlFor='email'>Email</label>
							<input
								name='email'
								type='email'
								id='email'
								onChange={(e) =>
									setRequestInfo({
										...requestInfo,
										email: e.target.value,
									})
								}
								value={requestInfo.email}
							/>
						</div>
						<div className={styles.forma__containerPhone}>
							<label htmlFor='phone'>Phone</label>
							<input
								name='phone'
								type='tel'
								id='phone'
								onChange={(e) =>
									setRequestInfo({
										...requestInfo,
										phone: e.target.value,
									})
								}
								value={requestInfo.phone}
							/>
						</div>
						<div className={styles.forma__containerText}>
							<label htmlFor='message'>Message</label>
							<textarea
								name='message'
								id='message'
								onChange={(e) =>
									setRequestInfo({
										...requestInfo,
										message: e.target.value,
									})
								}
								value={requestInfo.message}
							></textarea>
						</div>
						<div className={styles.forma__wrapperBtn}>
							<Button
								click={() => console.log(1)}
								text={"Send Message"}
							/>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default FormContact;
