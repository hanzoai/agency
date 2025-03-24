
import { Users, DollarSign, Youtube, Activity } from 'lucide-react';

const KeyMetrics = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 reveal-slide-up">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:scale-[1.02] hover:shadow-md">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mr-4">
            <Users size={24} />
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-1">169M</div>
            <div className="text-primary/70 text-sm">Users Reached</div>
          </div>
        </div>
        <div className="h-2 w-full bg-beige-100 rounded-full overflow-hidden">
          <div className="h-full bg-accent rounded-full" style={{ width: '95%' }}></div>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:scale-[1.02] hover:shadow-md">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mr-4">
            <DollarSign size={24} />
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-1">$60K</div>
            <div className="text-primary/70 text-sm">Ad Spend</div>
          </div>
        </div>
        <div className="h-2 w-full bg-beige-100 rounded-full overflow-hidden">
          <div className="h-full bg-accent rounded-full" style={{ width: '40%' }}></div>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:scale-[1.02] hover:shadow-md">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mr-4">
            <Youtube size={24} />
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-1">100K</div>
            <div className="text-primary/70 text-sm">YouTube Subs in 5 Days</div>
          </div>
        </div>
        <div className="h-2 w-full bg-beige-100 rounded-full overflow-hidden">
          <div className="h-full bg-accent rounded-full" style={{ width: '65%' }}></div>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:scale-[1.02] hover:shadow-md">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mr-4">
            <Activity size={24} />
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-1">82M</div>
            <div className="text-primary/70 text-sm">Monthly Active Users</div>
          </div>
        </div>
        <div className="h-2 w-full bg-beige-100 rounded-full overflow-hidden">
          <div className="h-full bg-accent rounded-full" style={{ width: '80%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default KeyMetrics;
