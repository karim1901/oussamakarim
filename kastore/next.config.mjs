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



   register: true,
   skipWaiting: true,
   // أضف هذا التكوين لتجاهل بعض الملفات
   runtimeCaching: [
     {
       urlPattern: /\/_next\/app-build-manifest\.json$/,
       handler: 'NetworkOnly' // تجاهل التخزين المسبق لهذا الملف
     }
   ]
})


