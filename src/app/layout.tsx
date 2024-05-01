import '@/styles/globals.css'

export const metadata = {
	title: 'Shui Shan',
	icons: [{rel: 'icon', url: '/favicon.ico'}],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				{/* Layout UI */}
				<main>{children}</main>
			</body>
		</html>
	)
}
