import { Mail, Globe, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div id="contact" className="bg-neutral-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-10">
          <h2 className="text-base text-primary-400 font-semibold tracking-wide uppercase">Contact</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Get In Touch
          </p>
          <p className="mt-4 max-w-2xl text-xl text-neutral-300 lg:mx-auto">
            Have questions about this project or interested in collaborating?
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-neutral-700">
            <div className="p-6 flex-1">
              <h3 className="text-xl font-semibold text-white">Project Repository</h3>
              <p className="mt-3 text-neutral-300">
                Check out the full source code and documentation for this project on GitHub.
              </p>
              <div className="mt-6">
                <a
                  href="https://github.com/Taiwo-peter/TyLeDeClouds.py.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 focus:ring-offset-neutral-700"
                >
                  View on GitHub
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 -mr-0.5 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-neutral-700">
            <div className="p-6 flex-1">
              <h3 className="text-xl font-semibold text-white">Contact Information</h3>
              <div className="mt-3 space-y-3 text-neutral-300">
                <p className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-primary-400" />
                  contact@tyledeclouds.com
                </p>
                <p className="flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-primary-400" />
                  www.tyledeclouds.com
                </p>
                <p className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary-400" />
                  San Francisco, CA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
