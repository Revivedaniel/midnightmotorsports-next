import { relationship, integer } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Year = list({
  fields: {
    beginningYear: integer({ isRequired: true }),
    endYear: integer({ isRequired: true }),
  }
});