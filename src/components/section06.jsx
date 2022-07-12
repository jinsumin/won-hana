import { Link } from "react-router-dom";
import hotKeywords from "../assets/hot-keywords.json";

export default function Section06() {
  return (
    <>
      <section>
        <Link
          to="/top_keywords"
          className="grid place-content-center underline font-bold"
        >
          중고거래 인기검색어
        </Link>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center place-content-center">
          <div className="grid grid-flow-col gap-14">
            {hotKeywords.keywords.map((keyword) => (
              <Link to="/top_keywords" className="hover:underline">
                {keyword.keyword}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
