import React from "react";
import Helmet from "react-helmet";

import logo from "@/images/dumb.png";
import appleicon57x57 from "@/images/favicon/apple-icon-57x57.png";
import appleicon60x60 from "@/images/favicon/apple-icon-60x60.png";
import appleicon72x72 from "@/images/favicon/apple-icon-72x72.png";
import appleicon76x76 from "@/images/favicon/apple-icon-76x76.png";
import appleicon114x114 from "@/images/favicon/apple-icon-114x114.png";
import appleicon120x120 from "@/images/favicon/apple-icon-120x120.png";
import appleicon144x144 from "@/images/favicon/apple-icon-144x144.png";
import appleicon152x152 from "@/images/favicon/apple-icon-152x152.png";
import appleicon180x180 from "@/images/favicon/apple-icon-180x180.png";
import androidicon192x192 from "@/images/favicon/android-icon-192x192.png";
import favicon32x32 from "@/images/favicon/favicon-32x32.png";
import favicon96x96 from "@/images/favicon/favicon-96x96.png";
import favicon16x16 from "@/images/favicon/favicon-16x16.png";
import msicon144x144 from "@/images/favicon/ms-icon-144x144.png";

import Layout from "@/components/Layout";

const Index = ({ children }) => {
  return (
    <Layout>
      <Helmet>
        <title>Dumb Projects</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Dumb Projects" />
        <meta property="og:title" content="Ridiculous projects from the mind of Jereme Hancock." />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Ridiculous projects from the mind of Jereme Hancock." />
        <meta property="og:url" content="https://dumbprojects.com" />
        <meta property="og:image" content={logo} />
        <meta property="og:site_name" content="dumbprojects.com" />
        <link rel="apple-touch-icon" sizes="57x57" href={appleicon57x57} />
        <link rel="apple-touch-icon" sizes="60x60" href={appleicon60x60} />
        <link rel="apple-touch-icon" sizes="72x72" href={appleicon72x72} />
        <link rel="apple-touch-icon" sizes="76x76" href={appleicon76x76} />
        <link rel="apple-touch-icon" sizes="114x114" href={appleicon114x114} />
        <link rel="apple-touch-icon" sizes="120x120" href={appleicon120x120} />
        <link rel="apple-touch-icon" sizes="144x144" href={appleicon144x144} />
        <link rel="apple-touch-icon" sizes="152x152" href={appleicon152x152} />
        <link rel="apple-touch-icon" sizes="180x180" href={appleicon180x180} />
        <link rel="icon" type="image/png" sizes="192x192" href={androidicon192x192} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
        <link rel="icon" type="image/png" sizes="96x96" href={favicon96x96} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content={msicon144x144} />
        <meta name="theme-color" content="#ffffff" />
        <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
        <meta name="twitter:image" content={logo} />
      </Helmet>
      {children}
    </Layout>
  );
};

export default Index;
