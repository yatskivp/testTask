import { fireEvent, render, screen } from '@testing-library/react';
import { QuickSearch } from './quickSearch';

describe('QuickSearch component', () => {
  const testData = {
    selectLabel: 'Test Select Label',
    filterInputLabel: 'Test Filter Input Label',
    selectedValue: '1',
    options: [
      { label: 'Option', value: '1' },
      { label: 'Option_2', value: '2' },
    ],
    handleSelectChange: jest.fn(),
    handleInputChange: jest.fn(),
  };

  it('renders QuickSearch correctly', () => {
    render(<QuickSearch {...testData} />);
    expect(screen.getByText(testData.selectLabel)).toBeDefined();
    expect(screen.getByText(testData.options[0].label)).toBeDefined();
    expect(screen.getByLabelText(testData.filterInputLabel)).toBeDefined();
  });

  it('calls the handleSelectChange function when selection is changed', () => {
    render(<QuickSearch {...testData} />);
    const selectInput = screen.getAllByRole('textbox', { hidden: true })[0];

    if (selectInput) {
      fireEvent.change(selectInput, { target: { value: '2' } });
    }

    expect(testData.handleSelectChange).toBeCalledWith('2');
  });

  it('calls the handleInputChange function when input is changed', () => {
    render(<QuickSearch {...testData} />);
    fireEvent.change(screen.getAllByRole('textbox', { hidden: true })[1], {
      target: { value: 'test' },
    });
    expect(testData.handleInputChange).toBeCalledWith('test');
  });
});
