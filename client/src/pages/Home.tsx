import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/components/ui/code-block";
import { Accordion, AccordionItem } from "@/components/Accordion";
import ContactForm from "@/components/ContactForm";
import { Mail, ExternalLink, Code, Github } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-700 to-primary-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">AWS Cloud Integration Project</h1>
            <p className="text-lg mb-6 text-primary-100">
              A serverless application for eCommerce order notification system using AWS Lambda, SQS, and SNS
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" className="bg-white text-primary-700 hover:bg-primary-50" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                Get in Touch
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700" onClick={() => window.open('https://github.com/tyledeclouds/aws-integration', '_blank')}>
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Project Overview</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">What it does</h3>
              <p className="mb-4">
                This project implements a serverless AWS-powered system that handles eCommerce order notifications. 
                When an order is placed, it triggers a Lambda function that processes the order details and sends 
                notifications to customers via email through Amazon SNS.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 mt-6">Key Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Serverless architecture using AWS Lambda</li>
                <li>Message queue processing with Amazon SQS</li>
                <li>Customer notifications via Amazon SNS</li>
                <li>Load balanced architecture for high availability</li>
                <li>Secure credentials management with AWS Secrets Manager</li>
                <li>CloudFront CDN implementation for static content</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Project Screenshots</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Lambda Function */}
              <Card className="overflow-hidden">
                <div className="border-b border-gray-200 p-4">
                  <h3 className="font-medium">AWS Lambda Function</h3>
                </div>
                <div className="p-2">
                  <img 
                    src="./attached_assets/Screenshot%202025-04-16%20180023_1746780877459.png" 
                    alt="AWS Lambda Function Implementation" 
                    className="w-full h-auto rounded border border-gray-200"
                  />
                </div>
                <CardContent className="px-4 py-3 bg-gray-50">
                  <p className="text-sm text-gray-600">
                    Lambda function handling order notifications with Python
                  </p>
                </CardContent>
              </Card>

              {/* Load Balancer */}
              <Card className="overflow-hidden">
                <div className="border-b border-gray-200 p-4">
                  <h3 className="font-medium">Load Balancer Configuration</h3>
                </div>
                <div className="p-2">
                  <img 
                    src="./attached_assets/image_1746780718468.png" 
                    alt="Load Balancer Configuration" 
                    className="w-full h-auto rounded border border-gray-200"
                  />
                </div>
                <CardContent className="px-4 py-3 bg-gray-50">
                  <p className="text-sm text-gray-600">
                    AWS Load Balancer routing traffic between instances
                  </p>
                </CardContent>
              </Card>

              {/* IAM Roles */}
              <Card className="overflow-hidden">
                <div className="border-b border-gray-200 p-4">
                  <h3 className="font-medium">IAM Roles Configuration</h3>
                </div>
                <div className="p-2">
                  <img 
                    src="./attached_assets/Screenshot%202025-05-05%20150903_1746780956521.png" 
                    alt="IAM Roles Configuration" 
                    className="w-full h-auto rounded border border-gray-200"
                  />
                </div>
                <CardContent className="px-4 py-3 bg-gray-50">
                  <p className="text-sm text-gray-600">
                    IAM roles setup for secure service permissions
                  </p>
                </CardContent>
              </Card>

              {/* CloudFront */}
              <Card className="overflow-hidden">
                <div className="border-b border-gray-200 p-4">
                  <h3 className="font-medium">CloudFront Performance</h3>
                </div>
                <div className="p-2">
                  <img 
                    src="./attached_assets/Screenshot%202025-05-05%20162601_1746781060121.png" 
                    alt="CloudFront Performance Analytics" 
                    className="w-full h-auto rounded border border-gray-200"
                  />
                </div>
                <CardContent className="px-4 py-3 bg-gray-50">
                  <p className="text-sm text-gray-600">
                    CloudFront CDN analytics showing performance metrics
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">System Architecture</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              {/* Architecture Diagram */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">System Architecture Diagram</h3>
                <img 
                  src="./attached_assets/Tyledeclouds website architecture_1746779351994.png" 
                  alt="AWS System Architecture Diagram" 
                  className="w-full h-auto rounded mb-4 border border-gray-200"
                />
                <p className="text-sm text-gray-600 italic text-center">
                  Three-tier architecture with AWS service integration for TyleDeClouds Consulting Services
                </p>
              </div>
              
              {/* Components Grid */}
              <h3 className="text-xl font-semibold mb-6">Components</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Lambda Function */}
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-primary-700 mb-2">AWS Lambda</h4>
                  <p className="text-sm">
                    Python-based serverless function that processes orders from SQS and sends notifications via SNS.
                  </p>
                </div>
                
                {/* SQS */}
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-primary-700 mb-2">Amazon SQS</h4>
                  <p className="text-sm">
                    Message queue that buffers order notifications before processing, providing system resilience.
                  </p>
                </div>
                
                {/* SNS */}
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-primary-700 mb-2">Amazon SNS</h4>
                  <p className="text-sm">
                    Notification service that delivers order confirmation emails to customers.
                  </p>
                </div>
                
                {/* SNS */}
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-primary-700 mb-2">Amazon SNS</h4>
                  <p className="text-sm">
                    Notification service that delivers order confirmation emails to customers.
                  </p>
                </div>
                
                {/* EC2 Instances */}
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-primary-700 mb-2">EC2 Instances</h4>
                  <p className="text-sm">
                    Web servers that host the frontend application, deployed in multiple availability zones.
                  </p>
                </div>
                
                {/* Load Balancer */}
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-primary-700 mb-2">Elastic Load Balancer</h4>
                  <p className="text-sm">
                    Distributes incoming traffic across multiple EC2 instances for high availability.
                  </p>
                </div>
                
                {/* CloudFront */}
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-primary-700 mb-2">CloudFront CDN</h4>
                  <p className="text-sm">
                    Content delivery network that caches static assets for faster loading times worldwide.
                  </p>
                </div>
                
                {/* Secrets Manager */}
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-primary-700 mb-2">Secrets Manager</h4>
                  <p className="text-sm">
                    Secure service for storing and managing API keys and sensitive configuration values.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section id="implementation" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Implementation Details</h2>
            
            {/* Tools & Technologies */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-medium text-gray-800 mb-2">Languages</h4>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                        Python 3.12
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                        JavaScript
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                        HTML/CSS
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-medium text-gray-800 mb-2">AWS Services</h4>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                        Lambda
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                        SQS & SNS
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                        EC2 & ELB
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                        CloudFront
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                        Secrets Manager
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-medium text-gray-800 mb-2">Tools</h4>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                        VS Code
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                        GitHub
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                        Boto3 SDK
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                        CloudFormation
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Code Snippets */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Key Code Snippets</h3>
                
                {/* Snippet 1: Lambda Handler */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-2">Lambda Handler Function</h4>
                  <CodeBlock code={`def send_email_notification(order_data):
    """
    Returns:
        None
    """
    # Validate required email parameters
    if not SENDER_EMAIL or not OWNER_EMAIL:
        logger.warning("SENDER_EMAIL or OWNER_EMAIL not configured. Notification email will not be sent.")
        return False
    
    # Get SES client
    ses = boto3.client('ses', region_name=AWS_REGION)
    
    try:
        # Extract order details
        # Process order information from SQS
        order_id = order_data.get('order_id')
        customer_email = order_data.get('email')
        
        # Send email notification
        response = ses.send_email(
            Source=SENDER_EMAIL,
            Destination={'ToAddresses': [customer_email]},
            Message={
                'Subject': {'Data': f'Order Confirmation #{order_id}'},
                'Body': {
                    'Text': {'Data': f'Thank you for your order #{order_id}!'},
                    'Html': {'Data': render_email_template(order_data)}
                }
            }
        )
        
        logger.info(f"Email sent successfully to {customer_email}, MessageId: {response['MessageId']}")
        return True
        
    except Exception as e:
        logger.error(f"Error sending email: {str(e)}")
        return False`} />
                </div>
                
                {/* Snippet 2: Secret Manager */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">AWS Secrets Manager Integration</h4>
                  <CodeBlock code={`def get_secret(secret_name):
    """Retrieves a secret from AWS Secrets Manager."""
    
    region_name = os.environ.get("AWS_REGION")  # Get the current AWS region
    session = boto3.session.Session()
    client = session.client(service_name='secretsmanager', region_name=region_name)
    
    try:
        get_secret_value_response = client.get_secret_value(SecretId=secret_name)
    except Exception as e:
        print(f"Error retrieving secret '{secret_name}': {e}")
        raise e
    else:
        if 'SecretString' in get_secret_value_response:
            secret = get_secret_value_response['SecretString']
            return json.loads(secret).get('stripe_secret_key')
        else:
            decoded_binary_secret = base64.b64decode(get_secret_value_response['SecretBinary'])
            return json.loads(decoded_binary_secret).get('stripe_secret_key')`} />
                </div>
              </CardContent>
            </Card>
            
            {/* Implementation Process Accordion */}
            <Card>
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold">Development Process</h3>
              </div>
              
              <Accordion>
                <AccordionItem title="1. Planning & Architecture Design">
                  <p className="text-gray-700">
                    Started by mapping out the complete system architecture, identifying all required AWS services 
                    and their interactions. Created initial diagrams and documentation to guide the implementation process.
                  </p>
                </AccordionItem>
                
                <AccordionItem title="2. Backend Development">
                  <p className="text-gray-700">
                    Developed the Lambda functions to process orders and send notifications. Integrated with SQS 
                    for message queuing and SNS for email delivery. Implemented error handling and logging for better debugging.
                  </p>
                </AccordionItem>
                
                <AccordionItem title="3. Frontend Development">
                  <p className="text-gray-700">
                    Created the user interface for the order submission and tracking system. Built responsive HTML 
                    templates for email notifications. Implemented client-side validation for the order form.
                  </p>
                </AccordionItem>
                
                <AccordionItem title="4. Infrastructure Deployment">
                  <p className="text-gray-700">
                    Set up the EC2 instances in multiple availability zones. Configured the load balancer for traffic 
                    distribution. Deployed CloudFront for static content delivery. Established proper IAM roles and security groups.
                  </p>
                </AccordionItem>
                
                <AccordionItem title="5. Testing & Optimization">
                  <p className="text-gray-700">
                    Conducted comprehensive testing of the entire system. Simulated high-load scenarios to verify 
                    scaling capabilities. Optimized Lambda function performance and CloudFront caching for better speed and efficiency.
                  </p>
                </AccordionItem>
              </Accordion>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5 text-primary-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a href="mailto:contact@tyledeclouds.com" className="text-primary-600 hover:text-primary-700">
                        contact@tyledeclouds.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <Github className="w-5 h-5 text-primary-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <a 
                        href="https://github.com/tyledeclouds" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        github.com/tyledeclouds
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <ExternalLink className="w-5 h-5 text-primary-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">Website</h3>
                      <a 
                        href="https://tyledeclouds.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        tyledeclouds.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h3 className="font-medium mb-4">Quick Message</h3>
                  <ContactForm />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
