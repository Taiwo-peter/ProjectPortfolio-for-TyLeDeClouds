import lambda from "@assets/Screenshot EC2 INSCANCE PAGE.png";
import sns from "@assets/Screenshot 2025-05-05 155335.png";
import cloudflare from "@assets/Screenshot 2025-05-05 155239.png";
import architecture from "@assets/Tyledeclouds website architecture_1746779351994.png";
import cloudDashboard from "@assets/Screenshot 2025-05-05 155548_1746779745725.png";
import resourceMonitoring from "@assets/Screenshot 2025-05-05 162838.png";
import networkConfig from "@assets/Screenshot 2025-05-05 154942.png";
import deployment from "@assets/Screenshot 2025-05-05 171442.png";

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
              <h3 className="text-lg font-semibold text-neutral-900">EC2 Instance Configuration</h3>
              <p className="mt-2 text-sm text-neutral-500">AWS EC2 instance running Ubuntu for backend services and application deployments.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={sns} 
              alt="Cloud Services Dashboard" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-neutral-900">Cloud Services Dashboard</h3>
              <p className="mt-2 text-sm text-neutral-500">TyleDeClouds services dashboard showing available cloud consulting options.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={cloudflare} 
              alt="Services Dashboard" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-neutral-900">Cloud Migration Service</h3>
              <p className="mt-2 text-sm text-neutral-500">The cloud migration service interface showing migration options and strategies.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={architecture} 
              alt="Architecture Diagram" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-neutral-900">AWS Architecture Diagram</h3>
              <p className="mt-2 text-sm text-neutral-500">Three-tier architecture diagram showing AWS service integration with load balancing and serverless components.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={cloudDashboard} 
              alt="Cloud Dashboard" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-neutral-900">Resource Management Console</h3>
              <p className="mt-2 text-sm text-neutral-500">AWS resource management console showing VM instances and cloud resource allocation.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={resourceMonitoring} 
              alt="Resource Monitoring Dashboard" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-neutral-900">Performance Monitoring</h3>
              <p className="mt-2 text-sm text-neutral-500">Real-time performance monitoring of cloud resources with visualized metrics and alerts.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={networkConfig} 
              alt="Network Configuration" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-neutral-900">Network Configuration</h3>
              <p className="mt-2 text-sm text-neutral-500">VPC network configuration showing security groups, routing tables, and network ACLs.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={deployment} 
              alt="Application Deployment" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-neutral-900">Continuous Deployment Pipeline</h3>
              <p className="mt-2 text-sm text-neutral-500">AWS CodePipeline configuration for automated deployment of applications with CI/CD integration.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
