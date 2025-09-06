import { 
  Link, 
  Button, 
  Skeleton, 
  Input, 
  Search, 
  categories,
  useBlog 
} from "@/features/Blog";





const BlogPage = () => {
  const {
    searchQuery,
    setSearchQuery,
    category,
    data,
    isLoading,
    error,
    handleFilterChange,
    errorMessage,
  } = useBlog();

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive">Error</h1>
          <p className="mt-2 text-elegent-600">
            {errorMessage}
          </p>
          <Button className="mt-4" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">Latest Blog Posts</h1>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex space-x-2 overflow-x-auto pb-2">
          <Button
            variant={category === "" ? "secondary" : "outline"}
            size="sm"
            onClick={() => handleFilterChange("category", "")}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={
                category.name === category.name ? "secondary" : "outline"
              }
              size="sm"
              onClick={() => handleFilterChange("category", category.name)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex flex-col space-y-3">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))
          : data && data.length > 0 ? data.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      {post.category}
                    </span>
                    <span className="text-sm text-elegent-600">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="mb-2 text-xl font-semibold line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="mb-4 text-sm text-elegent-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {typeof post.author === "object" && (
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="h-6 w-6 rounded-full"
                        />
                      )}
                      <span className="text-sm font-medium">
                        {typeof post.author === "object"
                          ? post.author.name
                          : post.author}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More
                    </Button>
                  </div>
                </div>
              </Link>
            )) : null}
      </div>

      {!isLoading && (!data || data.length === 0) && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">No articles found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
