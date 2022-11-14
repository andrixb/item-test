import React from 'react';
import Head from 'next/head';

export interface MainAppHeaderComponentProps {
    title?: string;
    description?: string;
    favico?: string;
};

export function MainAppHeaderComponent(props: MainAppHeaderComponentProps) {
    const { title, description, favico } = {...props};
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href={favico} />
        </Head>
    );
}

