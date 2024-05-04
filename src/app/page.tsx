import CardsCollum from "@/components/home/CardsCollum/CardsCollum";
import TaskForm from "@/components/taskForm/TaskForm";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex gap-5">
            <p>
                <Link href="/task-form">Redirect to task form</Link>
            </p>
            <CardsCollum />
            <CardsCollum />
            <TaskForm />
        </div>
    );
}
