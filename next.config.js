/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'fastui.cltpstatic.com',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
