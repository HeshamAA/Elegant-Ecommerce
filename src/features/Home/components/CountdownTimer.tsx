import { Card, Button, Link, useCountdownTimer ,CountdownTimerProps} from "@/features/Home";

export const CountdownTimer = ({
  targetDate,
  title,
  description,
  linkText,
  linkUrl,
}: CountdownTimerProps) => {
  const timeLeft = useCountdownTimer(targetDate);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <div className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto overflow-hidden border-none shadow-xl">
          <div className="grid md:grid-cols-2 bg-gradient-to-br from-card to-muted/80">
            <div className="bg-muted p-8 flex flex-col justify-center">
              <h3 className="text-xl md:text-3xl font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground mb-6">{description}</p>
              <div className="flex justify-between gap-2 mb-6">
                <div className="text-center bg-background shadow-md rounded-lg p-3 w-full">
                  <span className="block text-2xl font-bold">
                    {formatNumber(timeLeft.days)}
                  </span>
                  <span className="text-xs text-muted-foreground">DAYS</span>
                </div>
                <div className="text-center bg-background shadow-md rounded-lg p-3 w-full">
                  <span className="block text-2xl font-bold">
                    {formatNumber(timeLeft.hours)}
                  </span>
                  <span className="text-xs text-muted-foreground">HOURS</span>
                </div>
                <div className="text-center bg-background shadow-md rounded-lg p-3 w-full">
                  <span className="block text-2xl font-bold">
                    {formatNumber(timeLeft.minutes)}
                  </span>
                  <span className="text-xs text-muted-foreground">MINS</span>
                </div>
                <div className="text-center bg-background shadow-md rounded-lg p-3 w-full">
                  <span className="block text-2xl font-bold">
                    {formatNumber(timeLeft.seconds)}
                  </span>
                  <span className="text-xs text-muted-foreground">SECS</span>
                </div>
              </div>
              <Button asChild className="w-full md:w-auto" size="lg">
                <Link to={linkUrl}>{linkText}</Link>
              </Button>
            </div>
            <div className="h-full relative">
              <div className="bg-[url('https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80')] bg-cover bg-center h-full">
                <div className="absolute inset-0 bg-primary/5 backdrop-blur-[1px]"></div>
                <div className="absolute bottom-0 right-0 bg-background/80 backdrop-blur-sm p-3 m-4 rounded-md">
                  <p className="text-sm font-semibold">Up to 70% Off</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CountdownTimer;
