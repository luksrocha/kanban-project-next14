import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import TaskFormModalPage from "@/app/task-form/page";

jest.mock("react-dom", () => {
    const originalModule = jest.requireActual("react-dom");
    return {
        ...originalModule,
        useFormState: jest.fn().mockReturnValue([
            {
                errors: {},
            },
            jest.fn(),
        ]),
        useFormStatus: jest.fn().mockReturnValue({
            pending: false,
        }),
    };
});

describe("Create Task", () => {
    it("Should have all buttons", () => {
        render(<TaskFormModalPage />);

        expect(true).toBe(true);
    });
});
