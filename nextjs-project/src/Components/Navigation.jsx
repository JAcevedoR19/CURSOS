import Link from "next/link"

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-primary navbar-dark">
            <div className="container">
                <Link className="navbar-brand" href="/">APP Next.JS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                < div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/Services">Services</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
