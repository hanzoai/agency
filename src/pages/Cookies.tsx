import Footer from '@/components/Footer';

const Cookies = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <main className="pt-32 pb-20 container-custom">
        <h1 className="text-5xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="prose prose-invert max-w-4xl">
          <p className="text-gray-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. What Are Cookies</h2>
            <p className="text-gray-300 mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-300 mb-4">
              Hanzo Agency uses cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing Cookies:</strong> Track your activity to help deliver relevant advertising</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold mb-2 mt-4">Session Cookies</h3>
            <p className="text-gray-300 mb-4">
              These are temporary cookies that expire when you close your browser. We use session cookies to maintain your session state while you navigate our website.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">Persistent Cookies</h3>
            <p className="text-gray-300 mb-4">
              These cookies remain on your device for a set period or until you delete them. We use persistent cookies to remember your preferences for future visits.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">Third-Party Cookies</h3>
            <p className="text-gray-300 mb-4">
              These are set by third-party services that appear on our pages. We use services like Google Analytics to help us understand website usage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Cookie Details</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-gray-300 mb-4">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2">Cookie Name</th>
                    <th className="text-left py-2">Purpose</th>
                    <th className="text-left py-2">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-2">_ga</td>
                    <td className="py-2">Google Analytics tracking</td>
                    <td className="py-2">2 years</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2">_gid</td>
                    <td className="py-2">Google Analytics tracking</td>
                    <td className="py-2">24 hours</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2">authToken</td>
                    <td className="py-2">Authentication status</td>
                    <td className="py-2">Session</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2">preferences</td>
                    <td className="py-2">User preferences</td>
                    <td className="py-2">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Managing Cookies</h2>
            <p className="text-gray-300 mb-4">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>View what cookies are stored on your device</li>
              <li>Delete all or specific cookies</li>
              <li>Block all cookies or third-party cookies</li>
              <li>Set preferences for specific websites</li>
            </ul>
            <p className="text-gray-300 mb-4">
              Please note that disabling cookies may affect the functionality of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Browser-Specific Instructions</h2>
            <p className="text-gray-300 mb-4">
              For information on how to manage cookies in your specific browser, please visit:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Edge</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Updates to This Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have questions about our use of cookies, please contact us at:
              <br />
              Email: privacy@hanzo.ai
              <br />
              Address: San Francisco, CA
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;