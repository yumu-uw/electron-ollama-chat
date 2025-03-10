import { configDIalogIsOpenAtom } from "../../../atom/configDIalogIsOpenAtom";
import type { AppThemeModel } from "@/model/configModel";
import hljs from "highlight.js";
import { useAtom, useSetAtom } from "jotai";
import { useRef } from "react";
import { ConfigDialog } from "../configDialogComponents/ConfigDialog";
import { ConfigDialogWrapper } from "../sharedComponents/ConfigDialogWrapper";

export const RightButtonView = () => {
	const setConfigDIalogIsOpen = useSetAtom(configDIalogIsOpenAtom);
	const dialogRef = useRef<HTMLDialogElement>(null);

	return (
		<>
			<styled.button
				cursor={"pointer"}
				onClick={() => {
					setConfigDIalogIsOpen(true);
					dialogRef.current?.showModal();
				}}
			>
				<Settings color={appTheme === "light" ? "black" : "white"} />
			</styled.button>

			<ConfigDialogWrapper dialogRef={dialogRef} minH={"60vh"} maxH={"80vh"}>
				<ConfigDialog dialogRef={dialogRef} />
			</ConfigDialogWrapper>
		</>
	);
};
