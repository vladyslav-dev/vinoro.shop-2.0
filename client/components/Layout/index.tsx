import React, { FC, ReactNode } from 'react';
import Head from 'next/head';

import Footer from '../Footer';
import Slider from '../Slider';


export interface LayoutProps {
    children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {

    return (
        <div>
            <Head>
                <title>Vinoro 2.0</title>
                <meta name="keywords" content="next,javascript,nextjs,react" />
                <meta name="description" content="this is youtube tutorial for next" />
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                {/* {description && <meta name="description" content={description}></meta>} */}
            </Head>
            
            <Slider></Slider>
            <div className="container">{children}</div>
            <Footer />
        </div>
    );
}

export default Layout