import { render, screen } from '@testing-library/react';
import App from './App';

/*
Entre os diversos URLs (hrefs) deste projeto será testado aquele do concurso petrobras
*/

test('link: github about Petrobras topics', () => {
  render(<App />);

  const linkElement = screen.getByText(/github Petrobras/i);
  expect(linkElement).toBeInTheDocument();
});