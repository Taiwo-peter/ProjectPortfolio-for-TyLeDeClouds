import { Mail, Lock, Database, BarChart } from "lucide-react";

export default function Features() {
  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Serverless Order Processing System
          </p>
          <p className="mt-4 max-w-2xl text-xl text-neutral-500 lg:mx-auto">
            A complete end-to-end solution for handling e-commerce order notifications with AWS services.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-neutral-900">Order Notification System</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-neutral-500">
                Automatically sends email notifications to customers when their orders are processed, cancelled, or have status changes using AWS SQS and Lambda.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Lock className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-neutral-900">Secure Processing</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-neutral-500">
                Integration with AWS Secrets Manager to securely store and retrieve API keys and credentials without exposing sensitive information.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Database className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-neutral-900">Load Balanced Architecture</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-neutral-500">
                Utilizes AWS Elastic Load Balancing to distribute incoming traffic across multiple targets, ensuring high availability and fault tolerance.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <BarChart className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-neutral-900">Performance Monitoring</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-neutral-500">
                Integrated with Cloudflare for DNS management, WAF protection, and performance analytics to ensure optimal operation and security.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
