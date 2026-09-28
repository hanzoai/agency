import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { buttonModifiers } from '@/lib/button-utils'
import { Button } from '@/components/ui/button'
import { StudyCard, threeStudies } from '@/lib/studies'

const CaseStudyTrio = ({
  studies,
  lede,
}: {
  studies?: StudyCard[]
  lede?: string
}) => {
  const cards = threeStudies(studies)
  return (
    <section className="py-20 bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Client Success Stories</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {lede || 'Damon, Triller, and Bellabeat. A decade of work you can open.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((study) => (
            <Link key={study.id} to={`/case-study/${study.id}`} className="group">
              <div className="relative overflow-hidden rounded-lg h-80 transition-all">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center mb-1">
                    <div className="text-xs text-white/60">{study.industry}</div>
                    <div className="mx-2 text-white/30">•</div>
                    <div className="text-xs font-bold">{study.company}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{study.title}</h3>
                  <span className="inline-flex items-center text-sm font-medium text-accent opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    View case study
                    <ArrowUpRight size={14} className="ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/our-work">
            <Button variant="outline" size="lg" className={buttonModifiers.interactive + ' font-medium'}>
              View all case studies
              <ArrowUpRight size={16} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CaseStudyTrio
