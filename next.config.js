/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        NEXT_PUBLIC_EXT_HOSTNAME: process.env.NEXT_PUBLIC_EXT_HOSTNAME,
        NEXT_PUBLIC_INT_BASE_URL: process.env.NEXT_PUBLIC_INT_BASE_URL,
        NEXT_PUBLIC_API_FULL: process.env.NEXT_PUBLIC_API_FULL,
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });
        return config;
    },
};

module.exports = nextConfig
