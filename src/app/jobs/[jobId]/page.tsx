import { mockJobs } from "@/lib/mock-data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

export default function JobDetailsPage({ params }: { params: { jobId: string } }) {
  const job = mockJobs.find((job) => job.id === params.jobId);

  if (!job) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-3xl">{job.position}</CardTitle>
              <CardDescription className="text-xl">{job.companyName}</CardDescription>
            </div>
            <div className="text-right">
                <div className="text-2xl font-bold text-primary">
                    ${job.salaryRange.min / 1000}k - ${job.salaryRange.max / 1000}k
                </div>
                <Badge variant="secondary" className="mt-1">{job.jobType}</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Requirements</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {job.requirements.map((req) => (
                <li key={req}>{req}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Benefits</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {job.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
                Apply before: {job.lastDayToApply.toLocaleDateString()}
            </div>
          <Button size="lg">Apply Now</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
