import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '@/app/page';
test('beta test', () => {
  render(<Page />);
  const elem = screen.getByText('app/page.tsx');
  expect(elem).toBeInTheDocument();
});
