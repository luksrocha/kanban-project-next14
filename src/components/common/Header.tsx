import Link from "next/link";

const Header = () => {
    return (
        <div className="bg-gray-900 w-full text-white min-h-16">
            <div className="max-w-screen-2xl flex justify-between items-center min-h-16 mx-auto">
                <span>Kanban</span>
                <nav>
                    <ul>
                        <li className="p-2 w-32 flex justify-center items-center bg-cyan-300 rounded-xl text-black ">
                            <Link href="/task-form">Create Task</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
