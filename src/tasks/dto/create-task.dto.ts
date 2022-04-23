export class CreateTaskDto {
  title: string;
  description: string;
  priority: string;
  status: string;
  dueAt: Date;
  projectId: number;
}
