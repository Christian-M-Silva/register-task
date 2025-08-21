import { render, screen } from "@testing-library/react"
import { SearchTask } from "./SearchTask"

jest.mock("lucide-react/dynamic", () => ({
  DynamicIcon: () => <span>MockIcon</span>,
  iconNames: [],
}));

describe("SearchTask component", () => {
    it('should render all props', () => {
        render(<SearchTask/>)

        screen.getByPlaceholderText("Nome da tarefa")

    })
})