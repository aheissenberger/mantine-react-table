import { Box, Link } from '@mui/material';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import React from 'react';

const columns: MRT_ColumnDef<typeof data[0]>[] = [
  {
    accessorKey: 'library',
    header: 'Library',
    size: 250,
    Cell: ({ cell, row }) => (
      <Link
        href={row.original.libraryLink}
        target="_blank"
        rel="noreferrer"
        sx={(theme) => ({
          color:
            cell.getValue() === 'Material React Table'
              ? theme.palette.primary.main
              : cell.getValue() === 'TanStack Table (React Table)'
              ? theme.palette.secondary.light
              : theme.palette.text.primary,
          fontWeight: 'bold',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        })}
      >
        <>{cell.getValue()}</>
      </Link>
    ),
  },
  {
    accessorKey: 'freeOrLicensed',
    header: 'Free or Licensed',
    size: 80,
  },
  {
    accessorKey: 'bundleSize',
    header: 'Bundle Size',
    Cell: ({ cell, row }) => (
      <Box sx={{ display: 'flex', alignContent: 'center', gap: '1ch' }}>
        {`${cell.getValue<string>()} KB`}
        <a
          href={row.original.bundlePhobiaLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt={cell.getValue<string>()}
            loading="lazy"
            src={row.original.bundlePhobiaImg}
          />
        </a>
      </Box>
    ),
    size: 250,
    sortDescFirst: false,
  },
  {
    accessorKey: 'description',
    header: 'Description',
    size: 500,
  },
];

const data = [
  {
    library: 'Material React Table',
    libraryLink: '#',
    freeOrLicensed: 'Free MIT',
    bundleSize: 37,
    bundlePhobiaImg:
      'https://badgen.net/bundlephobia/minzip/material-react-table@latest?color=blue',
    bundlePhobiaLink:
      'https://bundlephobia.com/package/material-react-table@latest',
    description:
      'Built on top of TanStack Table V8 and Material UI V5, Material React Table is a batteries-included react table library that attempts to provide all the table features you need while trying to stay as highly performant and lightweight as possible. Customization is treated as a top priority to let you override any styles you need to change. Initially Built in 2022, so it is still somewhat new.',
  },
  {
    library: 'TanStack Table (React Table)',
    libraryLink: 'https://tanstack.com/table',
    freeOrLicensed: 'Free MIT',
    bundleSize: 13,
    bundlePhobiaImg:
      'https://badgen.net/bundlephobia/minzip/@tanstack/react-table@latest',
    bundlePhobiaLink:
      'https://bundlephobia.com/package/@tanstack/react-table@latest',
    description:
      'TanStack Table (formerly React Table) is a lightweight Headless UI library for building powerful tables & datagrids. No CSS or Components included. You use logic from the useReactTable hook to build your own table components. No Batteries Included, but you get total control of your markup and styles. (Material React Table is built on top of TanStack Table)',
  },
  {
    library: 'Material Table',
    libraryLink: 'https://material-table.com',
    freeOrLicensed: 'Free MIT',
    bundleSize: 185,
    bundlePhobiaImg:
      'https://badgen.net/bundlephobia/minzip/material-table?color=red',
    bundlePhobiaLink: 'https://bundlephobia.com/package/material-table@latest',
    description:
      'A once popular Material UI table library, originally built in 2018, for creating MUI tables that includes tons of features. However, it has a very large bundle size and contains outdated and insecure dependencies. It is mostly unmaintained now, but did recently release a version that was somewhat compatible with Material UI V5.',
  },
  {
    library: 'Mui Datatables',
    libraryLink: 'https://github.com/gregnb/mui-datatables',
    freeOrLicensed: 'Free MIT',
    bundleSize: 95,
    bundlePhobiaImg:
      'https://badgen.net/bundlephobia/minzip/mui-datatables?color=orange',
    bundlePhobiaLink: 'https://bundlephobia.com/package/mui-datatables@latest',
    description:
      'A solid Material UI based table library that was originally built in 2017. It has a lot of features and is very customizable. However, it is not as lightweight as MRT and has a lot of dependencies. The library appears to still be kept up to date occasionally. Some of the UI layouts in Mui Datatables were inspiration for Material React Table.',
  },
  {
    library: 'MUI X Data Grid MIT/Pro/Premium',
    libraryLink: 'https://mui.com/store/items/mui-x-premium/',
    freeOrLicensed: 'MIT or Paid License',
    bundleSize: 105,
    bundlePhobiaImg:
      'https://badgen.net/bundlephobia/minzip/@mui/x-data-grid-pro?color=orange',
    bundlePhobiaLink:
      'https://bundlephobia.com/package/@mui/x-data-grid-pro@latest',
    description:
      'One of the best Material UI Data Grid options available and it comes directly from MUI. It includes the full suite of features you may need, but it requires a paid license for many of the advanced features.',
  },
  {
    library: 'AG Grid Community/Enterprise',
    libraryLink: 'https://www.ag-grid.com/license-pricing',
    freeOrLicensed: 'MIT or Paid License',
    bundleSize: 260,
    bundlePhobiaImg:
      'https://badgen.net/bundlephobia/minzip/ag-grid-enterprise?color=red',
    bundlePhobiaLink:
      'https://bundlephobia.com/package/ag-grid-enterprise@latest',
    description:
      'Arguably the best table library of all time, but many of the advanced features require an expensive paid license. It appears to have a very large bundle size, though this is a bit misleading because it is tree-shakable, and includes a lot of the UI components in the bundle. It is not built on top of Material UI, but it does follow Material Design, so it is definitely relevant to this comparison.',
  },
];

const ComparisonTable = () => {
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enablePagination={false}
      enableColumnActions={false}
      enableBottomToolbar={false}
      enableTopToolbar={false}
    />
  );
};

export default ComparisonTable;