import Link from 'next/link'


const style = {
    fontSize: '20px',
}

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            <div>Copyright © {currentYear} My Company</div>
        </footer>

    )
}

export default Footer