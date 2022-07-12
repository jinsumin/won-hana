export default function Section04() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              srcset="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-3-5fd6fb61d603ab919a45566b2ea6b505c83a93ec218f34ddcd5cb482543e2317.webp "
              class="home-main-image-03"
              loading="lazy"
              alt="내 근처에서 찾는 동네가게"
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-3-0c8b631ac2294ac5a3b3e7a3a5580c3e68a3303ad2aded1e84aa57a2e1442786.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              내 근처에서 찾는 <br />
              동네가게
            </h1>
            <p className="mb-8 leading-relaxed">
              우리 동네 가게를 찾고 있나요? 동네 주민이 남긴 진짜 후기를 함께
              확인해보세요!
            </p>
            <div className="flex justify-center">
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                당근마켓 동네가게 찾기
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
