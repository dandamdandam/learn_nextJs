import Link from "next/link";

import style from "../styles/header.module.css";

const Header = () => {
    return(
        <div>
            <div className={style.header}>
                <div></div>
                <h1>My <span className="colored_span">Workout</span> Log</h1>
                <Link href="/write">
                    <img
                        alt="go to write workout log buttom styling"
                        src="/imgs/write_icon.svg"
                    />
                </Link>
            </div>
            <img className={style.headerDecoImg}
                alt="decoration img. looks like berbell"
                src="/imgs/berbell.png"
            />
        </div>
    );
}

export default Header;