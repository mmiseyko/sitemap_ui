import React from 'react';
import SiteMapRow from '../../components/SiteMapRow';
import renderer from 'react-test-renderer';

it('renders SiteMapRow correctly', () => {

  const link = {
    link_id: 'home.settings',
    name: 'Settings',
    full_path: '/home/settings',
    children: [
      {
        link_id: 'home.settings.user',
        name: 'User',
        full_path: '/home/settings/user',
      },
      {
        link_id: 'home.settings.account',
        name: 'Account',
        full_path: '/home/settings/account',
      }
    ]
  }
  const tree = renderer
    .create(
      <SiteMapRow link={link} />
    )
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
<li>
  <a
    href="/home/settings"
    id="home.settings"
  >
    Settings
  </a>
  <ul>
    <li>
      <a
        href="/home/settings/user"
        id="home.settings.user"
      >
        User
      </a>
    </li>
    <li>
      <a
        href="/home/settings/account"
        id="home.settings.account"
      >
        Account
      </a>
    </li>
  </ul>
</li>
`);
});
