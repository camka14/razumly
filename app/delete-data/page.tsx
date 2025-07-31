export const metadata = {
  title: 'Request Data Deletion - Razumly MVP',
  description: 'Learn how to request deletion of your personal data from Razumly MVP',
};

export default function DataDeletionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Request Data Deletion</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">How to Request Data Deletion</h2>
              <p className="text-lg mb-4">
                If you would like us to delete your personal data from our systems, 
                simply send an email to our support team with your deletion request.
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-800 dark:text-blue-200">
                  Contact Information
                </h3>
                <p className="text-blue-700 dark:text-blue-300">
                  Email: <a 
                    href="mailto:support@razumly.com" 
                    className="font-semibold underline hover:no-underline"
                  >
                    support@razumly.com
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">What to Include in Your Request</h2>
              <p className="mb-4">
                To help us process your request quickly and accurately, please include the following information in your email:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your full name</li>
                <li>The email address associated with your Razumly account</li>
                <li>Subject line: &ldquo;Data Deletion Request&rdquo;</li>
                <li>A clear statement that you want your data deleted</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Sample Email Template</h2>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm">
                <p className="mb-2"><strong>To:</strong> support@razumly.com</p>
                <p className="mb-2"><strong>Subject:</strong> Data Deletion Request</p>
                <p className="mb-4"><strong>Message:</strong></p>
                <div className="ml-4 space-y-2">
                  <p>Hello Razumly Support Team,</p>
                  <p>I am requesting the deletion of all my personal data from your systems.</p>
                  <p>Account Details:</p>
                  <p className="ml-4">- Name: [Your Full Name]</p>
                  <p className="ml-4">- Email: [Your Account Email]</p>
                  <p>Please confirm once my data has been completely removed.</p>
                  <p>Thank you,<br />[Your Name]</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">What Happens Next?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold">We&rsquo;ll Confirm Receipt</h3>
                    <p className="text-gray-600">
                      You&rsquo;ll receive a confirmation email within 1-2 business days acknowledging your request.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold">We&rsquo;ll Process Your Request</h3>
                    <p className="text-gray-600">
                      Our team will locate and securely delete all your personal data from our systems.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold">We&rsquo;ll Confirm Completion</h3>
                    <p className="text-gray-600">
                      You&rsquo;ll receive final confirmation when your data has been completely deleted.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Timeline</h2>
              <p>
                We typically process data deletion requests within **30 days** of receiving them. 
                Complex requests may take longer, but we&rsquo;ll keep you informed of our progress.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Important Notes</h2>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                <li>Data deletion is permanent and cannot be undone</li>
                <li>Some data may be retained if required by law or for legitimate business purposes</li>
                <li>You may need to delete the app from your device separately</li>
                <li>This request is free of charge</li>
              </ul>
            </section>

            <section className="border-t pt-6">
              <h2 className="text-2xl font-semibold mb-4">Questions?</h2>
              <p>
                If you have any questions about the data deletion process or need assistance with your request, 
                don&rsquo;t hesitate to contact us at{' '}
                <a 
                  href="mailto:support@razumly.com" 
                  className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
                >
                  support@razumly.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
