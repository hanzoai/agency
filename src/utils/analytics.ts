// Analytics utility for tracking ecommerce events with Google Analytics and Facebook Pixel

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Product data structure for analytics
interface ProductData {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity?: number;
  variant?: string;
  currency?: string;
}

// Enhanced Ecommerce Events
export const analytics = {
  // Track page views with enhanced data
  trackPageView: (pagePath: string, pageTitle: string) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: pagePath,
          page_title: pageTitle,
        });
      }

      // Facebook Pixel
      if (window.fbq) {
        window.fbq('track', 'PageView');
      }
    }
  },

  // Track product views
  trackProductView: (product: ProductData) => {
    if (typeof window !== 'undefined') {
      // Google Analytics Enhanced Ecommerce
      if (window.gtag) {
        window.gtag('event', 'view_item', {
          currency: product.currency || 'USD',
          value: product.price,
          items: [{
            item_id: product.id,
            item_name: product.name,
            item_category: product.category,
            price: product.price,
            quantity: 1
          }]
        });
      }

      // Facebook Pixel
      if (window.fbq) {
        window.fbq('track', 'ViewContent', {
          content_ids: [product.id],
          content_name: product.name,
          content_category: product.category,
          value: product.price,
          currency: product.currency || 'USD',
        });
      }
    }
  },

  // Track add to cart (selecting a credit pack)
  trackAddToCart: (product: ProductData) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', 'add_to_cart', {
          currency: product.currency || 'USD',
          value: product.price * (product.quantity || 1),
          items: [{
            item_id: product.id,
            item_name: product.name,
            item_category: product.category,
            price: product.price,
            quantity: product.quantity || 1
          }]
        });
      }

      // Facebook Pixel
      if (window.fbq) {
        window.fbq('track', 'AddToCart', {
          content_ids: [product.id],
          content_name: product.name,
          content_type: 'product',
          value: product.price * (product.quantity || 1),
          currency: product.currency || 'USD',
        });
      }
    }
  },

  // Track checkout initiation
  trackBeginCheckout: (products: ProductData[], totalValue: number) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', 'begin_checkout', {
          currency: 'USD',
          value: totalValue,
          items: products.map(product => ({
            item_id: product.id,
            item_name: product.name,
            item_category: product.category,
            price: product.price,
            quantity: product.quantity || 1
          }))
        });
      }

      // Facebook Pixel
      if (window.fbq) {
        window.fbq('track', 'InitiateCheckout', {
          content_ids: products.map(p => p.id),
          contents: products.map(p => ({
            id: p.id,
            quantity: p.quantity || 1
          })),
          num_items: products.reduce((sum, p) => sum + (p.quantity || 1), 0),
          value: totalValue,
          currency: 'USD',
        });
      }
    }
  },

  // Track purchase completion
  trackPurchase: (
    transactionId: string,
    products: ProductData[],
    totalValue: number,
    tax?: number,
    shipping?: number
  ) => {
    if (typeof window !== 'undefined') {
      // Google Analytics Enhanced Ecommerce
      if (window.gtag) {
        window.gtag('event', 'purchase', {
          transaction_id: transactionId,
          value: totalValue,
          tax: tax || 0,
          shipping: shipping || 0,
          currency: 'USD',
          items: products.map(product => ({
            item_id: product.id,
            item_name: product.name,
            item_category: product.category,
            price: product.price,
            quantity: product.quantity || 1
          }))
        });
      }

      // Facebook Pixel
      if (window.fbq) {
        window.fbq('track', 'Purchase', {
          content_ids: products.map(p => p.id),
          contents: products.map(p => ({
            id: p.id,
            quantity: p.quantity || 1
          })),
          num_items: products.reduce((sum, p) => sum + (p.quantity || 1), 0),
          value: totalValue,
          currency: 'USD',
        });
      }
    }
  },

  // Track subscription events
  trackSubscribe: (
    planId: string,
    planName: string,
    value: number,
    predicted_ltv?: number
  ) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', 'subscribe', {
          currency: 'USD',
          value: value,
          predicted_ltv: predicted_ltv,
          items: [{
            item_id: planId,
            item_name: planName,
            item_category: 'subscription',
            price: value,
            quantity: 1
          }]
        });
      }

      // Facebook Pixel
      if (window.fbq) {
        window.fbq('track', 'Subscribe', {
          value: value,
          currency: 'USD',
          predicted_ltv: predicted_ltv,
        });
      }
    }
  },

  // Track custom events
  trackCustomEvent: (eventName: string, parameters: any) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', eventName, parameters);
      }

      // Facebook Pixel
      if (window.fbq) {
        window.fbq('trackCustom', eventName, parameters);
      }
    }
  },

  // Track user registration/signup
  trackSignUp: (method: string = 'email') => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', 'sign_up', {
          method: method
        });
      }

      // Facebook Pixel
      if (window.fbq) {
        window.fbq('track', 'CompleteRegistration', {
          content_name: 'User Registration',
          status: true
        });
      }
    }
  },

  // Track login
  trackLogin: (method: string = 'email') => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', 'login', {
          method: method
        });
      }

      // Facebook Pixel
      if (window.fbq) {
        window.fbq('track', 'CustomEvent', {
          event_name: 'Login',
          method: method
        });
      }
    }
  },

  // Track search
  trackSearch: (searchTerm: string) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', 'search', {
          search_term: searchTerm
        });
      }

      // Facebook Pixel
      if (window.fbq) {
        window.fbq('track', 'Search', {
          search_string: searchTerm
        });
      }
    }
  },

  // Track form submissions
  trackFormSubmit: (formName: string, formData?: any) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', 'generate_lead', {
          currency: 'USD',
          value: 0,
          form_name: formName,
          ...formData
        });
      }

      // Facebook Pixel
      if (window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: formName,
          ...formData
        });
      }
    }
  }
};

// Initialize Enhanced Ecommerce
export const initializeAnalytics = () => {
  if (typeof window !== 'undefined') {
    // Set up Enhanced Ecommerce for Google Analytics
    if (window.gtag) {
      window.gtag('set', {
        'currency': 'USD',
        'country': 'US'
      });
    }

    // Log initialization
    console.log('Analytics initialized with GA4 and Facebook Pixel');
  }
};
