import * as React from "react"

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <section className="w-full bg-slate-400">
        <div className="wrap grid grid-cols-1 sm:grid-cols-2 auto-rows-fr py-5">
          <article className="flex-1 flex items-center pr-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </article>
          <div className="flex items-center justify-center flex-1">
            <div className="bg-pink-300 h-[300px] w-[300px]"></div>
          </div>
        </div>
      </section>
      <section className="w-full bg-amber-100">
        <div className="wrap grid grid-cols-1 sm:grid-cols-2 auto-rows-fr py-5">
          <article className="flex-1 flex items-center pr-4">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </article>
          <div className="flex items-center justify-center flex-1">
            <div className="bg-white h-[300px] w-[300px] rounded-2xl p-5">
              <div className="text-black text-center">Save $300 Now!</div>
              <ul className="list-disc list-inside">
                <li>item 1</li>
                <li>item 1</li>
                <li>item 1</li>
                <li>item 1</li>
                <li>item 1</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default IndexPage
