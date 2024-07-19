// src/components/SpendingOverview.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SpendingOverview from './SpendingOverview';


test('renders SpendingOverview component', () => {
  render(<SpendingOverview />);

  const headingElement = screen.getByText(/Gastos Totales/i);
  expect(headingElement).toBeInTheDocument();


});
