import { type MRT_ColumnDef } from 'mantine-react-table';

export type ColumnOption = {
  columnOption: keyof MRT_ColumnDef<ColumnOption>;
  defaultValue?: string;
  description?: string;
  link?: string;
  linkText?: string;
  required?: boolean;
  source?: 'MRT' | 'TanStack Table' | 'Mantine' | '';
  type?: string;
};

export const columnOptions: ColumnOption[] = [
  {
    columnOption: 'AggregatedCell',
    defaultValue: '',
    description: 'Define a custom cell render for an aggregated cell.',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: '({ cell, column, row, table }) => ReactNode',
  },
  {
    columnOption: 'Cell',
    defaultValue: '',
    description:
      'Define a custom cell render to add markup, styles, or conditional logic.',
    link: '/docs/guides/data-columns#custom-cell-render',
    linkText: 'MRT Data Columns Docs',
    source: 'MRT',
    required: false,
    type: '({ cell, column, renderedCellValue, row, table }) => ReactNode',
  },
  {
    columnOption: 'Edit',
    defaultValue: '',
    description: 'Define a custom edit component for cells in a column.',
    link: '/docs/guides/editing#use-custom-editing-components',
    linkText: 'MRT Editing Docs',
    source: 'MRT',
    required: false,
    type: '({ cell, column, row, table }) => ReactNode',
  },
  {
    columnOption: 'Filter',
    defaultValue: '',
    description: 'Define a custom filter component in a column.',
    link: '/docs/guides/column-filtering#custom-filter-components',
    linkText: 'MRT Column Filtering Docs',
    source: 'MRT',
    required: false,
    type: '({ column, header, table }) => ReactNode',
  },
  {
    columnOption: 'Footer',
    defaultValue: '',
    description: 'Render custom markup for a column footer.',
    link: '/docs/guides/data-columns#custom-footer-render',
    linkText: 'MRT Data Columns Docs',
    source: 'MRT',
    required: false,
    type: 'ReactNode | ({ column, footer, table }) => ReactNode',
  },
  {
    columnOption: 'GroupedCell',
    defaultValue: '',
    description: 'Define a custom cell render for a grouped cell.',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: '({ cell, column, row, table }) => ReactNode',
  },
  {
    columnOption: 'Header',
    defaultValue: '',
    description: 'Render custom markup for a column header.',
    link: '/docs/guides/data-columns#custom-header-render',
    linkText: 'MRT Data Columns Docs',
    source: 'MRT',
    required: false,
    type: 'ReactNode | (({ column, header, table }) => ReactNode)',
  },
  {
    columnOption: 'accessorFn',
    defaultValue: '',
    description:
      'Alternative to an accessorKey, define an accessor function instead of a string key.',
    link: '/docs/guides/data-columns#method-1---using-an-accessorkey-(recommended)',
    linkText: 'MRT Data Columns Docs',
    source: 'TanStack Table',
    required: false,
    type: '(originalRow: TData) => any',
  },
  {
    columnOption: 'accessorKey',
    defaultValue: '',
    description:
      'If provided, the accessorKey will be used to point to which key in the data object should be used to access the data in this column.',
    link: '/docs/guides/data-columns#method-2---using-an-accessorfn-and-id',
    linkText: 'MRT Data Columns Docs',
    source: 'TanStack Table',
    required: false,
    type: 'string & keyof TData',
  },
  {
    columnOption: 'aggregationFn',
    defaultValue: "'count'",
    description:
      'Specify which aggregate function should be used for grouped columns.',
    link: 'https://tanstack.com/table/v8/docs/api/features/grouping#aggregationfn-1',
    linkText: 'TanStack Table Grouping Docs',
    source: 'TanStack Table',
    required: false,
    type: '',
  },
  {
    columnOption: 'columns',
    defaultValue: '',
    description: 'If using header groups, define an array of sub columns here.',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'Array<MRT_ColumnDef<TData>>',
  },
  {
    columnOption: 'editVariant',
    defaultValue: "'text'",
    description: 'Define which component should be used for editing.',
    link: '/docs/guides/editing',
    linkText: 'MRT Editing Docs',
    source: 'MRT',
    required: false,
    type: "'select' | 'text' | 'multi-select'",
  },
  {
    columnOption: 'enableClickToCopy',
    defaultValue: '',
    description: 'Enable the click to copy feature for this column.',
    link: '/docs/guides/click-to-copy#enable-click-to-copy-per-column',
    linkText: 'MRT Click to Copy Docs',
    source: 'MRT',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableColumnActions',
    defaultValue: '',
    description: 'Enable or disable column actions for this column.',
    link: '/docs/guides/column-actions-menu#disable-or-hide-column-actions-buttons',
    linkText: 'MRT Column Actions Docs',
    source: 'MRT',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableColumnDragging',
    defaultValue: '',
    description: 'Enable or disable column dragging for this column.',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableColumnFilter',
    defaultValue: '',
    description:
      'Enable or disable column filtering for this column. Filter will not be shown if disabled.',
    link: '/docs/guides/column-filtering#disable-filtering-features',
    linkText: 'MRT Column Filtering Docs',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableColumnFilterModes',
    defaultValue: '',
    description: 'Enable column filtering modes for this column.',
    link: '/docs/guides/column-filtering#enable-column-filter-modes-(filter-switching)',
    linkText: 'MRT Column Filtering Docs',
    source: 'MRT',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableColumnOrdering',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableEditing',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'boolean | (row: MRT_Row<TData>) => boolean',
  },
  {
    columnOption: 'enableFilterMatchHighlighting',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableGlobalFilter',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableGrouping',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableHiding',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableMultiSort',
    defaultValue: 'true',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enablePinning',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableResizing',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableSorting',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'columnFilterModeOptions',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'Array<string>',
  },
  {
    columnOption: 'filterFn',
    defaultValue: "'fuzzy'",
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'MRT_FilterFn',
  },
  {
    columnOption: 'filterTooltipValueFn',
    defaultValue: '',
    description:
      'Specify to transform tooltip values to a readable format.',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: "MRT_FilterTooltipValueFn",    
  },
  {
    columnOption: 'filterVariant',
    defaultValue: "'text'",
    description:
      'Specify whether the filter should be a text input or a select input, or other type of pre-built input.',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: "'text' | 'autocomplete' | 'select' | 'multi-select' | 'range' | 'range-slider' | 'checkbox' | 'date' | 'date-range'",
  },
  {
    columnOption: 'getGroupingValue',
    defaultValue: '',
    description:
      'Specify a value to be used for grouping rows on this column. If this option is not specified, the value derived from accessorKey / accessorFn will be used instead.',
    link: 'https://tanstack.com/table/v8/docs/api/features/grouping#getgroupingvalue',
    linkText: 'TanStack Table Grouping Docs',
    source: 'TanStack Table',
    required: false,
    type: '(row: TData) => any)',
  },
  {
    columnOption: 'header',
    defaultValue: '',
    description: '',
    link: 'https://tanstack.com/table/v8/docs/api/core/column-def#header',
    linkText: 'TanStack Table ColumnDef Docs',
    source: 'TanStack Table',
    required: true,
    type: 'string',
  },
  {
    columnOption: 'id',
    defaultValue: '',
    description: '',
    link: 'https://tanstack.com/table/v8/docs/api/core/column-def#id',
    linkText: 'TanStack Table ColumnDef Docs',
    source: 'TanStack Table',
    required: false,
    type: 'string',
  },
  {
    columnOption: 'invertSorting',
    defaultValue: 'false',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'maxSize',
    defaultValue: '1000',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'number',
  },
  {
    columnOption: 'meta',
    defaultValue: '{}',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'any',
  },
  {
    columnOption: 'minSize',
    defaultValue: '40',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'number',
  },
  {
    columnOption: 'mantineCopyButtonProps',
    defaultValue: '',
    description: '',
    link: 'https://mantine.dev/core/unstyled-button/?t=props',
    linkText: 'Mantine UnstyledButton API',
    source: 'Mantine',
    required: false,
    type: 'UnstyledButtonProps | ({ cell, column, row, table }) => UnstyledButtonProps',
  },
  {
    columnOption: 'mantineEditSelectProps',
    defaultValue: '',
    description: '',
    link: 'https://mantine.dev/core/select/?t=props',
    linkText: 'Mantine Select Docs',
    required: false,
    source: 'Mantine',
    type: 'SelectProps | ({ cell, column, row, table }) => SelectProps',
  },
  {
    columnOption: 'mantineEditTextInputProps',
    defaultValue: '',
    description: '',
    link: 'https://mantine.dev/core/text-input/?t=props',
    linkText: 'Mantine TextInput API',
    source: 'Mantine',
    required: false,
    type: 'TextInputProps | ({ cell, column, row, table }) => TextInputProps',
  },
  {
    columnOption: 'mantineTableBodyCellProps',
    defaultValue: '',
    description: '',
    link: 'https://mantine.dev/core/box/?t=props',
    linkText: 'Mantine Box API',
    source: 'Mantine',
    required: false,
    type: 'BoxProps | ({ cell, table }) => BoxProps',
  },
  {
    columnOption: 'mantineTableFooterCellProps',
    defaultValue: '',
    description: '',
    link: 'https://mantine.dev/core/box/?t=props',
    linkText: 'Mantine Box API',
    source: 'Mantine',
    required: false,
    type: 'BoxProps | ({ column, table }) => BoxProps',
  },
  {
    columnOption: 'mantineColumnActionsButtonProps',
    defaultValue: '',
    description: '',
    link: 'https://mantine.dev/core/action-icon/?t=props',
    linkText: 'Mantine ActionIcon API',
    source: 'Mantine',
    required: false,
    type: 'ActionIconProps | ({ column, table }) => ActionIconProps',
  },
  {
    columnOption: 'mantineColumnDragHandleProps',
    defaultValue: '',
    description: '',
    link: 'https://mantine.dev/core/action-icon/?t=props',
    linkText: 'Mantine ActionIcon API',
    source: 'Mantine',
    required: false,
    type: 'ActionIconProps | ({ column, table }) => ActionIconProps',
  },
  {
    columnOption: 'mantineFilterAutocompleteProps',
    defaultValue: '',
    description: '',
    link: 'https://mantine.dev/core/autocomplete/?t=props',
    linkText: 'Mantine Autocomplete Docs',
    required: false,
    source: 'Mantine',
    type: 'AutocompleteProps | ({ column, table, rangeFilterIndex}) => AutocompleteProps',
  },
  {
    columnOption: 'mantineFilterCheckboxProps',
    defaultValue: '',
    description: '',
    link: 'https://mantine.dev/core/checkbox/?t=props',
    linkText: 'Mantine Checkbox Props',
    source: 'Mantine',
    required: false,
    type: 'CheckboxProps | ({ column, table }) => CheckboxProps',
  },
  {
    columnOption: 'mantineFilterRangeSliderProps',
    defaultValue: '',
    description: '',
    link: 'https://mantine.dev/core/slider/?t=props',
    linkText: 'Mantine Slider Docs',
    required: false,
    source: 'Mantine',
    type: 'RangeSliderProps | ({ column, table }) => RangeSliderProps',
  },
  {
    columnOption: 'mantineFilterSelectProps',
    defaultValue: '',
    description: '',
    link: 'https://mantine.dev/core/select/?t=props',
    linkText: 'Mantine Select Docs',
    required: false,
    source: 'Mantine',
    type: 'SelectProps | ({ column, table }) => SelectProps',
  },
  {
    columnOption: 'mantineFilterMultiSelectProps',
    defaultValue: '',
    description: '',
    link: 'https://mantine.dev/core/multi-select/?t=props',
    linkText: 'Mantine MultiSelect Docs',
    required: false,
    source: 'Mantine',
    type: 'MultiSelectProps | ({ column, table }) => MultiSelectProps',
  },
  {
    columnOption: 'mantineFilterTextInputProps',
    defaultValue: '',
    description: '',
    link: 'https://mantine.dev/core/text-input/?t=props',
    linkText: 'Mantine TextInput Docs',
    source: 'Mantine',
    required: false,
    type: 'TextInputProps | ({ column, rangeFilterIndex, table }) => TextInputProps',
  },
  {
    columnOption: 'mantineFilterDateInputProps',
    defaultValue: '',
    description: '',
    link: 'https://mantine.dev/core/date-picker/?t=props',
    linkText: 'Mantine DateInput Docs',
    required: false,
    source: 'Mantine',
    type: 'DateInputProps | ({ table, column, rangeFilterIndex }) => DateInputProps',
  },
  {
    columnOption: 'mantineTableHeadCellProps',
    defaultValue: '',
    description: '',
    link: 'https://mantine.dev/core/box/?t=props',
    linkText: 'Mantine Box API',
    source: 'Mantine',
    required: false,
    type: 'BoxProps | ({ column, table }) => BoxProps',
  },
  {
    columnOption: 'size',
    defaultValue: '180',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'number',
  },
  {
    columnOption: 'sortDescFirst',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'sortingFn',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'SortingFnOption',
  },
  {
    columnOption: 'sortUndefined',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'false | 1 | -1',
  },
  {
    columnOption: 'renderColumnActionsMenuItems',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: '',
  },
  {
    columnOption: 'renderColumnFilterModeMenuItems',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: '',
  },
];
