import { Entity , Column ,CreateDateColumn , UpdateDateColumn, PrimaryGeneratedColumn , ManyToOne} from 'typeorm'
import { Project } from './projects'

enum TaskStatus {
    DRAFT = "Draft",
    TODO = "Todo",
    INPROGRESS = "InProgress",
    COMPLETED = "Completed",
    ABANDONED = "Abandoned",
}


enum TaskPriority {
    URGENT = "Urgent",
    HIGH = "High",
    MEDIUM = "Medium",
    LOW = "Low"
}


@Entity('Tasks')
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column("varchar", { length: 200 })
    description: string;

    @Column({
        type: "enum",
        enum: TaskPriority,
        default: TaskPriority.MEDIUM,
    })
    priority: TaskPriority

    @Column({
        type: "enum",
        enum: TaskStatus,
        default: TaskStatus.DRAFT,
    })
    status: TaskStatus

    @Column({ type: 'date'})
    dueAt: Date

    @ManyToOne(() => Project , (project) => project.id)
    projectId: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}