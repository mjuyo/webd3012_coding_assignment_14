export interface DropdownProps {
    options: { label: string; value: string }[];
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    disabled?: boolean;
  }
  