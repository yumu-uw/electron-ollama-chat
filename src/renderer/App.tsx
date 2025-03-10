import { useEffect, useRef, useState } from "react";
import "./css/github-markdown.css";
import { useAtom, useSetAtom } from "jotai";
import { configAtom } from "../atom/configAtom";
import { configDIalogIsOpenAtom } from "../atom/configDIalogIsOpenAtom";
import { currentOllamaHostAtom } from "../atom/currentOllamaHostAtom";
import { InitialSettingView } from "./components/InitialSettingView";
import { MessageInputArea } from "./components/MessageInputArea";
import { ChatView } from "./components/chatViewComponents/ChatView";
import { MarkdownView } from "./components/chatViewComponents/MarkdownView";
import { UserMessageView } from "./components/chatViewComponents/UserMessageView";
import { ConfigDialogWrapper } from "./components/sharedComponents/ConfigDialogWrapper";
import { TopMenuBar } from "./components/topMenuBarComponents/TopMenuBar";

import { Box, Container, Stack } from "@mui/material";
import type { Chat } from "../model/dataModels";
import type { ConfigModel } from "../model/configModel";

// const ChatViewWrapperBox = styled(Box, {
// 	base: {
// 		marginEnd: "auto",
// 		overflow: "auto",
// 		w: "100%",
// 		h: "100%",
// 		pr: "1.5em",
// 		_scrollbarThumb: {
// 			borderRadius: "10px",
// 			border: "2px solid transparent",
// 			backgroundClip: "content-box",
// 		},
// 	},
// 	variants: {
// 		variants: {
// 			light: {
// 				scrollbarColor: "#a9a9a9 #eeeeee",
// 				_scrollbarTrack: {
// 					backgroundColor: "#eeeeee",
// 				},
// 				_scrollbarThumb: {
// 					background: "#a9a9a9",
// 				},
// 			},
// 			dark: {
// 				scrollbarColor: "#3D3C3B #1D2A39",
// 				_scrollbarTrack: {
// 					backgroundColor: "#000000",
// 				},
// 				_scrollbarThumb: {
// 					background: "#3D3C3B",
// 				},
// 			},
// 		},
// 	},
// });

export const App = () => {
	const setConfig = useSetAtom(configAtom);
	const [currentOllamaHost, setCurrentOllamaHost] = useAtom(
		currentOllamaHostAtom,
	);
	const setConfigDIalogIsOpen = useSetAtom(configDIalogIsOpenAtom);

	const [input, setInput] = useState("");
	const [prevInput, setPrevInput] = useState("");
	const [ollamaResopnse, setOllamaResopnse] = useState("");
	const [chatHistory, setChatHistory] = useState<Chat[]>([
		{
			role: "system",
			content:
				"You are a helpful, respectful and honest coding assistant. Always reply using markdown. Be clear and concise, prioritizing brevity in your responses.",
		},
	]);

	const chatRef = useRef<HTMLDivElement>(null);
	const dialogRef = useRef<HTMLDialogElement>(null);

	// 設定ファイルの情報を取得
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		document.body.setAttribute("data-theme", "light");
		const newConfig: ConfigModel = {
			OllamaEndpoints: [],
			DefaultOllamaEndPointName: "",
		};
		setConfig(newConfig);

		// if (newConfig.OllamaEndpoints.length === 0) {
		// 	setTimeout(() => {
		// 		setConfigDIalogIsOpen(true);
		// 		dialogRef.current?.showModal();
		// 	}, 500);
		// 	return;
		// }

		for (const endpoint of newConfig.OllamaEndpoints || []) {
			if (endpoint.EndpointName === newConfig.DefaultOllamaEndPointName) {
				setCurrentOllamaHost({
					DisplayName: endpoint.EndpointName,
					Endpoint: endpoint.EndpointUrl,
					ModelName: endpoint.DefaultLLMModel,
				});
				break;
			}
		}

	}, []);

	// チャットエリアを自動でスクロール
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (chatRef.current) {
			chatRef.current.scrollTop = chatRef.current.scrollHeight;
		}
	}, [ollamaResopnse]);

	function callOllamaApi() {
		const msg = input;
		setPrevInput(msg);
		setInput("");

		// EventsOn("receiveChat", (data: string) => {
		// 	data.split(/\r?\n/).map((v) => {
		// 		if (v !== "") {
		// 			const j = JSON.parse(v) as ResponseData;
		// 			setOllamaResopnse((prev) => prev + j.message.content);
		// 		}
		// 	});
		// });

		// EventsOnce("deleteEvent", (output: string) => {
		// 	const newMessages: Chat[] = [
		// 		...chatHistory,
		// 		{
		// 			role: "user",
		// 			content: msg,
		// 		},
		// 		{
		// 			role: "assistant",
		// 			content: output,
		// 		},
		// 	];
		// 	setPrevInput("");
		// 	setOllamaResopnse("");
		// 	setChatHistory(newMessages);
		// 	EventsOff("receiveChat");
		// });

		// SendChat(
		// 	currentOllamaHost?.Endpoint as string,
		// 	currentOllamaHost?.ModelName as string,
		// 	[
		// 		...chatHistory,
		// 		{
		// 			role: "user",
		// 			content: msg,
		// 		},
		// 	],
		// );
	}

	return (
		<Container sx={{ height: "100vh" }}>
			<Stack direction={"column"}
				sx={{ height: "100%", width: "100%", justifyContent: "space-between" }}
			>
				<TopMenuBar />
				<Box ref={chatRef}>
					<ChatView chatHistory={chatHistory} />
					{prevInput && <UserMessageView message={prevInput} />}
					{ollamaResopnse !== "" && <MarkdownView mdStr={ollamaResopnse} />}
				</Box>
				<MessageInputArea
					input={input}
					setInput={setInput}
					callOllamaApi={callOllamaApi}
				/>

				{/* <ConfigDialogWrapper
				dialogRef={dialogRef}
				alignContent={"center"}
				minH={"40vh"}
			>
				<InitialSettingView dialogRef={dialogRef} />
			</ConfigDialogWrapper> */}
			</Stack>
		</Container>
	);
}
