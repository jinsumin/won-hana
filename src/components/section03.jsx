export default function Section03() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              이웃과 함께하는 <br />
              동네 생활
            </h1>
            <p className="mb-8 leading-relaxed">
              우리 동네의 다양한 이야기를 이웃과 함께 나누어요.
            </p>
            <div className="flex justify-center"></div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              srcset="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-2-91a2286453bdf82dea16a7f0ee4ceb9dd325eae0e5a2a9967ba72c344bf8f2fc.webp "
              class="home-main-image-02"
              loading="lazy"
              alt="이웃과 함께하는 동네생활"
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-2-f286322ab98acedf914a05bf77e84c67dcb897c8ccb543e66f6afea9d366d06d.png"
            />
          </div>
        </div>
      </section>
    </>
  );
}
