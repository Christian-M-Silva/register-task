import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import { ModalAddTask } from "./ModalAddTask"

jest.mock("lucide-react/dynamic", () => ({
    DynamicIcon: () => <span>MockIcon</span>,
    iconNames: [],
}));

describe('ModalAddTask component', () => {
    it('should open modal when click button Adicionar tarefa', () => {
        render(<ModalAddTask />)

        fireEvent.click(screen.getByText("Adicionar tarefa"))
        screen.getByText("Adicionar tarefas")
    })

    it('should closed modal when click button cancelar', () => {
        render(<ModalAddTask />)

        fireEvent.click(screen.getByText("Adicionar tarefa"))
        const cancelButton = screen.getByText("Cancelar")
        fireEvent.click(cancelButton)

        expect(cancelButton).not.toBeInTheDocument()
    })

    it('should closed modal when click button adicionar', () => {
        render(<ModalAddTask />)

        fireEvent.click(screen.getByText("Adicionar tarefa"))
        const addButton = screen.getByText("Adicionar")
        fireEvent.click(addButton)

        expect(addButton).not.toBeInTheDocument()
    })
})