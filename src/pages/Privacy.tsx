import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <main className="pt-32 pb-20 container-custom">
        <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-4xl">
          <p className="text-gray-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-gray-300 mb-4">
              We collect information you provide directly to us, such as when you request services, create an account, or contact us for support.
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Contact information (name, email, phone number)</li>
              <li>Business information (company name, role, industry)</li>
              <li>Project requirements and specifications</li>
              <li>Payment and billing information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Communicate about products, services, and events</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
            <p className="text-gray-300 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>With service providers who assist in our operations</li>
              <li>To comply with legal obligations</li>
              <li>To protect rights, privacy, safety, or property</li>
              <li>In connection with a business transaction</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="text-gray-300 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
            <p className="text-gray-300 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
            <p className="text-gray-300 mb-4">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
            <p className="text-gray-300 mb-4">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have questions about this Privacy Policy, please contact us at:
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

export default Privacy;