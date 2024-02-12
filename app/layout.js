import Navigation from "./components/navigation"
import "./styles/global.css";

export const metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: 'The best movies on the best framework',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
