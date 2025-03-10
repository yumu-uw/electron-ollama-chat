import { Box, Stack, Typography } from "@mui/material";
import { memo } from "react";

type Props = {
	message: string;
};

export const UserMessageView = memo(({ message }: Props) => {
	return (
		<Stack sx={{ justifyContent: "flex-end" }}>
			<Box sx={{ p: "0.5em", my: "1em", borderRadius: "md", bg: "gray.200", color: "black" }}>
				{message.split(/\r?\n/).map((v, index) => {
					return (
						<Typography key={`preinput-${// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							index}`} sx={{ fontWeight: 600 }} gutterBottom>
							{v}
						</Typography>
					);
				})}
			</Box>
		</Stack>
	);
});
