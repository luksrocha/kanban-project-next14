import ModalStructure from "@/components/common/ModalStructure";
import TaskForm from "@/components/taskForm/TaskForm";

const TaskFormModalPage = () => {
    return (
        <ModalStructure>
            <div className="w-80 h-80 bg-red-300 z-50 text-black">
                <TaskForm />
            </div>
        </ModalStructure>
    );
};

export default TaskFormModalPage;
