import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Steven L",
    title: "Co-founder & CTO, Finch",
    avatar: "SL",
    quote:
      "As a startup, the flexibility, speed, and quality of Hanzo's designs are fantastic. They have saved us the need to recruit and hire a full-time designer.",
  },
  {
    name: "Mike H",
    title: "Founder & CEO at AdLib",
    avatar: "MH",
    quote:
      "Had a great experience redesigning marketing assets with Rich and Hanzo. Their work is really premium and made a huge difference.",
  },
  {
    name: "Matthew D",
    title: "Founder & CEO at Data Daddy",
    avatar: "MD",
    quote:
      "We connected with Rich. Impressed by their growth-focused approach and commitment to results, we chose Hanzo and look forward to ongoing collaboration.",
  },
  {
    name: "Danny K",
    title: "Founder, EZ-Oil",
    avatar: "DK",
    quote:
      "It's been a wonderful experience working with Hanzo. They offer great flexibility and quality work, truly exceeding our expectations. A premium, yet approachable choice.",
  },
  {
    name: "Laura Liles",
    title: "Founder of House of Her Coaching Programme",
    avatar: "LL",
    quote:
      "I really enjoyed working with Matt and his team. They were very professional and happy to work with me until my vision came alive. I now have amazing graphics and a great membership portal that myself and my customers love. Awesome.",
  },
  {
    name: "Gavin Brown",
    title: "Founder of Speak With Impact, former Scottish Politician",
    avatar: "GB",
    quote:
      "Matt and his team are great to work with and get impressive results. They are dedicated, innovative and always go the extra mile. Strong recommendation.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-beige-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4 text-primary/70 font-medium uppercase tracking-wide reveal">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">
            Hear from the founders and executives we've worked with:
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card reveal-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
              </div>
              <p className="text-primary/80 mb-6 text-lg">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-beige-200 flex items-center justify-center font-medium mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-primary/70">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center reveal flex justify-center gap-4">
          <a href="#pricing" className="btn-primary">
            Subscriptions
          </a>
          <Link to="/case-studies" className="btn-secondary">
            Get Unlimited
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
