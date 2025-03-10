import { appThemeAtom } from "@/atom/appThemeAtom";
import { Circle } from "@mui/icons-material";
import { Button, Divider, Stack, TextField } from "@mui/material";
import { useAtomValue } from "jotai";
import { useEffect, useRef } from "react";


type Props = {
	input: string;
	setInput: React.Dispatch<React.SetStateAction<string>>;
	callOllamaApi(): void;
};

export const MessageInputArea = ({ input, setInput, callOllamaApi }: Props) => {
	return (
		<Stack sx={{
			gap: 2,
			p: "0.5em",
			borderRadius: "lg",
			bgcolor: "gray",
			color: "black",
		}}>
			<TextField
				value={input}
				placeholder="送信するメッセージ(Enterで改行、Alt+Enterで送信)"
				multiline
				maxRows={6}
				sx={{ w: "100%", resize: "none", outline: { _focus: "none" } }}
				onKeyDown={(e) => {
					if (e.key === "Enter" && e.altKey) {
						e.preventDefault();
						callOllamaApi();
					}
				}}
				onChange={(e) => {
					setInput(e.target.value);
				}}
			/>
			<Divider />
			<Stack direction={"row"} sx={{ w: "100%", justifyContent: "flex-end" }}>
				<Circle sx={{ bgcolor: "gray", w: "2em", h: "2em" }}>
					<Button onClick={callOllamaApi}>
						<img alt="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFycm93LXVwIj48cGF0aCBkPSJtNSAxMiA3LTcgNyA3Ii8+PHBhdGggZD0iTTEyIDE5VjUiLz48L3N2Zz4=" />
					</Button>
				</Circle>
			</Stack>
		</Stack>
	);
};
