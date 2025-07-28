// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;



import withPWA from 'next-pwa'

const isDev = process.env.NODE_ENV === 'development'

const nextConfig = {
  // config الخاص بك هنا إن وجد
}

export default withPWA({
  ...nextConfig,
  dest: 'public',
  disable: isDev,
   // لتعطيل PWA في وضع التطوير
})
