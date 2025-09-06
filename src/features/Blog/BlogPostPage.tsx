import { 
  useParams, 
  Link, 
  useGetBlogPostByIdQuery, 
  Button, 
  Skeleton 
} from "@/features/Blog";

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: post, isLoading, error } = useGetBlogPostByIdQuery(Number(id));

  if (error) {
    const errorMessage = 'status' in error 
      ? JSON.stringify(error.data)
      : 'message' in error 
        ? error.message 
        : 'An error occurred';

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive">Error</h1>
          <p className="mt-2 ">{errorMessage}</p>
          <Button
            className="mt-4"
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <Skeleton className="mb-8 h-12 w-3/4" />
          <Skeleton className="mb-4 h-64 w-full" />
          <Skeleton className="mb-4 h-4 w-full" />
          <Skeleton className="mb-4 h-4 w-5/6" />
          <Skeleton className="mb-4 h-4 w-4/6" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold ">Post Not Found</h1>
          <p className="mt-2 ">
            The blog post you are looking for does not exist.
          </p>
          <Button className="mt-4" asChild>
            <Link to="/blog">Return to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 flex items-center text-sm ">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span>{post.title}</span>
        </div>

        <article>
          <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>

          <div className="mb-6 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">
                {typeof post.author === "object"
                  ? post.author.name
                  : post.author}
              </span>
              <span className="text-">•</span>
              <span className="text-sm ">{post.date}</span>
            </div>
            <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
              {post.category}
            </span>
          </div>

          <div className="mb-8 overflow-hidden rounded-lg">
            <img
              src={post.image}
              alt={post.title}
              className="h-[400px] w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;
