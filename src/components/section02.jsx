export default function Section02() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              srcset="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-1-cc678e9a217b96f5cb459f7f0684f5ba67706f9889801618b8cf879fbc2c0ea7.webp "
              class="home-main-image-01"
              alt="우리동네 중고 직거래 사진"
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-1-39ac203e8922f615aa3843337871cb654b81269e872494128bf08236157c5f6a.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              우리 동네 <br />
              중고 직거래 마켓
            </h1>
            <p className="mb-8 leading-relaxed">
              동네 주민들과 가깝고 따뜻한 거래를 지금 경험해 보세요.
            </p>
            <div className="flex justify-center">
              <button className="w-auto ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                인기매물 보기
              </button>
              <button className="w-auto ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                믿을 수 있는 중고거래
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
