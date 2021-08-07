import { render, screen } from '@testing-library/react';
import App from './App';

import { arabicIntro, englishIntro } from './components/AraHeader'

it('should render the content', () => {
  render(<App />);
  const arabicIntroElement = screen.getByText(arabicIntro);
  expect(arabicIntroElement).toBeInTheDocument();
  const englishIntrooElement = screen.getByText(englishIntro);
  expect(englishIntrooElement).toBeInTheDocument();
});
