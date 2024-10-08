import { Select, type SelectProps } from "antd";

const EcoSelect = <T,>(props: SelectProps<T>) => {
	const { style, ...rest } = props;

	const width = useCreation(() => {
		let width = 0;

		const canvas = document.createElement("canvas");
		const context = canvas.getContext("2d");

		if (!context) return 100;

		context.font = getComputedStyle(document.body).font;

		for (const option of rest.options!) {
			const textWidth = context.measureText(option.label as string).width;

			if (textWidth > width) {
				width = textWidth;
			}
		}

		canvas.remove();

		return width + 43;
	}, [rest.options]);

	return (
		<Select
			{...rest}
			style={{
				...style,
				width,
			}}
		/>
	);
};

export default EcoSelect;
