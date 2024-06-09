export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ["/contact", "/resume"]
      },
      sitemap: 'https://jeremydev.codes/sitemap.xml',
    }
  }