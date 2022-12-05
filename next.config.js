/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_INT_BASE_URL: process.env.NEXT_PUBLIC_INT_BASE_URL,
        NEXT_PUBLIC_API_FULL: process.env.NEXT_PUBLIC_API_FULL,
        NEXT_PUBLIC_ACCESS_TOKEN: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
        NEXT_PUBLIC_REDIS_HOST: process.env.NEXT_PUBLIC_REDIS_HOST,
        NEXT_PUBLIC_REDIS_PASSWORD: process.env.NEXT_PUBLIC_REDIS_PASSWORD,
        NEXT_PUBLIC_REDIS_PORT: process.env.NEXT_PUBLIC_REDIS_PORT,
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
