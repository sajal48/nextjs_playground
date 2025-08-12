import { mockJobs } from "@/lib/mock-data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function JobsPage() {
  const now = new Date();
  const availableJobs = mockJobs.filter(
    (job) => job.isApproved && job.lastDayToApply > now
  );

  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Job Listings</h1>
        <Button asChild>
          <Link href="/jobs/new">Post a Job</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableJobs.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <CardTitle>{job.position}</CardTitle>
              <CardDescription>{job.companyName}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{job.jobType}</Badge>
                <span className="text-muted-foreground">
                  ${job.salaryRange.min / 1000}k - ${job.salaryRange.max / 1000}k
                </span>
              </div>
              <div>
                <h4 className="font-semibold">Requirements:</h4>
                <div className="flex flex-wrap gap-1 mt-1">
                  {job.requirements.slice(0, 3).map((req) => (
                    <Badge key={req} variant="outline">{req}</Badge>
                  ))}
                  {job.requirements.length > 3 && <Badge variant="outline">...</Badge>}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/jobs/${job.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
