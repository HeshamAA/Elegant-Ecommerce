import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  Link,
  blogs,
} from "@/features/Home";

export const BlogPreview = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <div>
            <h2
              className="text-3xl font-bold mb-2"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              Style Guide
            </h2>
            <p
              className="text-muted-foreground"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
            >
              Tips, trends and inspiration from our fashion experts
            </p>
          </div>
          <Button
            variant="outline"
            asChild
            className="mt-4 md:mt-0"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="600"
          >
            <Link to="/blog">View All Articles</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <Card
              key={blog.id}
              className="overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={200 * index}
              data-aos-duration="800"
            >
              <div
                className="aspect-[16/9] overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay={250 * index}
                data-aos-duration="800"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div
                  className="flex justify-between items-center mb-2"
                  data-aos="fade-up"
                  data-aos-delay={300 * index}
                  data-aos-duration="600"
                >
                  <p className="text-xs text-muted-foreground">{blog.date}</p>
                  <p className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {blog.category}
                  </p>
                </div>
                <CardTitle
                  data-aos="fade-up"
                  data-aos-delay={350 * index}
                  data-aos-duration="600"
                >
                  {blog.title}
                </CardTitle>
                <CardDescription
                  data-aos="fade-up"
                  data-aos-delay={400 * index}
                  data-aos-duration="600"
                >
                  {blog.excerpt}
                </CardDescription>
              </CardHeader>
              <CardFooter
                className="flex justify-between"
                data-aos="fade-up"
                data-aos-delay={450 * index}
                data-aos-duration="600"
              >
                <Button variant="ghost" asChild>
                  <Link to={`/blog/${blog.id}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
