import { render } from '@testing-library/react';

import { ExpandMore } from './expandMore';

describe('ExpandMore', () => {
  it('should match correct snapshot in expanded state', () => {
    const { container } = render(<ExpandMore expand={true} />);
    expect(container).toMatchSnapshot();
  });

  it('should match correct snapshot in collapsed state', () => {
    const { container } = render(<ExpandMore expand={false} />);
    expect(container).toMatchSnapshot();
  });
});
