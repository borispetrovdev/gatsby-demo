import * as React from "react"

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <section className="gradientBackground w-full min-h-abovethefold flex items-center">
        <div className="wrap grid grid-cols-1 sm:grid-cols-2 auto-rows-fr py-5">
          <article className="flex-1 flex items-center pr-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </article>
          <div className="flex items-center justify-center flex-1">
            <div className="bg-pink-300 h-[300px] w-[300px]"></div>
          </div>
        </div>
      </section>
      <section className="w-full relative">
        <div className="absolute skewFormSection blueVerticalGradient w-full h-full -z-10"></div>
        <div className="wrap grid grid-cols-1 sm:grid-cols-2 auto-rows-fr py-5 mt-form">
          <article className="flex-1 flex items-center pr-4 mt-formOverlapMargin">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </article>
          <div className="flex items-center justify-center flex-1">
            <div className="bg-white w-fit shadow-[0px_4px_24px_rgba(75,38,225,0.3)] rounded-2xl flex flex-col items-center p-10 gap-5">
              <div className="text-black text-center">Save $300 Now!</div>
              <input type="text" className="border-[#B8C4D6] h-10 w-[28rem]"></input>
              <input type="text" className="border-[#B8C4D6] h-10 w-[28rem]"></input>
              <input type="text" className="border-[#B8C4D6] h-10 w-[28rem]"></input>
              <input type="text" className="border-[#B8C4D6] h-10 w-[28rem]"></input>
              <input type="text" className="border-[#B8C4D6] h-10 w-[28rem]"></input>
              <input type="text" className="border-[#B8C4D6] h-10 w-[28rem]"></input>
              <input type="text" className="border-[#B8C4D6] h-10 w-[28rem]"></input>
              <input type="text" className="border-[#B8C4D6] h-10 w-[28rem]"></input>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="wrap grid grid-cols-1 sm:grid-cols-2 auto-rows-fr py-5">
          <article className="flex-1 flex items-center pr-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </article>
          <div className="flex items-center justify-center flex-1">
            <div className="bg-pink-300 h-[300px] w-[300px]"></div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default IndexPage
