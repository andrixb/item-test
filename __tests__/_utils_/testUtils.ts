import { render, queries } from '@testing-library/react';
import * as customQueries from './customQueries';

const customRender = (ui: any, options?: any): any =>
    render(ui, { queries: { ...queries, ...customQueries }, ...options });

export * from '@testing-library/react';

export { customRender };
