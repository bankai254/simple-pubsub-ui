import { render, screen } from '@testing-library/react';
import App from './App';

test('renders empty message list', () => {
  render(<App />);
  const messageList = screen.getByTestId("message-list")
  expect(messageList).toBeInTheDocument();
});


test('renders add message button', () => {
  render(<App />);
  const addMessageButton = screen.getByTestId("btn-add-message")
  expect(addMessageButton).toBeInTheDocument();
});