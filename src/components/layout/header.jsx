import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <div>
          <Link to="/">당근마켓</Link>
          <nav>
            <Link to="/">중고거래</Link> | <Link to="/kr/jobs">알바</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
