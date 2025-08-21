import { render, screen } from "@testing-library/react"
import { Input } from "./Input"

describe('Input component', () => {
    it('should render all props', () => {
        render(<Input placeholder="Teste" value={""} change={() => console.log("Teste input")} />)

        screen.getByPlaceholderText('Teste')
    })
})