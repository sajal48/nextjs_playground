import { mockApplications, mockJobs, mockUsers } from "@/lib/mock-data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ApplicationStatus } from "@/lib/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function MyApplicationsPage() {
  // Assuming user with id 'user-1' is logged in
  const currentUser = mockUsers.find(user => user.id === 'user-1');

  if (!currentUser) {
    return <div>User not found</div>;
  }

  const userApplications = mockApplications.filter(
    (app) => app.applicantId === currentUser.id
  );

  const getStatusBadgeVariant = (status: ApplicationStatus) => {
    switch (status) {
      case 'Applied':
        return 'default';
      case 'In Review':
        return 'secondary';
      case 'Approved':
        return 'default'; // Should be a success variant, but we don't have one. Using default for now.
      case 'Declined':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  return (
    <div className="container mx-auto py-12">
      <Card>
        <CardHeader>
          <CardTitle>My Applications</CardTitle>
          <CardDescription>
            Here is a list of jobs you have applied to.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Position</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Applied On</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userApplications.map((app) => {
                const job = mockJobs.find((j) => j.id === app.jobId);
                return (
                  <TableRow key={app.id}>
                    <TableCell className="font-medium">{job?.position}</TableCell>
                    <TableCell>{job?.companyName}</TableCell>
                    <TableCell>{app.appliedAt.toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusBadgeVariant(app.status)}>
                        {app.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
