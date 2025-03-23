import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="Terms of Service" 
        subtitle="Last updated: May 25, 2023"
      />
      <Breadcrumbs />
      
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
          <h2>Introduction</h2>
          <p>
            Welcome to BMCrafts ("we," "our," or "us"). By accessing our website at bmcrafts.co.uk, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>
          <p>
            If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
          </p>

          <h2>Use License</h2>
          <ol>
            <li>
              Permission is granted to temporarily download one copy of the materials (information or software) on BMCrafts's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              <ol type="a">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on BMCrafts's website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ol>
            </li>
            <li>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by BMCrafts at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
            </li>
          </ol>

          <h2>Services and Products</h2>
          <p>
            BMCrafts offers web development and design services. All services and products are subject to availability, and we reserve the right to refuse service to anyone for any reason at any time.
          </p>
          <p>
            We make every effort to display as accurately as possible the services that we offer. We cannot guarantee that your computer monitor's display of any service will be accurate or identical to the actual service provided.
          </p>

          <h2>Pricing and Payment</h2>
          <p>
            All prices for services provided by BMCrafts are subject to change without notice. We reserve the right at any time to modify or discontinue any service (or any part or content thereof) without notice at any time.
          </p>
          <p>
            We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the service.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information.
          </p>
          <p>
            Any reliance on the material on this site is at your own risk. This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only.
          </p>

          <h2>Disclaimer</h2>
          <p>
            The materials on BMCrafts's website are provided on an 'as is' basis. BMCrafts makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p>
            Further, BMCrafts does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
          </p>

          <h2>Limitations</h2>
          <p>
            In no event shall BMCrafts or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BMCrafts's website, even if BMCrafts or a BMCrafts authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
          <p>
            Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
          </p>

          <h2>Links</h2>
          <p>
            BMCrafts has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by BMCrafts of the site. Use of any such linked website is at the user's own risk.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of United Kingdom and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>

          <h2>Changes to Terms of Service</h2>
          <p>
            We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes.
          </p>
          <p>
            Your continued use of or access to our website following the posting of any changes to these Terms of Service constitutes acceptance of those changes.
          </p>

          <h2>Contact Information</h2>
          <p>
            Questions about the Terms of Service should be sent to us at legal@bmcrafts.co.uk.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService; 