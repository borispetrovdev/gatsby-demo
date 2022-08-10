import React from "react"

import FacebookIcon from "../images/facebook.svg"
import TwitterIcon from "../images/twitter.svg"
import LinkedInIcon from "../images/linkedin.svg"
import SlackIcon from "../images/slack.svg"
import { Nav } from "./nav"

export const Layout = ({children }) => {
  return (
    <>
      <Nav/>
      <main className="text-rockset-gray bg-white">
        {children}
      </main>

      <footer>
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-4 font-[1rem] text-[#333333] py-[3.75rem] 
                          gap-[2.9375rem] lg:gap-0 text-center lg:text-left">
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
            ).map(({heading , links}, index) => {
              return (
                <dl key={index}>
                  <dt className="text-[#999999] mb-[1.25rem]">{heading}</dt>
                  {links.map(([linkText, href], index) => {
                    return (
                      <dd key={index} className="font-semibold mb-[0.75rem]">
                        <a href={href}>{linkText}</a>
                      </dd>
                    )
                  })}
                </dl>
              );
            })}
            <form className="flex flex-col items-center lg:items-start">
              <h3 className="mb-[0.8125rem]">Follow our stories and unique insights.</h3>
              <input className="text-[0.875rem] h-[2.1875rem] w-full block max-w-[16.625rem]
                                border-[0.054375rem] border-[#D8D8D8] rounded-[0.625rem] mb-[1.25rem]" 
                     type="text" 
                     placeholder="Email Address"></input>
              <input className="block btn bg-[#2400AF] mb-[2.5rem]" type="submit" value="Follow us"/>
              <ul className="flex gap-[0.766875rem]">
                {[
                  [FacebookIcon, 'Facebook', '/'],
                  [TwitterIcon, 'Twitter', '/'],
                  [LinkedInIcon, 'LinkedIn', '/'],
                  [SlackIcon, 'Slack', '/']
                ].map(([imgSrc, altText, href], index) => {
                  return (
                    <li key={index}><a href={href}><img src={imgSrc} alt={altText}/></a></li>
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
              ].map(([linkText, href], index)=> {
                return (
                  <a key={index} href={href}>{linkText}</a>
                )
              })}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}