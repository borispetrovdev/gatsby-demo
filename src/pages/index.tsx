import * as React from "react"
import MongoDiagram from "../images/mongo-diagram.svg"
import MongoDiagram2 from "../images/mongo-diagram-2.svg"
import ConnectorImage from "../images/connector.svg"
import NoDataPrepImage from "../images/no-data-prep.svg"
import SqlSupportImage from "../images/sql-support.svg"
import QuoteImage from "../images/quote.svg"
import FacebookIcon from "../images/facebook.svg"
import TwitterIcon from "../images/twitter.svg"
import LinkedInIcon from "../images/linkedin.svg"
import SlackIcon from "../images/slack.svg"

const IndexPage = () => {
  return (
    <main className="text-rockset-gray">
      <title>Home Page</title>
      <section className={`gradientBackground w-full lg:h-[var(--above-the-fold-height)] pt-[var(--nav-offset-total)] 
                           flex items-center relative`}>
        <div className="wrap grid grid-cols-1 lg:grid-cols-2 auto-rows-fr">
          <article className={`flex-1 flex flex-col justify-center space-around pl-[0.375rem] lg:pl-0
                               text-center lg:text-left lg:pr-[1.56rem] gap-[1.1875rem] lg:gap-[1.25rem] items-center lg:items-start`}>
            <h1 className="text-[2rem] lg:text-[3.25rem] text-black font-semibold lg:leading-[125%]">MongoDB & Rockset:<br/> Best of Both Worlds</h1>
            <span className="text-[1.125rem] lg:text-[1.375rem]">
              If you're using, or thinking about using, MongoDB then you'll know it doesn't run SQL joins. And using $lookup or a denormalized dataset isn't as optimal as an SQL database to handle joins. But there's good news if you're looking for a real-time analytics solution. 
            </span>
            <a className="btn bg-coral">Free trial</a>
          </article>
          <div className="flex items-start flex-1 pt-[2.5rem] lg:pl-[2.18rem]">
            <img src={MongoDiagram} className="w-[31.125rem]"/>
          </div>
        </div>
      </section>
      <section className="skewFormSection blueVerticalGradient w-full relative mb-[var(--skew-offset)]">
        <div className="wrap grid grid-cols-1 lg:grid-cols-2 auto-rows-fr unskewFormSectionContent">
          <div className="flex-1 items-center hidden lg:flex pr-40">
            <ul className="list-disc flex flex-col gap-5 text-[1.375rem] pl-[1.3rem]">
              <li>No need to abandon MongoDB. Rockset syncs with MongoDB and can ingest directly from MongoDB change streams.</li>
              <li>Build in vital real-time analytics. Rockset is custom-designed to deliver analytics for modern data applications.</li>
              <li>Use fully featured SQL on MongoDB. Run low latency queries on data generated seconds before.</li>
            </ul>
          </div>
          <div className="flex items-center justify-start flex-1 pl-[2.5rem] translateFormUp">
            <div className="bg-white w-fit shadow-[0rem_.25rem_1.5rem_rgba(75,38,225,0.3)] rounded-2xl ">
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
                <input type="submit" value="Submit" className="btn bg-coral"/>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="translate-x-0"> {/* Intentional no-op translate-x; fixes an overlapping issue */}
        <div className="wrap flex flex-col lg:flex-row justify-center text-center gap-[2.5rem] text-[1.125rem] mb-[6.75rem]">
          {[[ConnectorImage, 'Simple connector that uses MongoDB CDC.'],
            [NoDataPrepImage, 'Reduce efforts and resources required to build analytics.'],
            [SqlSupportImage, 'Use SQL and joins to make data queries easier.']
           ].map(([imgSrc, text]) => {
              return (
                <div className="flex flex-1 flex-col items-center px-[1.875rem]">
                  <img src={imgSrc}/>
                  {text}
                </div>
              )})}
        </div>
      </section>
      <section className="testimonialSectionGradient text-white">
        <div className="wrap">
          <div className="mx-[6.68rem] grid grid-cols-1 md:grid-cols-2 auto-rows-fr pt-[6.5rem] pb-[7rem]">
            <div className="flex-1 flex items-center">
              <div className="relative flex flex-col gap-[1rem]">
                <img src={QuoteImage} className="absolute top-0 left-0 translate-x-[-65%] translate-y-[-32%]"/>
                <span className="font-semibold text-[1.75rem]">
                  Rockset fits all the requirements that we have for a new kind of database. It's serverless, real-time, provides a common API like SQL, and is able to ingest event data easily
                </span>
                <span className="text-[1.125rem]">
                  Name & Role, Company Name
                </span>
              </div>
            </div>
            <div className="flex justify-center flex-1 pl-[7.5rem]">
              <img src={MongoDiagram2}/>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white">
        <div className="wrap">
          <div className="max-w-[61.5rem] mx-auto py-[5.9rem] text-center">
            <div className="knowMoreBox flex flex-col items-center justify-center py-[3.5rem] px-[10.875rem]">
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
      <section>
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-4 font-[1rem] text-[#333333] py-[3.75rem]">
            {([
              {
                heading: 'Product', 
                links: [
                  ['Technology', '/'], 
                  ['Pricing', '/'],
                ]
              },
              {
                heading: 'Resources', 
                links: [
                  ['Blog', '/'], 
                  ['Resources', '/'],
                  ['Documentation', '/'],
                ]
              },
              {
                heading: 'Company', 
                links: [
                  ['About', '/'], 
                  ['Customers', '/'],
                  ['Careers', '/'],
                  ['News', '/'],
                  ['Contact', '/'],
                ]
              },
              ]
            ).map(({heading , links}) => {
              return (
                <dl>
                  <dt className="text-[#999999] mb-[1.25rem]">{heading}</dt>
                  {links.map(([linkText, href]) => {
                    return (
                      <dd className="font-semibold mb-[0.75rem]">
                        <a href={href}>{linkText}</a>
                      </dd>
                    )
                  })}
                </dl>
              );
            })}
            <form>
              <h3 className="mb-[0.8125rem]">Follow our stories and unique insights.</h3>
              <input className="text-[0.875rem] h-[2.1875rem] w-full block border-[0.054375rem] border-[#D8D8D8] rounded-[0.625rem] mb-[1.25rem]" type="text" placeholder="Email Address"></input>
              <input className="block btn bg-[#2400AF] mb-[2.5rem]" type="submit" value="Follow us"/>
              <ul className="flex gap-[0.766875rem]">
                {[
                  [FacebookIcon, 'Facebook', '/'],
                  [TwitterIcon, 'Twitter', '/'],
                  [LinkedInIcon, 'LinkedIn', '/'],
                  [SlackIcon, 'Slack', '/']
                ].map(([imgSrc, altText, href]) => {
                  return (
                    <li><a href={href}><img src={imgSrc} alt={altText}/></a></li>
                  );
                })}
              </ul>
            </form>
          </div>
          <hr className="mt-[0.625rem]"/>
          <div className="flex justify-between text-[#999999] text-[0.875rem] my-[2.3125rem]">
            <span>
              Copyright ©2022 Rockset • 100 S Ellsworth Ave Suite 100 • San Mateo, CA 94401
            </span>
            <div className="flex justify-between gap-[1.8125rem] underline">
              {[
                ['Terms', '/'],
                ['Privacy', '/'],
                ['DPA', '/'],
                ['Disclosure Policy', '/']
              ].map(([linkText, href])=> {
                return (
                  <a href={href}>{linkText}</a>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default IndexPage
