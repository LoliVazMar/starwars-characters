import { render, screen } from '@testing-library/react';
import App from './App';
import Button from './components/Atom/Button';

test('render restart button', () => {
  render(<Button />)
  const renderButton = screen.getByRole("button", { name: /Reiniciar/i })
  expect(renderButton).toBeInTheDocument()
})
