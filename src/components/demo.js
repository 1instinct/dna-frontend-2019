import React from "react";
import { Helmet } from "react-helmet";

const Demo = () => [
  <Helmet key="meta">
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Baby Phat" />
    <meta property="og:description" content="Baby Phat by Kimora Lee Simmons" />
    <meta property="og:url" content="http://www.babyphat.com" />
    <meta property="og:site_name" content="Baby Phat" />
    <meta
      property="article:publisher"
      content="http://www.facebook.com/BabyPhatFashions/"
    />
    <meta property="article:section" content="General" />
    <meta
      property="article:published_time"
      content="2017-04-13T15:00:03-04:00"
    />
    <meta property="og:image" content="windowblue/bp-window-logo-blue.png" />
    <meta property="og:image:width" content="960" />
    <meta property="og:image:height" content="960" />
  </Helmet>,
  <h1 key="content">Demo Page</h1>
];

export default Demo;
