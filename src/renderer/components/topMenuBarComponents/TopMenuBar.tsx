import { memo } from "react";
import { HostSelectView } from "./HostSelectView";
import { Stack } from "@mui/material";

export const TopMenuBar = memo(() => {
	return (
		<Stack sx={{ justifyContent: "space-between" }}>
			<HostSelectView />
			{/* <RightButtonView /> */}
		</Stack>
	);
});
