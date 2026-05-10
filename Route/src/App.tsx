import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Post from './pages/Post'
import NotFound from './pages/NotFound'
import Nav from './Nav';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <div style={styles.layout}>
        <Nav />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;

const styles = {
  layout: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    background: "#0b0e11",
    color: "#eaecef",
    fontFamily: "monospace",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
} as const;