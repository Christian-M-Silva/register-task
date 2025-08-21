import { render, screen } from '@testing-library/react'
import { Button } from './Button'

jest.mock("lucide-react/dynamic", () => ({
  DynamicIcon: () => <span>MockIcon</span>,
  iconNames: [],
}));

describe('Button component', () => {
  it('should render all props', () => {
   render(<Button label='Test' colorBackground='blue' colorIcon='blue' icon='camera'/>)

   screen.getByText('Test')
  })
})