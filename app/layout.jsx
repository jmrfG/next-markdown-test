import './styles/globals.css'
import './styles/custom.css'
import Navbar from './components/Navbar/navbar'
import Quote from './components/Quotes/randomQuotes'
import Footer from './components/Footer/footer'

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <div className="container">
          <div className="top-content">
            <Navbar />
            <Quote />
          </div>
          <div className="main-content">
            {children}
          </div>
          <div className="footer">
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  )
}
