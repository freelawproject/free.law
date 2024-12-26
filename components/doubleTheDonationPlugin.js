import Script from "next/script";


export default function DoubleTheDonationPlugin() {
  return (
    <div id="dd-container">
      <Script strategy="beforeInteractive">
        {`window.DDCONF = {API_KEY: "z1OmNNTB97cVWfz8"}`}
      </Script>
      <Script src="https://doublethedonation.com/api/js/ddplugin.js" strategy="afterInteractive"/>
      <a href="https://doublethedonation.com/freelawproject">
        <img alt="FLP Double the Donation page" src="https://doublethedonation.com/api/img/powered-by.png"/>
      </a>
    </div>
  );
}
