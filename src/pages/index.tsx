import * as React from "react"
import MongoDiagram from "../images/mongo_diagram.svg"

const IndexPage = () => {
  return (
    <main className="text-rockset-gray">
      <title>Home Page</title>
      <section className="w-full h-[var(--above-the-fold-height)] pt-[var(--nav-offset-total)] flex items-center relative">
        <div className="gradientBackground w-full h-full absolute top-0 -z-[11]"></div>
        <div className="wrap grid grid-cols-1 sm:grid-cols-2 auto-rows-fr">
          <article className="flex-1 flex flex-col justify-center space-around pl-[0.375rem] pr-[1.56rem] gap-[1.25rem]">
            <h1 className="text-[3.25rem] text-black font-semibold leading-[4rem]">MongoDB & Rockset:<br/> Best of Both Worlds</h1>
            <span className="text-[1.375rem]">
              If you're using, or thinking about using, MongoDB then you'll know it doesn't run SQL joins. And using $lookup or a denormalized dataset isn't as optimal as an SQL database to handle joins. But there's good news if you're looking for a real-time analytics solution. 
            </span>
            <a className="btn-primary cursor-pointer">Free trial</a>
          </article>
          <div className="flex items-start flex-1 pt-[2.5rem] pl-[2.18rem]">
            <img src={MongoDiagram} className="w-[31.125rem]"/>
          </div>
        </div>
      </section>
      <section className="skewFormSection offsetFormSection w-full relative -z-[1]">
        <div className="absolute blueVerticalGradient w-full h-full -z-10 mt-[var(--skew-offset-margin)]"></div>
        <div className="wrap wrap grid grid-cols-1 sm:grid-cols-2 auto-rows-fr unskewFormSectionContent">
          <div className="flex-1 items-center mt-formOverlapMargin hidden md:flex pr-40">
            <ul className="list-disc flex flex-col gap-5 text-[1.375rem]">
              <li>No need to abandon MongoDB. Rockset syncs with MongoDB and can ingest directly from MongoDB change streams.</li>
              <li>Build in vital real-time analytics. Rockset is custom-designed to deliver analytics for modern data applications.</li>
              <li>Use fully featured SQL on MongoDB. Run low latency queries on data generated seconds before.</li>
            </ul>
          </div>
          <div className="flex items-center justify-start flex-1 pl-5">
            <div className="bg-white w-fit shadow-[0px_4px_24px_rgba(75,38,225,0.3)] rounded-2xl ">
              <form className="flex flex-col items-center p-10 gap-5">
                <h1 className="text-black text-[1.75rem] font-semibold">Get $300 in free credit</h1>
                <input type="text" className="border-[#B8C4D6] h-10 w-[28rem]"></input>
                <input type="text" className="border-[#B8C4D6] h-10 w-[28rem]"></input>
                <input type="text" className="border-[#B8C4D6] h-10 w-[28rem]"></input>
                <input type="text" className="border-[#B8C4D6] h-10 w-[28rem]"></input>
                <input type="text" className="border-[#B8C4D6] h-10 w-[28rem]"></input>
                <input type="text" className="border-[#B8C4D6] h-10 w-[28rem]"></input>
                <input type="text" className="border-[#B8C4D6] h-10 w-[28rem]"></input>
                <input type="text" className="border-[#B8C4D6] h-10 w-[28rem]"></input>
                <input type="submit" value="Submit" className="btn-primary"/>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default IndexPage
