const Footer = () => {
  return (
    <footer>
      <div className='header'>{/* <!-- <h2>Contact</h2> --> */}</div>
      <section id='contact'>
        {/* <!-- <form action="https://formsubmit.co/riverehill@gmail.com" method="POST">
    <input type="text" name="name" placeholder="Name" required>
    <input type="email" name="email" placeholder="Email" required>
    <textarea name="message" placeholder="Message" style="height: 220px; overflow-y: hidden;" required></textarea>
    <button type="submit">Send</button>
  </form>  --> */}
        <div className='links'>
          <p>Get in touch</p>
          <div className='icons'>
            <a href='https://github.com/rivereh' target='_blank'>
              <i className='fa-brands fa-github'></i>
            </a>
            <a href='http://linkedin.com/in/rivereh' target='_blank'>
              <i className='fa-brands fa-linkedin'></i>
            </a>
            <a href='mailto:riverehill@gmail.com' target='_blank'>
              <i className='fa-solid fa-envelope'></i>
            </a>
          </div>
        </div>
      </section>
    </footer>
  )
}
export default Footer
