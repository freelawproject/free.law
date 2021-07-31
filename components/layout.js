import Head from 'next/head'
import Navbar from "./navbar"
import {Colophon, Footer, JudgeRibbon} from "./footers";
import {GridImage} from "./widgets";
import buzzfeed from "../public/images/services-logos/x256/buzzfeed-news.png";
import harvardSociology
  from "../public/images/services-logos/x256/harvard-sociology-logo.png";
import gsu from "../public/images/services-logos/x256/gsu.png";
import noacri from "../public/images/services-logos/x256/noacri.png";
import edhec from "../public/images/services-logos/x256/edhec.png";
import oneLegal from "../public/images/services-logos/x256/one-legal.png";
import predicta from "../public/images/services-logos/x256/predicta.png";
import imanage from "../public/images/services-logos/x256/imanage.svg";
import drugPatentWatch
  from "../public/images/services-logos/x256/drugpatentwatch.png";

export function MainColumn({children}){
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
      {children}
    </div>
  )
}


export function MainFullBleedColumn({bgClasses, children}) {
  // let classes = "-ml-4 sm:-ml-6 md:-ml-10 w-full-bleed-4 sm:w-full-bleed-6 md:w-full-bleed-10 "
  // if (bgClasses) {
  //   classes += bgClasses
  // }
  return (
    <section className={bgClasses}>
      <MainColumn>{children}</MainColumn>
    </section>
  )
}


export function PostColumn({children}){
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-10 prose">
      {children}
    </div>
  )
}

export default function Layout({children, home, allPosts}) {
  return (
    <div className="text-gray-800 font-display">
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Navbar allPosts={allPosts}/>

      {children}

      <Footer recentPost={allPosts[0]}/>
      <Colophon/>
      <JudgeRibbon/>
    </div>
  )
}


export function ClientPics({wide}){
  return (
    <div
      className={`grid ${wide ? 
        `grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 lg:gap-16`
      : `grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8`} w-full py-10 items-center`}>
      <GridImage imgProps={{
        "src": buzzfeed,
        "alt": "BuzzFeed news logo",
        "width": "256",
        "height": "32",
        "placeholder": "blur",
      }}/>
      <GridImage imgProps={{
        "src": harvardSociology,
        "alt": "Harvard logo",
        "width": "256",
        "height": "79",
        "placeholder": "blur",
      }}/>
      <GridImage imgProps={{
        "src": gsu,
        "alt": "J. Mack Robinson School of Business at Georgia State University logo",
        "width": "256",
        "height": "102",
        "placeholder": "blur",
      }}/>
      <GridImage imgProps={{
        "src": noacri,
        "alt": "NOACRI logo",
        "width": "256",
        "height": "73",
        "placeholder": "blur",
      }}/>
      <GridImage imgProps={{
        "src": edhec,
        "alt": "EDHEC Business School",
        "width": "256",
        "height": "110",
        "placeholder": "blur",
      }}/>
      <GridImage imgProps={{
        "src": oneLegal,
        "alt": "One Legal's logo",
        "width": "256",
        "height": "52",
        "placeholder": "blur",
      }}/>
      <GridImage imgProps={{
        "src": predicta,
        "alt": "Pre/Dicta logo",
        "width": "256",
        "height": "80",
        "placeholder": "blur",
      }}/>
      <GridImage imgProps={{
        "src": imanage,
        "alt": "iManage logo",
        "width": "256",
        "height": "75",
      }}/>
      <GridImage imgProps={{
        "src": drugPatentWatch,
        "alt": "Drug Patent Watch logo",
        "width": "256",
        "height": "28",
        "placeholder": "blur",
      }}/>
    </div>
  )
}