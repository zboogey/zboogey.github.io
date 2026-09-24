import heroImg from './assets/hero.png'
import './App.css'

function Icon({ name }) {
  const icons = {
    arrow: '↗',
    code: '⌘',
    spark: '✦',
    mail: '✉',
  }

  return <span aria-hidden="true">{icons[name]}</span>
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Ybray Almat home">YA.</a>
      <nav aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Available to connect</p>
        <h1>Ybray<br /><em>Almat.</em></h1>
        <a className="button" href="#contact">Say hello <Icon name="arrow" /></a>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="portrait-card">
          <div className="portrait-glow" />
          <img src={heroImg} alt="" />
          <div className="portrait-label">Digital<br />explorer <Icon name="spark" /></div>
        </div>
        <p className="side-note">Scroll to discover<br />more about me <span>↓</span></p>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-tag"><span>01</span> About me</div>
      <div className="about-content">
        <h2>Turning curiosity<br />into <em>creation.</em></h2>
        <div className="about-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </div>
      </div>
      <div className="interests">
        <article><Icon name="code" /><h3>Learning</h3><p>Always growing my skills and knowledge.</p></article>
        <article><Icon name="spark" /><h3>Creating</h3><p>Making clean, thoughtful digital experiences.</p></article>
        <article><span className="orbit-icon">◎</span><h3>Exploring</h3><p>Finding inspiration in new perspectives.</p></article>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div>
        <div className="section-tag"><span>02</span> Contact</div>
        <h2>Let's make<br />something <em>good.</em></h2>
      </div>
      <div className="contact-card">
        <p>Have an idea, a question, or just want to connect? My inbox is always open.</p>
        <a className="email" href="mailto:ybray.almat@example.com"><Icon name="mail" /> ybrio8@gmail.com</a>
        <p className="safe-note">Based on Abaya Masanshi · +797 997 67 98</p>
      </div>
    </section>
  )
}

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Contact />
      <footer><span>© 2026 Ybray Almat</span><span>Made with curiosity <Icon name="spark" /></span></footer>
    </main>
  )
}

export default App
