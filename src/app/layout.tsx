import '../styles/globals.scss'

export const metadata = {
  title: 'Learning Website',
  description: 'Find your perfect program for your future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
