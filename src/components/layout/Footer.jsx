import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  
  const footerYear = new Date().getFullYear()

  return (
    <footer className='footer p-10 bg-[#0D1117] text-primary-content footer-center'>
    
      <div>
      
      <FaGithub className='inline pr-2 text-5xl' /><span  className='inline pr-2 text-3xl'>Github Timeline</span>

        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
 
  )
}

export default Footer
