import Script from "next/script";


export default function DoubleTheDonationPlugin() {
  var DDCONF = {API_KEY: "z1OmNNTB97cVWfz8"};
  return (
    <div id="dd-container">
      <Script src="https://doublethedonation.com/api/js/ddplugin.js" strategy="lazyOnload"/>
      <a href="https://doublethedonation.com/matching-grant-resources/matching-gift-basics/">
        Matching Gift
      </a>
      &nbsp;and&nbsp;
      <a href="https://doublethedonation.com/matching-grant-resources/volunteer-grant-basics/">
        Volunteer Grant
      </a>
      &nbsp;information provided by
      <br/>
      <a href="https://doublethedonation.com">
        <img alt="Powered by Double the Donation" src="https://doublethedonation.com/api/img/powered-by.png"/>
      </a>
    </div>
  );
}
