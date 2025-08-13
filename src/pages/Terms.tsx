import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <main className="pt-32 pb-20 container-custom">
        <h1 className="text-5xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-4xl">
          <p className="text-gray-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing and using Hanzo Agency services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Services</h2>
            <p className="text-gray-300 mb-4">
              Hanzo Agency provides creative, design, development, and consulting services. The specific services will be outlined in individual project agreements or statements of work.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Payment Terms</h2>
            <p className="text-gray-300 mb-4">
              Payment terms will be specified in individual project agreements. Standard terms include net 30 days from invoice date unless otherwise specified.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              Upon full payment, all deliverables and intellectual property rights transfer to the client, except for pre-existing materials and third-party components which remain with their respective owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Confidentiality</h2>
            <p className="text-gray-300 mb-4">
              Both parties agree to maintain the confidentiality of any proprietary information received during the course of the business relationship.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              Hanzo Agency's liability shall be limited to the total fees paid for the specific service in question. We are not liable for any indirect, incidental, or consequential damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Termination</h2>
            <p className="text-gray-300 mb-4">
              Either party may terminate services with 30 days written notice. Client is responsible for payment of all work completed up to the termination date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
            <p className="text-gray-300 mb-4">
              These terms shall be governed by and construed in accordance with the laws of California, United States.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              For questions about these Terms of Service, please contact us at:
              <br />
              Email: legal@hanzo.ai
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

export default Terms;