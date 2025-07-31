export const metadata = {
  title: 'Privacy Policy - Razumly MVP',
  description: 'Privacy Policy for Razumly MVP Sports Event Management App',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                Welcome to Razumly MVP (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our sports event management application and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Account Information:</strong> Name, email address, and profile information you provide when creating an account</li>
                <li><strong>Event Data:</strong> Information about sports events you create, join, or participate in</li>
                <li><strong>Usage Data:</strong> Information about how you use our app, including features accessed and time spent</li>
                <li><strong>Device Information:</strong> Device type, operating system, and app version</li>
                <li><strong>Location Data:</strong> Approximate location for finding nearby events (only with your permission)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p>Your data stays with us and is used solely for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Providing and maintaining our sports event management services</li>
                <li>Enabling you to create, join, and manage sports events</li>
                <li>Facilitating communication between event organizers and participants</li>
                <li>Improving our app&rsquo;s functionality and user experience</li>
                <li>Sending you important updates about your events and account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security and Storage</h2>
              <p>
                <strong>Your data remains entirely with us and under our control.</strong> We do not sell, rent, or share your personal information with third parties for their marketing purposes. We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encrypted data transmission and storage</li>
                <li>Secure servers with restricted access</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal data on a need-to-know basis</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Sharing</h2>
              <p>
                We do not share your personal information with third parties, except in the following limited circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share specific information</li>
                <li><strong>Event Participants:</strong> Basic profile information visible to other participants in events you join</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Service Providers:</strong> Trusted partners who help us operate our services (under strict confidentiality agreements)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal data we hold about you</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to the processing of your personal data</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
              <p>
                We retain your personal information only as long as necessary to provide our services and fulfill the purposes outlined in this policy. When you delete your account, we will delete your personal data within 30 days, except where retention is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Children&rsquo;s Privacy</h2>
              <p>
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &ldquo;Last updated&rdquo; date. Your continued use of our services after changes are posted constitutes acceptance of the new policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <p><strong>Email:</strong> support@razumly.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
