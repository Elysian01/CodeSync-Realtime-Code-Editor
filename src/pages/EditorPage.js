import React, { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
// import ACTIONS from "../Actions";
import Client from "../components/Client";
import Editor from "../components/Editor";
// import { initSocket } from "../socket";
import {
	useLocation,
	useNavigate,
	Navigate,
	useParams,
} from "react-router-dom";
import logo from "../static/logo.png";

function EditorPage() {
	const location = useLocation();
	const { roomId } = useParams();
	const reactNavigator = useNavigate();
	const [clients, setClients] = useState([]);

	async function copyRoomId() {
		try {
			await navigator.clipboard.writeText(roomId);
			toast.success("Room ID has been copied to your clipboard");
		} catch (err) {
			toast.error("Could not copy the Room ID");
			console.error(err);
		}
	}

	function leaveRoom() {
		reactNavigator("/");
	}

	if (!location.state) {
		return <Navigate to="/" />;
	}

	return (
		<div className="mainWrap">
			<div className="aside">
				<div className="asideInner">
					<div className="logo">
						<img
							className="logoImage"
							src={logo}
							alt="logo"
						/>
					</div>
					<h3>Connected</h3>
					<div className="clientsList">
						{/* {clients.map((client) => (
							<Client
								key={client.socketId}
								username={client.username}
							/>
						))} */}
					</div>
				</div>
				<button className="btn copyBtn" onClick={copyRoomId}>
					Copy ROOM ID
				</button>
				<button className="btn leaveBtn" onClick={leaveRoom}>
					Leave
				</button>
			</div>
			<div className="editorWrap">
				{/* <Editor
					socketRef={socketRef}
					roomId={roomId}
					onCodeChange={(code) => {
						codeRef.current = code;
					}}
				/> */}
			</div>
		</div>
	);
}

export default EditorPage;
