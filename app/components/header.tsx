import Link from "next/link";

const Header = () => {
    return(
        <div>
            <h1>My <span>Workout</span> Log</h1>
            <Link href="/write">
                <img
                    alt="go to write workout log buttom styling"
                    src="/imgs/write_icon.svg"
                />
            </Link>
            <img
                alt="decoration img. looks like berbell"
                src="/imgs/berbell.png"
            />
        </div>
    );
}

export default Header;