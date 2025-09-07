
import { Card, CardContent, Button, Link } from "@/features/Home";

export const StyleFinderCta = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4" data-os="fade-up">
        <Card className="overflow-hidden border-none shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="bg-[url('https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center min-h-[300px]"></div>
            <CardContent className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Find Your Personal Style</h2>
                <p className="text-muted-foreground mb-6">
                  Take our 2-minute style quiz and discover pieces that perfectly match your personal taste
                  and body type. Get personalized recommendations delivered straight to your inbox.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Personalized style recommendations
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Expert tips for your body type
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Special discounts on your first order
                  </li>
                </ul>
              </div>
              <Button asChild size="lg" className="w-full md:w-auto">
                <Link to="/style-quiz">Take the Style Quiz</Link>
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default StyleFinderCta;
