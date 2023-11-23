import { render } from '@testing-library/react';

import Txt from './txt';

describe('Txt', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Txt />);
    expect(baseElement).toBeTruthy();
  });
});
