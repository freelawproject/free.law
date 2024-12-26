import Script from "next/script";
import {Spinner} from "./widgets";


export default function DoubleTheDonationPlugin() {
  return (
    <div id="dd-container">
      <Script strategy="beforeInteractive">
        {`window.DDCONF = {API_KEY: "z1OmNNTB97cVWfz8"}`}
      </Script>
      <Script src="https://doublethedonation.com/api/js/ddplugin.js" strategy="afterInteractive"/>
      <div className="w-full flex flex-col justify-center items-center py-10">
        <Spinner/>
        <a href="https://doublethedonation.com/freelawproject">
          <img alt="FLP Double the Donation page" src="https://doublethedonation.com/api/img/powered-by.png"/>
        </a>
      </div>
    </div>
  );
}
