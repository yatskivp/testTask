export type QuickSearchProps = React.FC<{
  selectLabel: string;
  filterInputLabel: string;
  selectedValue: string;
  options: { label: string; value: string }[];
  handleSelectChange: (selectedValue: string) => void;
  handleInputChange: (inputValue: string) => void;
}>;
