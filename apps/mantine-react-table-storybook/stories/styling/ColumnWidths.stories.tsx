import React from 'react';
import { Meta } from '@storybook/react';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import { faker } from '@faker-js/faker';

const meta: Meta = {
  title: 'Styling/Custom Column Widths',
};

export default meta;

const columns: MRT_ColumnDef<(typeof data)[0]>[] = [
  {
    header: 'ID',
    accessorKey: 'id',
    size: 50,
  },
  {
    header: 'First Name',
    accessorKey: 'firstName',
    size: 300,
  },
  {
    header: 'Last Name',
    accessorKey: 'lastName',
    size: 100,
  },
  {
    header: 'Age',
    accessorKey: 'age',
    size: 50,
  },
  {
    header: 'Address',
    accessorKey: 'address',
  },
];
const data = [...Array(21)].map(() => ({
  id: faker.datatype.number(100),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  age: faker.datatype.number(80),
  address: faker.address.streetAddress(),
}));

export const CustomWidths = () => (
  <MantineReactTable columns={columns} data={data} />
);

export const CustomWidthsGrid = () => (
  <MantineReactTable columns={columns} data={data} layoutMode="grid" />
);
