import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="Privacy Policy" 
        subtitle="Last updated: May 25, 2023"
      />
      <Breadcrumbs />
      
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
          <h2>Introduction</h2>
          <p>
            BMCrafts ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by BMCrafts.
          </p>
          <p>
            This Privacy Policy applies to our website, and its associated subdomains (collectively, our "Service") alongside our application, BMCrafts. By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.
          </p>

          <h2>Definitions and key terms</h2>
          <p>
            For this Privacy Policy:
          </p>
          <ul>
            <li><strong>Cookie:</strong> small amount of data generated by a website and saved by your web browser. It is used to identify your browser, provide analytics, remember information about you such as your language preference or login information.</li>
            <li><strong>Company:</strong> when this policy mentions "Company," "we," "us," or "our," it refers to BMCrafts, that is responsible for your information under this Privacy Policy.</li>
            <li><strong>Country:</strong> where BMCrafts or the owners/founders of BMCrafts are based, in this case is United Kingdom.</li>
            <li><strong>Customer:</strong> refers to the company, organization or person that signs up to use the BMCrafts Service to manage the relationships with your consumers or service users.</li>
            <li><strong>Device:</strong> any internet connected device such as a phone, tablet, computer or any other device that can be used to visit BMCrafts and use the services.</li>
            <li><strong>Personal Data:</strong> any information that directly, indirectly, or in connection with other information allows for the identification or identifiability of a natural person.</li>
            <li><strong>Service:</strong> refers to the service provided by BMCrafts as described in the relative terms and on this platform.</li>
            <li><strong>Third-party service:</strong> refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you.</li>
            <li><strong>Website:</strong> BMCrafts's site, which can be accessed via this URL: bmcrafts.co.uk</li>
            <li><strong>You:</strong> a person or entity that is registered with BMCrafts to use the Services.</li>
          </ul>

          <h2>Information We Collect</h2>
          <p>
            We collect information from you when you visit our website, register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form.
          </p>
          <ul>
            <li>Name / Username</li>
            <li>Email Addresses</li>
            <li>Phone Numbers</li>
            <li>Job Titles</li>
            <li>Billing Addresses</li>
            <li>Debit/credit card numbers</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect in various ways, including to:
          </p>
          <ul>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
            <li>For compliance with our legal obligations, to resolve disputes, and to enforce our agreements</li>
          </ul>

          <h2>GDPR Privacy</h2>
          <p>
            We are a Data Controller of your information. BMCrafts legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context in which we collect the information:
          </p>
          <ul>
            <li>BMCrafts needs to perform a contract with you</li>
            <li>You have given BMCrafts permission to do so</li>
            <li>Processing your personal information is in BMCrafts legitimate interests</li>
            <li>BMCrafts needs to comply with the law</li>
          </ul>
          <p>
            BMCrafts will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
          </p>
          <p>
            If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us.
          </p>
          <p>
            In certain circumstances, you have the following data protection rights:
          </p>
          <ul>
            <li>The right to access, update or to delete the information we have on you.</li>
            <li>The right of rectification.</li>
            <li>The right to object.</li>
            <li>The right of restriction.</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            We use cookies to improve your experience on our site and to show you relevant advertising. A cookie is a small text file that is stored on your computer or other internet connected device in order to identify your browser, provide analytics, remember information about you such as your language preference or login information. For more information about our use of cookies, please see our Cookie Policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul>
            <li>By email: privacy@bmcrafts.co.uk</li>
            <li>By visiting this page on our website: bmcrafts.co.uk/contact</li>
            <li>By phone number: +44 (0) 123 456 7890</li>
            <li>By mail: 123 Web Street, Digital City, UK</li>
          </ul>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 