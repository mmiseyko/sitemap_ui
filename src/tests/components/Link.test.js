import React from 'react';
import Link from '../../components/Link';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Link path='/home/settings' id='home.settings' name='Settings' />
    )
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
<a
  href="/home/settings"
  id="home.settings"
>
  Settings
</a>
`);
});
