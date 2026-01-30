export const clamp = (min, max) => {
	return (value) => Math.max(min, Math.min(max, value));
};
