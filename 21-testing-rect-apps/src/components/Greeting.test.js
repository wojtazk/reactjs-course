import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders hello world as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // assert
    const helloWorldEl = screen.getByText('Hello World!');

    expect(helloWorldEl).toBeInTheDocument();
  });
});
