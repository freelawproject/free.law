import Script from "next/script";
import {Spinner} from "./widgets";
import {useState} from "react";


export default function DoubleTheDonationPlugin() {
  const [showWarning, setShowWarning] = useState(false);
  setTimeout(() => setShowWarning(true), 6000);
  const baseClasses = "transition-opacity ease-in-out delay-1000";
  const classes = showWarning ? baseClasses : `${baseClasses} opacity-0`;
  return (
    <div id="dd-container">
      <Script strategy="beforeInteractive">
        {`window.DDCONF = {API_KEY: "z1OmNNTB97cVWfz8"}`}
      </Script>
      <Script
        src="https://doublethedonation.com/api/js/ddplugin.js"
        onLoad={() => {
          const initPlugin = () => {
            if (window.doublethedonation) {
              window.doublethedonation.plugin = window.doublethedonation;
            }
          };
          initPlugin();
        }}
        strategy="afterInteractive"
      />
      <div className="w-full flex flex-col justify-center items-center py-10">
        <Spinner />
        <a href="https://doublethedonation.com/freelawproject">
          <img
            alt="FLP Double the Donation page"
            src="https://doublethedonation.com/api/img/powered-by.png"
          />
        </a>
        <div className={classes}>
          This is taking longer than expected, please try refreshing the page.
        </div>
      </div>
    </div>
  );
}
