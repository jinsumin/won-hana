import bannerImg from "../assets/daangn_banner.png";

export default function Banner() {
  return (
    <>
      <section className="bg-orange-500 flex justify-center">
        <div className="mt-10 text-white font-bold">
          <h1 className="text-4xl ">
            우리 동네에서 찾는
            <br />
            당근알바
          </h1>
          <div class="msxnlj2">
            <span>
              <img
                alt="daangn working"
                src={bannerImg}
                width={480}
                height={300}
              />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
