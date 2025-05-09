import lambda from "@assets/Screenshot 2025-04-16 180023_1746780877459.png";
import sns from "@assets/Screenshot 2025-05-05 151737_1746781006878.png";
import cloudflare from "@assets/Screenshot 2025-05-05 162601_1746781060121.png";

export default function Screenshots() {
  return (
    <div className="bg-neutral-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 text-center mb-8">
          Project Screenshots
        </h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={lambda} 
              alt="AWS Lambda function code" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-neutral-900">Lambda Function</h3>
              <p className="mt-2 text-sm text-neutral-500">AWS Lambda function for processing order notifications using Python.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={sns} 
              alt="AWS SNS configuration" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-neutral-900">SNS Notification Queue</h3>
              <p className="mt-2 text-sm text-neutral-500">Message queue configuration for handling order events and notifications.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={cloudflare} 
              alt="Cloudflare configuration" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-neutral-900">Cloudflare Integration</h3>
              <p className="mt-2 text-sm text-neutral-500">Performance monitoring and DNS management for the application.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
