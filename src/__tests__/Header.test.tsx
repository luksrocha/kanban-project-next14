import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Header from "@/components/common/Header";
import "@testing-library/jest-dom";
import mockRouter from "next-router-mock";

const nextRouterMock = require("next-router-mock");

jest.mock("next/router", () => nextRouterMock);

jest.mock("next/navigation", () => {
    const { useRouter } = nextRouterMock;
    const usePathname = () => {
        const router = useRouter();
        return router.pathname;
    };

    const useSearchParams = () => {
        const router = useRouter();
        return new URLSearchParams(router.query);
    };

    return {
        useRouter,
        usePathname,
        useSearchParams,
    };
});

describe("Header Tests", () => {
    it("Should Have Kanban and Create task button", () => {
        // Arrange
        render(<Header />);

        // Act
        const kanbanText = screen.getByText("Kanban");
        const createTaskButton = screen.getByText(/create task/i);

        // Assert
        expect(kanbanText).toBeInTheDocument();
        expect(createTaskButton).toBeInTheDocument();
    });

    it("Should redirect to /create-task page", async () => {
        render(<Header />);

        const createTaskButton = screen.getByText(/create task/i);

        fireEvent.click(createTaskButton);
    });
});
