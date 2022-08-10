import * as React from "react"
import MongoDiagram from "../images/mongo-diagram.svg"
import MongoDiagram2 from "../images/mongo-diagram-2.svg"
import ConnectorImage from "../images/connector.svg"
import NoDataPrepImage from "../images/no-data-prep.svg"
import SqlSupportImage from "../images/sql-support.svg"
import QuoteImage from "../images/quote.svg"
import { Helmet } from 'react-helmet';

const IndexPage = () => {
  return (<>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
    <section className={`gradientBackground w-full pt-[var(--nav-offset-total)] 
                          flex items-center relative`}>
      <div className={`wrap grid grid-cols-1 lg:grid-cols-2 
                        mt-[1.6875rem] mb-[12.0625rem]
                        lg:mt-[5.6875rem] lg:mb-[8.1875rem]`}>
        <article className={`flex-1 flex flex-col justify-center space-around
                              text-center lg:text-left 
                              px-[clamp(0.625rem,-1.7903rem+10.3053vw,4rem)] lg:pr-[1.56rem] lg:pl-[0.375rem]
                              gap-[1.1875rem] lg:gap-[1.25rem] 
                              items-center lg:items-start`}>
          <h1 className="text-black font-semibold lg:mb-[1.25rem] leading-[125%]
                        text-[clamp(2rem,1.1054rem+3.8168vw,3.25rem)] 
                      lg:text-[clamp(2.247rem,0.5753rem+2.9719vw,3.25rem)]">
            MongoDB & Rockset:<br/> Best of Both Worlds
          </h1>
          <span className="paragraph-text-responsive">
            If you're using, or thinking about using, MongoDB then you'll know it doesn't run SQL joins. And using $lookup or a denormalized dataset isn't as optimal as an SQL database to handle joins. But there's good news if you're looking for a real-time analytics solution. 
          </span>
          <a className="btn bg-coral">Free trial</a>
        </article>
        <div className="mx-auto lg:mx-0 flex-1 pt-[2.5rem] lg:pl-[2.18rem]">
          <img src={MongoDiagram} />
        </div>
      </div>
    </section>
    <section className="blueVerticalGradient w-full relative 
                        origin-top-left skew-y-[var(--skew-angle)]">
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 
                      origin-top-left -skew-y-[var(--skew-angle)]">
        <div className="flex-1 items-center hidden lg:flex pr-[clamp(1.75rem,-12rem+24vw,10rem)]">
          <ul className="list-disc flex flex-col gap-5 paragraph-text-responsive pl-[1.3rem]">
            <li>No need to abandon MongoDB. Rockset syncs with MongoDB and can ingest directly from MongoDB change streams.</li>
            <li>Build in vital real-time analytics. Rockset is custom-designed to deliver analytics for modern data applications.</li>
            <li>Use fully featured SQL on MongoDB. Run low latency queries on data generated seconds before.</li>
          </ul>
        </div>
        <div className="flex items-center flex-1 
                        justify-center lg:justify-start
                        lg:pl-[1.5rem] 2xl:pl-[2.5rem] 
                        mt-[clamp(-8rem,-6.5687rem+-6.1069vw,-10rem)] lg:mt-[-11rem]">
          <div className="bg-white shadow-[0rem_.25rem_1.5rem_rgba(75,38,225,0.3)] rounded-[.625rem] w-full max-w-[min(100%,32rem)]">
            <form className="main-form flex flex-col items-start 
                              p-[clamp(1.25rem,0.8099rem+1.8779vw,2.5rem)]
                              gap-5">
              <h1 className="text-black font-semibold self-center
                             text-[clamp(1.5rem,1.321rem+0.763vw,1.75rem)] 
                          lg:text-[clamp(1.5rem,1.083rem+0.741vw,1.75rem)]">
                Get $300 in free credit
              </h1>
                <label>
                  Email
                  <input type="text"/>
                </label>
                <label>
                  First name
                  <input type="text"/>
                </label>
                <label>
                  Last name
                  <input type="text"/>
                </label>
                <label>
                  Job title
                  <input type="text"/>
                </label>
                <label>
                  Industry
                  <select className="text-black">
                    <option value={undefined}>Please select</option>
                  </select>
                </label>
                <input type="submit" value="Submit" className="btn bg-coral self-center"/>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section className="translate-x-0 mt-[2.375rem] lg:mt-[8rem]"> {/* Intentional no-op translate-x; fixes an overlapping issue */}
      <div className="wrap flex flex-col lg:flex-row justify-center text-center gap-[2.5rem] text-[1.125rem] mb-[5.5rem] lg:mb-[6.75rem]">
        {[[ConnectorImage, 'Simple connector that uses MongoDB CDC.'],
          [NoDataPrepImage, 'Reduce efforts and resources required to build analytics.'],
          [SqlSupportImage, 'Use SQL and joins to make data queries easier.']
          ].map(([imgSrc, text], index) => {
            return (
              <div key={index} className="flex flex-1 flex-col items-center px-[1.875rem]">
                <img src={imgSrc}/>
                {text}
              </div>
            )})}
      </div>
    </section>
    <section className="testimonialSectionGradient text-white">
      <div className="wrap">
        <div className="lg:mx-[3rem] 2xl:mx-[6.68rem] grid grid-cols-1 lg:grid-cols-2 py-[5rem] gap-[3.5rem] lg:gap-0 lg:py-[7rem]">
          <div className="flex-1 relative mx-[2rem] lg:mx-0">
            <img src={QuoteImage} className="absolute top-0 left-0 translate-x-[-35%] translate-y-[-40%]"/>
            <div className="flex flex-col gap-[1rem] lg:ml-[1rem]">
              <span className="font-semibold text-[1.75rem]">
                Rockset fits all the requirements that we have for a new kind of database. It's serverless, real-time, provides a common API like SQL, and is able to ingest event data easily
              </span>
              <span className="text-[1.125rem]">
                Name & Role, Company Name
              </span>
            </div>
          </div>
          <div className="flex flex-1 lg:pl-[3.5rem] 2xl:pl-[7.5rem] justify-center">
            <img src={MongoDiagram2}/>
          </div>
        </div>
      </div>
    </section>
    <section className="text-white">
      <div className="wrap">
        <div className="max-w-[61.5rem] mx-auto pt-[5.9rem] lg:pb-[5.9rem] text-center">
          <div className="knowMoreBox flex flex-col items-center justify-center py-[3.5rem] px-[1.875rem] md:px-[4rem] lg:px-[8rem] 2xl:px-[10.875rem]">
            <span className="font-semibold text-[2.125rem] pb-[.8125rem]">
              Want to know more?
            </span>
            <span className="text-[1.125rem] mb-[1.375rem]">
              Want to know more about how to Join Data in MongoDB without the benefit of SQL? Check out our outline to get a feel for its strengths and weaknesses.
            </span>
            <a className="btn border-white border-2">CTA button here</a>
          </div>

        </div>
      </div>
    </section>
  </>
  )
}

export default IndexPage
