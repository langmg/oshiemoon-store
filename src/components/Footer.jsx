
import './Footer.css';

export default function Footer() {

    return (
        <footer className='mainFooter'>
            <p>&copy; 2025 Designed By Langston Gary</p>
            
            <a href='mailTo:langston.m.gary@gmail.com'>
                    <span className='material-symbols-rounded'>
                        email
                    </span>
                    langston.m.gary@gmail.com
            </a>

            <a href='https://www.linkedin.com/in/langston-gary-503027246/'>
                <span className='material-symbols-rounded'>
                    groups
                </span>
                LinkedIn
            </a>
        </footer>
    );
}