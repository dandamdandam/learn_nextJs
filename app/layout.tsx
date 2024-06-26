import './styles/style.css';
import UseQuery from './components/UseQuery';

export const metadata = {
  title: 'My Workout Log',
  description: 'log board for workout Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <UseQuery>
          {children}
        </UseQuery>
      </body>
    </html>
  )
}
