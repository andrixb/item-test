/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_INT_BASE_URL: process.env.NEXT_PUBLIC_INT_BASE_URL,
        NEXT_PUBLIC_API_FULL: process.env.NEXT_PUBLIC_API_FULL,
        NEXT_PUBLIC_ACCESS_TOKEN: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });
        return config;
    },
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
    }
};

module.exports = nextConfig;
