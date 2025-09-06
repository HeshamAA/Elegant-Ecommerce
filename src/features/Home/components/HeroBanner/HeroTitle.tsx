export const HeroTitle = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] animate-slideUp">
        <span className="text-foreground">World of </span>
        <span className="gradient-text">Fashion</span>
        <br />
        <span className="text-foreground">&amp; Beauty</span>
      </h1>
      <p
        className="text-xl lg:text-2xl leading-relaxed  text-muted-foreground"
        
      >
        Discover our latest collection of premium fashion items and beauty products
      </p>
    </div>
  )
}
