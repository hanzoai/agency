import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Github, BookOpen, Cloud, Code, Users, Zap, Server, GitBranch, Database, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Platform = () => {
  const features = [
    {
      title: "Local Development",
      description: "Start building on your local machine with our powerful development tools and instant feedback loops.",
      icon: <Code className="h-6 w-6" />,
      link: "https://github.com/hanzoai/platform#local-development"
    },
    {
      title: "Open Source Infrastructure",
      description: "Built on battle-tested open source technologies with full transparency and community support.",
      icon: <GitBranch className="h-6 w-6" />,
      link: "https://github.com/hanzoai/platform#open-source"
    },
    {
      title: "Seamless Cloud Transition",
      description: "Deploy to any cloud provider or on-premises infrastructure with zero vendor lock-in.",
      icon: <Cloud className="h-6 w-6" />,
      link: "https://github.com/hanzoai/platform#cloud-deployment"
    },
    {
      title: "AI Development Toolkit",
      description: "Integrated AI tools and frameworks to accelerate your machine learning workflows.",
      icon: <Zap className="h-6 w-6" />,
      link: "https://github.com/hanzoai/ai-sdk"
    },
    {
      title: "Community-Driven",
      description: "Join thousands of developers building the future of deployment infrastructure together.",
      icon: <Users className="h-6 w-6" />,
      link: "https://discord.gg/CJCyAsm9Vr"
    }
  ];

  const stats = [
    { value: "4.8M+", label: "Deploys per month", trend: "+23%" },
    { value: "150K+", label: "Active developers", trend: "+45%" },
    { value: "99.9%", label: "Uptime SLA", trend: "Stable" },
    { value: "50ms", label: "Avg deploy time", trend: "-12%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hanzo Platform
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              The open-source deployment platform that gives you the power of Vercel with the freedom to run anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="https://github.com/hanzoai/platform" target="_blank">
                <Button size="lg" className="gap-2">
                  <Github className="h-5 w-5" />
                  Get on GitHub
                </Button>
              </Link>
              <Link to="https://docs.hanzo.ai/platform/quickstart" target="_blank">
                <Button size="lg" variant="outline" className="gap-2">
                  Quick Start
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="https://github.com/hanzoai/platform/releases/latest" target="_blank">
                <Button size="lg" variant="outline">
                  Download CLI
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Development Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Everything Starts Local
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {feature.description}
                    </p>
                    <Link 
                      to={feature.link} 
                      target="_blank"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform vs Cloud Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Hanzo Platform vs. Hanzo Cloud
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Hanzo Platform</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Self-hosted, open-source deployment platform
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-green-600" />
                  <span>Run on your infrastructure</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span>Complete data control</span>
                </li>
                <li className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-green-600" />
                  <span>Unlimited customization</span>
                </li>
                <li className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-green-600" />
                  <span>No vendor lock-in</span>
                </li>
              </ul>
              <Link to="https://iam.hanzo.ai/register" target="_blank">
                <Button className="w-full mt-6">Get Started Free</Button>
              </Link>
            </Card>

            <Card className="p-8 border-blue-500">
              <h3 className="text-2xl font-semibold mb-4">Hanzo Cloud</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Fully managed cloud deployment service
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-blue-600" />
                  <span>Zero configuration needed</span>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <span>Global edge network</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-600" />
                  <span>Automatic scaling</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span>Managed security updates</span>
                </li>
              </ul>
              <Link to="/pricing">
                <Button variant="outline" className="w-full mt-6">View Pricing</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Complete AI Engineering Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Complete AI Engineering Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale AI applications in one integrated platform.
          </p>
          <Link to="https://github.com/hanzoai" target="_blank">
            <Button size="lg" variant="outline" className="gap-2">
              <Github className="h-5 w-5" />
              View all components on GitHub
            </Button>
          </Link>
        </div>
      </section>

      {/* Usage Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            4.8M+ deploys per month (and counting)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {stat.label}
                </div>
                <div className={`text-xs mt-2 ${
                  stat.trend.includes('+') ? 'text-green-600' : 
                  stat.trend.includes('-') ? 'text-blue-600' : 
                  'text-gray-500'
                }`}>
                  {stat.trend}
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded">
              <div className="text-center">
                <Zap className="h-16 w-16 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                <p className="text-gray-600 dark:text-gray-300">
                  Real-time metrics visualization coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Building CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Start building locally today
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of developers who are building the future with Hanzo Platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="https://github.com/hanzoai/platform" target="_blank">
              <Button size="lg" className="gap-2">
                <Github className="h-5 w-5" />
                Get on GitHub
              </Button>
            </Link>
            <Link to="https://docs.hanzo.ai" target="_blank">
              <Button size="lg" variant="outline" className="gap-2">
                <BookOpen className="h-5 w-5" />
                Read the Docs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platform;