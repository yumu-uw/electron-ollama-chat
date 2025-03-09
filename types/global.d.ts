export type IElectronAPI = {
	node: () => string;
	chrome: () => string;
	electron: () => string;
};

declare global {
	interface Window {
		versions: IElectronAPI;
	}
}
