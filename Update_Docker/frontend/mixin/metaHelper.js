export default {
  data() {
    return {
    }
  },
  methods: {
    commonMeta({meta_title, meta_description, header_logo, api_base, site_url, styling, enable_pixel, pixel_id}) {
      const domain = site_url?.replace(/^https?:\/\//, '')
      const path = site_url?.replace(/\/+$/, '') + this.$route.path


      let script = []
      let noscript = []

      if(enable_pixel){
        script = [{
            innerHTML: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixel_id}');
            fbq('track', 'PageView');
            fbq('track', 'AddToCart');
            fbq('track', 'AddToWishlist');
            fbq('track', 'CompleteRegistration');
            fbq('track', 'InitiateCheckout');
            fbq('track', 'Lead');
            fbq('track', 'Search');
            fbq('track', 'Contact');
          `,
          }]

        noscript = [{
            innerHTML: `
            <img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=964344231338752&ev=PageView&noscript=1"
            />
          `,
          }]
      }

      return {
        title: meta_title,
        htmlAttrs: {
          lang: 'en'
        },
        meta: [
          {charset: 'utf-8'},
          {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1'
          },
          {hid: 'description', name: 'description', content: meta_description},
          {
            hid: 'og:title',
            name: 'og:title',
            content: `${domain} | ${meta_title}`,
            'data-rh': "true"
          },
          {hid: 'og:type', name: 'og:type', content: 'website', 'data-rh': "true"},
          {hid: 'robots', name: 'robots', content: 'all', 'data-rh': "true"},
          {hid: 'og:url', name: 'og:url', content: path, 'data-rh': "true"},
          {
            hid: 'og:image', name: 'og:image', 'xmlns:og': "http://opengraphprotocol.org/schema/",
            content: header_logo
          },
          {
            hid: 'og:description', name: 'og:description', 'xmlns:og': "http://opengraphprotocol.org/schema/",
            content: meta_description
          }
        ],
        link: [
          {rel: 'icon', type: 'image/png', href: '/favicon.png'},
          {rel: 'canonical', path},
          {rel: 'dns-prefetch', href: api_base},
          {
            rel: 'preload',
            as: 'font',
            href:
              `https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600&display=swap`
          }
        ],
        style: [
          { cssText: styling, type: 'text/css' }
        ],
        script: script,
        noscript: noscript
      }
    },
    generatingMeta(name, content) {
      return {
        hid: name,
        name: name,
        content: content
      }
    }
  }
}
