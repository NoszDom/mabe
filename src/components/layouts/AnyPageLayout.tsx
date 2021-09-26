export function AnyPageLayout({
	children,
}: {
	children: JSX.Element | JSX.Element[];
}) {
	return (
		<div className="px-6 md:px-32 lg:px-40 xl:px-52 pt-14 pb-12 md:pb-24 lg:pb-20 mx-auto">
			{children}
		</div>
	);
}
