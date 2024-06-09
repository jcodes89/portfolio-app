export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ["/contact", "/resume", "/cdn-cgi"]
      },
      sitemap: 'https://jeremydev.codes/sitemap.xml',
    }
  }