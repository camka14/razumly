import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Razumly MVP
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Join and organize sports events with ease
          </p>
          
          {/* App Download Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Download Our App</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.razumly.mvp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={64}
                  className="h-16 w-auto"
                  priority
                />
              </a>
              <a
                href="https://apps.apple.com/app/razumly-mvp/id123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  width={200}
                  height={64}
                  className="h-16 w-auto"
                  priority
                />
              </a>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Join Events</h3>
                <p className="text-gray-600">Find and participate in sports events near you</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Organize Events</h3>
                <p className="text-gray-600">Create and manage your own sports events</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Tournament Management</h3>
                <p className="text-gray-600">Run tournaments with ease</p>
              </div>
            </div>
          </div>

          {/* Deep Link Examples */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Deep Link Examples</h2>
            <div className="space-y-2 text-sm font-mono bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <div>Event: <code>razumly://mvp/event/12345</code></div>
              <div>Tournament: <code>razumly://mvp/tournament/67890</code></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
