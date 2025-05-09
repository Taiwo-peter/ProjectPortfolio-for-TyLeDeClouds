import iamRoles from "@assets/Screenshot 2025-05-05 152847.png";
import paymentCancelled from "@assets/Screenshot 2025-05-05 155115.png";
import loadBalancer from "@assets/image_1746780718468.png";
import emailVerification from "@assets/Screenshot 2025-05-05 152608.png";

export default function Implementation() {
  return (
    <div id="implementation" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Implementation</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            AWS Cloud Integration
          </p>
          <p className="mt-4 max-w-2xl text-xl text-neutral-500 lg:mx-auto">
            A detailed breakdown of the AWS architecture and technologies used in TyleDeClouds' cloud consulting solutions.
          </p>
        </div>

        <div className="space-y-16">
          {/* Architecture Overview */}
          <div className="border-t border-neutral-200 pt-10">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Architecture Overview</h3>
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="lg:col-span-1">
                <p className="text-lg text-neutral-600 mb-4">
                  This project leverages AWS serverless architecture to create a scalable, reliable order notification system.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                  <li>Server-side: AWS Lambda functions</li>
                  <li>Message queuing: Amazon SQS</li>
                  <li>Load balancing: Elastic Load Balancer</li>
                  <li>Security: IAM roles and Secrets Manager</li>
                  <li>Performance: Cloudflare for CDN and DNS</li>
                </ul>
              </div>
              <div className="mt-5 lg:mt-0 lg:col-span-2">
                <div className="bg-neutral-100 p-6 rounded-lg">
                  <pre className="text-sm overflow-x-auto text-neutral-800 whitespace-pre-wrap">
{`# AWS Services Utilized:
- AWS Lambda for serverless compute
- Amazon SQS for message queuing
- AWS Secrets Manager for credential storage
- Elastic Load Balancing for traffic distribution
- Cloudflare for DNS and performance optimization
- IAM roles for service permissions`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Details */}
          <div className="border-t border-neutral-200 pt-10">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Technical Implementation</h3>
            
            <div className="space-y-8">
              {/* Lambda Function */}
              <div>
                <h4 className="text-xl font-semibold text-neutral-800 mb-2">AWS Lambda Function</h4>
                <p className="text-neutral-600 mb-4">
                  The core of the notification system is an AWS Lambda function written in Python that:
                </p>
                <div className="bg-neutral-100 p-6 rounded-lg">
                  <pre className="text-sm overflow-x-auto text-neutral-800 whitespace-pre-wrap">
{`def get_secret(secret_name):
    """Retrieves a secret from AWS Secrets Manager."""
    
    region_name = os.environ.get("AWS_REGION") # Get the current AWS region
    session = boto3.session.Session()
    client = session.client(service_name="secretsmanager", region_name=region_name)
    
    try:
        get_secret_value_response = client.get_secret_value(SecretId=secret_name)
        # ... secure credential handling
        if 'secretstring' in get_secret_value_response:
            secret = get_secret_value_response['secretstring']
            return json.loads(secret).get('stripe_secret_key')
        else:
            decoded_binary_secret = base64.b64decode(get_secret_value_response['secretbinary'])
            return json.loads(decoded_binary_secret).get('stripe_secret_key')
    except Exception as e:
        print(f"Error retrieving secret '{secret_name}': {e}")
        raise e`}
                  </pre>
                </div>
                <p className="text-neutral-600 mt-4">
                  The Lambda function processes incoming order events, formats the notification content, and sends it via SQS to the email delivery service.
                </p>
              </div>
              
              {/* Load Balancer Setup */}
              <div>
                <h4 className="text-xl font-semibold text-neutral-800 mb-2">Load Balancer Configuration</h4>
                <p className="text-neutral-600 mb-4">
                  The system uses an AWS Elastic Load Balancer to distribute traffic and ensure high availability:
                </p>
                <div className="mt-4">
                  <img src={loadBalancer} alt="Load Balancer Configuration" className="rounded-lg shadow border border-neutral-200 max-w-full" />
                </div>
                <ul className="list-disc pl-5 space-y-2 text-neutral-600 mt-4">
                  <li>Two listeners configured: HTTPS:443 and HTTP:80</li>
                  <li>Path pattern rule for /webhook route to handle incoming webhook calls</li>
                  <li>Health checks configured to ensure system reliability</li>
                  <li>Target groups set up to distribute traffic to Lambda function endpoints</li>
                </ul>
              </div>
              
              {/* IAM Configuration */}
              <div>
                <h4 className="text-xl font-semibold text-neutral-800 mb-2">IAM Permissions & VPC Configuration</h4>
                <p className="text-neutral-600 mb-4">
                  Our AWS infrastructure uses secure IAM roles and VPC configurations to isolate and protect resources:
                </p>
                <div className="mt-4">
                  <img src={iamRoles} alt="IAM Roles and VPC Configuration" className="rounded-lg shadow border border-neutral-200 max-w-full" />
                </div>
                <ul className="list-disc pl-5 space-y-2 text-neutral-600 mt-4">
                  <li>Separate public and private subnets for enhanced security</li>
                  <li>Precise IAM permissions following principle of least privilege</li>
                  <li>Resource tagging for improved organization and cost management</li>
                  <li>Private subnets configured for database and backend services</li>
                </ul>
              </div>
              
              {/* Email Templates */}
              <div>
                <h4 className="text-xl font-semibold text-neutral-800 mb-2">Email Templates</h4>
                <p className="text-neutral-600 mb-4">
                  The system includes pre-configured email templates for different order status notifications:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h5 className="font-medium text-neutral-700 mb-2">Email Verification Template</h5>
                    <img src={emailVerification} alt="Email Verification Template" className="rounded-lg shadow border border-neutral-200 max-w-full" />
                  </div>
                  <div>
                    <h5 className="font-medium text-neutral-700 mb-2">Payment Cancelled Template</h5>
                    <img src={paymentCancelled} alt="Payment Cancelled Email Template" className="rounded-lg shadow border border-neutral-200 max-w-full" />
                  </div>
                </div>
                <p className="text-neutral-600 mt-4">
                  Templates are built using HTML/CSS and dynamically populated with customer and order details for personalized notifications. The system supports multiple templates for different event types such as account verification, order confirmations, payment statuses, and important account notifications.
                </p>
              </div>
            </div>
          </div>
          
          {/* Tools and Technologies */}
          <div className="border-t border-neutral-200 pt-10">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Tools & Technologies</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                <h4 className="font-semibold text-neutral-900">Backend</h4>
                <ul className="mt-2 text-neutral-600 space-y-1">
                  <li>Python 3.12</li>
                  <li>AWS Lambda</li>
                  <li>Boto3 SDK</li>
                  <li>JSON/XML processing</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                <h4 className="font-semibold text-neutral-900">Infrastructure</h4>
                <ul className="mt-2 text-neutral-600 space-y-1">
                  <li>AWS SQS</li>
                  <li>Elastic Load Balancer</li>
                  <li>EC2 instances</li>
                  <li>IAM roles</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                <h4 className="font-semibold text-neutral-900">Security</h4>
                <ul className="mt-2 text-neutral-600 space-y-1">
                  <li>AWS Secrets Manager</li>
                  <li>IAM policies</li>
                  <li>HTTPS encryption</li>
                  <li>Cloudflare WAF</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                <h4 className="font-semibold text-neutral-900">Monitoring</h4>
                <ul className="mt-2 text-neutral-600 space-y-1">
                  <li>CloudWatch Logs</li>
                  <li>Cloudflare Analytics</li>
                  <li>AWS Health Dashboard</li>
                  <li>Custom logging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
