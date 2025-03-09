import { mergeTests } from '@playwright/test';
import { test as pageTest } from './page.fixture';

export const test = mergeTests(pageTest);

export { expect } from '@playwright/test';
