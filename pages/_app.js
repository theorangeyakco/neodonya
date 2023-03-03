import React from "react";
import Head from "next/head";

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Neodonya | Where business meets Metaverse</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="title" content="Neodonya | Where business meets Metaverse"/>
<meta name="description" content="Neodonya is a leading metaverse company that specializes in building virtual worlds for various industries. Our team of experts creates immersive and interactive environments for use cases such as employee onboarding, warehouse training, and product demonstrations.

We understand that each client has unique needs, and our virtual environments are tailored to meet your specific business objectives. Our cutting-edge technologies ensure that we create high-quality and engaging metaverse solutions.

Our expertise in the metaverse domain has helped clients across various industries achieve their business goals. With Neodonya, you can expect a customized virtual world that meets your requirements, improves employee training, and provides an unparalleled experience for your audience.

Neodonya is a leading metaverse company that builds immersive virtual worlds for diverse industries. Our experts specialize in creating interactive experiences for employee onboarding, warehouse training, and product demonstrations. Our customized metaverse solutions leverage cutting-edge technologies to achieve your business objectives. Partner with us today for a bespoke virtual world that sets your business apart. Contact us to learn more about our services."/>

<meta property="og:type" content="website"/>
<meta property="og:url" content="https://neodonya.com"/>
<meta property="og:title" content="Neodonya | Where business meets Metaverse"/>
<meta property="og:description" content="Neodonya is a leading metaverse company that specializes in building virtual worlds for various industries. Our team of experts creates immersive and interactive environments for use cases such as employee onboarding, warehouse training, and product demonstrations.

We understand that each client has unique needs, and our virtual environments are tailored to meet your specific business objectives. Our cutting-edge technologies ensure that we create high-quality and engaging metaverse solutions.

Our expertise in the metaverse domain has helped clients across various industries achieve their business goals. With Neodonya, you can expect a customized virtual world that meets your requirements, improves employee training, and provides an unparalleled experience for your audience.

Neodonya is a leading metaverse company that builds immersive virtual worlds for diverse industries. Our experts specialize in creating interactive experiences for employee onboarding, warehouse training, and product demonstrations. Our customized metaverse solutions leverage cutting-edge technologies to achieve your business objectives. Partner with us today for a bespoke virtual world that sets your business apart. Contact us to learn more about our services."/>
<meta property="og:image" content="https://i.imgur.com/EP0yz75.png"/>

<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://neodonya.com"/>
<meta property="twitter:title" content="Neodonya | Where business meets Metaverse"/>
<meta property="twitter:description" content="Neodonya is a leading metaverse company that specializes in building virtual worlds for various industries. Our team of experts creates immersive and interactive environments for use cases such as employee onboarding, warehouse training, and product demonstrations.

We understand that each client has unique needs, and our virtual environments are tailored to meet your specific business objectives. Our cutting-edge technologies ensure that we create high-quality and engaging metaverse solutions.

Our expertise in the metaverse domain has helped clients across various industries achieve their business goals. With Neodonya, you can expect a customized virtual world that meets your requirements, improves employee training, and provides an unparalleled experience for your audience.

Neodonya is a leading metaverse company that builds immersive virtual worlds for diverse industries. Our experts specialize in creating interactive experiences for employee onboarding, warehouse training, and product demonstrations. Our customized metaverse solutions leverage cutting-edge technologies to achieve your business objectives. Partner with us today for a bespoke virtual world that sets your business apart. Contact us to learn more about our services."/>
<meta property="twitter:image" content="https://i.imgur.com/EP0yz75.png"></meta>

      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
