import Link from 'next/link'


const style = {
  fontSize: '20px',
}

const Navbar = () => {

  return (
    <nav className='custom-navbar'>
      <Link href='\'>
        Home
      </Link>
      <Link href='\Mathematics'>
        Mathematics
      </Link>
    </nav>

  )
}

export default Navbar