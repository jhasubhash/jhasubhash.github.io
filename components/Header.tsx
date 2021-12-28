import Link from 'next/link';

function Header() {
    return <header>
        <div className="container">
        <Link href='/'>
            <h2>
                Home
            </h2>
        </Link>
        </div>
    </header>;
}

export default Header;