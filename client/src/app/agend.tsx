/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WqEdpRrjPcb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

export default function Component() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader className="flex flex-row items-center space-y-0">
        <CardTitle>Agendados</CardTitle>
        <Button className="ml-auto" variant="secondary">
          Novo Cliente
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Cliente</TableHead>
              <TableHead>Serviço</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Horário</TableHead>
              <TableHead className="text-right w-[100px]">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="font-medium">Alice Johnson</div>
                </div>
              </TableCell>
              <TableCell>Consultation</TableCell>
              <TableCell>2022-06-23</TableCell>
              <TableCell>10:00 AM</TableCell>
              <TableCell className="flex gap-2 justify-end w-[100px]">
                <Button className="h-8 w-8" size="icon" variant="outline">
                  <FileEditIcon />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button className="h-8 w-8" size="icon" variant="outline">
                  <TrashIcon />
                  <span className="sr-only">Delete</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="font-medium">Bob Smith</div>
                </div>
              </TableCell>
              <TableCell>Checkup</TableCell>
              <TableCell>2022-06-24</TableCell>
              <TableCell>11:30 AM</TableCell>
              <TableCell className="flex gap-2 justify-end w-[100px]">
                <Button className="h-8 w-8" size="icon" variant="outline">
                  <FileEditIcon />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button className="h-8 w-8" size="icon" variant="outline">
                  <TrashIcon />
                  <span className="sr-only">Delete</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="font-medium">Ella Williams</div>
                </div>
              </TableCell>
              <TableCell>Styling</TableCell>
              <TableCell>2022-06-25</TableCell>
              <TableCell>2:00 PM</TableCell>
              <TableCell className="flex gap-2 justify-end w-[100px]">
                <Button className="h-8 w-8" size="icon" variant="outline">
                  <FileEditIcon  />
                </Button>
                <Button className="h-8 w-8" size="icon" variant="outline">
                  <TrashIcon  />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function FileEditIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg

      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
