
const TestimonialSection = () => {
  return (
    <div className="my-16 bg-beige-100 rounded-2xl p-10 relative overflow-hidden reveal">
      <div className="absolute top-0 right-0 text-[150px] leading-none font-bold text-beige-200 -mt-10 -mr-5">"</div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-xl md:text-2xl italic text-primary mb-6">
          "TrillerFest transformed our user acquisition strategy. Hanzo's AI-driven approach helped us reach millions of users at a fraction of what we would have spent with traditional marketing."
        </p>
        <div className="flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-full mr-4"></div>
          <div className="text-left">
            <div className="font-bold">Mike Lu</div>
            <div className="text-primary/70">CEO at Triller</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
