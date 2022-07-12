export default function Section01() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              당신 근처의 <br />
              당근마켓
            </h1>
            <p className="mb-8 leading-relaxed">
              중고 거래부터 동네 정보까지, 이웃과 함께해 <br/>
              가깝고 따뜻한 당신의 근처를 만들어요.
            </p>
            <div className="flex justify-center"></div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              srcset="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-d6869a79bc4cb58ea59aa5a408decfdf4a4ba60ac639837081da12861083cdbb.webp "
              class="home-main-image-top"
              alt="중고거래, 동네생활 질문글과 동네가게"
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-68ba12f0da7b5af9a574ed92ca8b3a9c0068db176b566dd374ee50359693358b.png"
            />
          </div>
        </div>
      </section>
    </>
  );
}
