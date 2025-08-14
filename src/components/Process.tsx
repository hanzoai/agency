import React from 'react';
import { Link } from 'react-router-dom';
import { Code, ArrowUpRight, BarChart3, Layers, Zap } from 'lucide-react';

const Process = () => {
  const platforms = [
    { name: 'Enterprise Systems', icon: <Code className="h-6 w-6" /> },
    { name: 'Cloud Platforms', icon: <Zap className="h-6 w-6" /> },
    { name: 'Data Analytics', icon: <BarChart3 className="h-6 w-6" /> },
    { name: 'Web & Mobile', icon: <Layers className="h-6 w-6" /> }
  ];

  return (
    <section id="process" className="section-padding bg-black relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Partnership Approach</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A seamless collaboration that combines human expertise with AI-powered innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          <div className="bg-black/30 p-8 rounded-xl border border-white/10 reveal-slide-up">
            <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold mb-6">1</div>
            <h3 className="text-xl font-bold mb-3">Strategic Discovery</h3>
            <p className="text-white/70">
              We begin with in-depth analysis of your business objectives, market position, and technology needs to establish clear success metrics.
            </p>
          </div>

          <div className="bg-black/30 p-8 rounded-xl border border-white/10 reveal-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold mb-6">2</div>
            <h3 className="text-xl font-bold mb-3">AI-Driven Development</h3>
            <p className="text-white/70">
              Our team combines domain expertise with AI acceleration to rapidly iterate through solutions, continuously refining based on your feedback.
            </p>
          </div>

          <div className="bg-black/30 p-8 rounded-xl border border-white/10 reveal-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold mb-6">3</div>
            <h3 className="text-xl font-bold mb-3">Seamless Deployment</h3>
            <p className="text-white/70">
              We deliver complete solutions with documentation, training, and ongoing support, ensuring you maintain full ownership of all assets and code.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-black p-8 md:p-12 rounded-2xl mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Enterprise-Grade Technology Ecosystem</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center reveal-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mx-auto w-16 h-16 rounded-xl bg-gray-800 flex items-center justify-center mb-3 text-white/80">
                  {platform.icon}
                </div>
                <h4 className="font-medium">{platform.name}</h4>
                <p className="text-sm text-white/60 mt-1">Comprehensive solutions</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/70 mb-4">Our versatile development capabilities extend across the full technology spectrum</p>
            <Link to="/capabilities" className="inline-flex items-center text-primary hover:underline">
              View our technology stack
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-black p-8 md:p-12 rounded-2xl border border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Unlock Unlimited AI Acceleration</h3>
              <p className="text-white/70 mb-6">
                Augment your high-value teams with AI-powered workflows that multiply productivity, enhance capabilities, and drive innovation at unprecedented speed and scale.
              </p>
              <Link to="/solutions" className="inline-flex items-center bg-white text-black hover:bg-white/90 py-3 px-6 rounded-full font-medium transition-colors">
                Accelerate your business
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-black/30 p-4 rounded-lg">
                <div className="bg-blue-600/20 text-blue-400 p-2 rounded-md">
                  <Code className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Custom Enterprise Applications</h4>
                  <p className="text-sm text-white/60">Tailored solutions for complex requirements</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-black/30 p-4 rounded-lg">
                <div className="bg-purple-600/20 text-purple-400 p-2 rounded-md">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">AI Integration Services</h4>
                  <p className="text-sm text-white/60">Intelligent systems that scale with your business</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-black/30 p-4 rounded-lg">
                <div className="bg-emerald-600/20 text-emerald-400 p-2 rounded-md">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Digital Product Innovation</h4>
                  <p className="text-sm text-white/60">From concept to market-ready solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;