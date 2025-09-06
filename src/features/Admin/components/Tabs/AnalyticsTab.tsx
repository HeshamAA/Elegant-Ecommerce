import { Card, CardContent, CardHeader, CardTitle } from "@/features/Admin";

const AnalyticsTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Analytics</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$12,345</p>
            <p className="text-sm text-muted-foreground">
              Total sales this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Popular Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Men's Fashion</span>
                <span>45%</span>
              </div>
              <div className="flex justify-between">
                <span>Women's Fashion</span>
                <span>35%</span>
              </div>
              <div className="flex justify-between">
                <span>Sports</span>
                <span>20%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsTab;
