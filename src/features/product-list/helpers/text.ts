export const formatText = (text: string) => {
	if (!text) {
		return '';
	}

	return text.split('_').map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1)).join(' ')
};
