import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";
import { supportLangs } from "../../../lib/custom-highlight";

interface Props {
	classAttr: string | undefined;
	value: React.ReactNode;
}

export const CustomCode = ({ classAttr, value }: Props) => {

	const [hasCopied, setHasCopied] = useState<boolean>(false);

	const classNames =
		classAttr !== undefined ? classAttr.split(":") : ["nohighlight", undefined];
	const lang = supportLangs[classNames[0] as string]
		? classNames[0]
		: "language-plaintext";
	if (classNames[0] === "nohighlight") {
		return <code className={classNames[0]}>{value}</code>;
	}

	const handleCopyButton = async () => {
		setHasCopied(true);
		await navigator.clipboard.writeText(value?.toString() as string);
		setTimeout(() => {
			setHasCopied(false);
		}, 1500);
	};

	return (
		<Stack direction={"column"}>
			<Stack sx={{ p: "1em", fontWeight: "bold", bgcolor: "gray.300", color: "black" }}>
				{classAttr?.split("-")[1]}

				{!hasCopied && (
					<Box sx={{ verticalAlign: "middle" }}>
						<Button onClick={handleCopyButton}>
							{/* {appTheme === "light" ? (
								<styled.img
									display={"inline!"}
									pr={"0.5em"}
									src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNsaXBib2FyZC1jb3B5Ij48cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI0IiB4PSI4IiB5PSIyIiByeD0iMSIgcnk9IjEiLz48cGF0aCBkPSJNOCA0SDZhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJ2LTIiLz48cGF0aCBkPSJNMTYgNGgyYTIgMiAwIDAgMSAyIDJ2NCIvPjxwYXRoIGQ9Ik0yMSAxNEgxMSIvPjxwYXRoIGQ9Im0xNSAxMC00IDQgNCA0Ii8+PC9zdmc+"
								/>
							) : (
								<styled.img
									display={"inline!"}
									pr={"0.5em"}
									src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtY2xpcGJvYXJkLWNvcHkiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjQiIHg9IjgiIHk9IjIiIHJ4PSIxIiByeT0iMSIvPjxwYXRoIGQ9Ik04IDRINmEyIDIgMCAwIDAtMiAydjE0YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMnYtMiIvPjxwYXRoIGQ9Ik0xNiA0aDJhMiAyIDAgMCAxIDIgMnY0Ii8+PHBhdGggZD0iTTIxIDE0SDExIi8+PHBhdGggZD0ibTE1IDEwLTQgNCA0IDQiLz48L3N2Zz4="
								/>
							)} */}
							コピーする
						</Button>
					</Box>
				)}
				{hasCopied && (
					<Box sx={{ verticalAlign: "middle" }}>
						{/* {appTheme === "light" ? (
							<styled.img
								display={"inline!"}
								pr={"0.5em"}
								src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4="
							/>
						) : (
							<styled.img
								display={"inline!"}
								pr={"0.5em"}
								src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtY2hlY2siPjxwYXRoIGQ9Ik0yMCA2IDkgMTdsLTUtNSIvPjwvc3ZnPg=="
							/>
						)} */}
						コピーしました！
					</Box>
				)}
			</Stack>
			<code className={lang}>{value}</code>
		</Stack>
	);
};
