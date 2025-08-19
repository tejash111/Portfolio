// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["encrypted-tbn0.gstatic.com","static.beebom.com", ], // <-- add this line
      
    },
  };
  
  module.exports = nextConfig;
  