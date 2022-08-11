import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  test('renders good to see you if the button was NOT clicked', () => {
    render(<Greeting />);

    const outputElement = screen.getByText('good to see you', { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders changed if the button was clicked', () => {
    // arrange
    render(<Greeting />);

    // act
    const buttonElelement = screen.getByRole('button');
    userEvent.click(buttonElelement);

    // assert
    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if button was clicked', () => {
    render(<Greeting />);

    const buttonElelement = screen.getByRole('button');
    userEvent.click(buttonElelement);

    const outputElement = screen.queryByText('good to see you', {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
