/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Get started',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Satellite user',
          items: [
            'roles/user/satellite',
            'roles/user/metamask',
          ],
        },
        {
          type: 'category',
          label: 'Node operator',
          items: [
            'roles/node/join',
            'roles/node/join-genesis',
            'roles/node/basic',
          ],
        },
        {
          type: 'category',
          label: 'Validator',
          items: [
            {
              type: 'category',
              label: 'Setup',
              items: [
                'roles/validator/setup/overview',
                'roles/validator/setup/vald-tofnd',
                'roles/validator/setup/backup',
                'roles/validator/setup/register-broadcaster',
                'roles/validator/setup/stake-axl',
                'roles/validator/setup/health-check',
              ],
            },
            {
              type: 'category',
              label: 'Support external chains',
              items: [
                'roles/validator/external-chains/overview',
                'roles/validator/external-chains/avalanche',
                'roles/validator/external-chains/ethereum',
                'roles/validator/external-chains/fantom',
                'roles/validator/external-chains/moonbeam',
                'roles/validator/external-chains/polygon',
              ],
            },
            // Hide this section until the pages are updated and refreshed 
            // {
            //   type: 'category',
            //   label: 'Troubleshoot',
            //   items: [
            //     'roles/validator/troubleshoot/recovery',
            //     'roles/validator/troubleshoot/startup',
            //     'roles/validator/troubleshoot/leave',
            //     'roles/validator/troubleshoot/unjail',
            //     'roles/validator/troubleshoot/missed-too-many-blocks',
            //   ],
            // },
          ],
        },
        {
          type: 'category',
          label: 'Developer',
          items: [
            {
              type: 'category',
              label: 'AxelarJS SDK',
              items: [
                'roles/dev/sdk/axelarjs',
                'roles/dev/sdk/deposit-address-demo',
              ],
            },
            {
              type: 'category',
              label: 'CLI',
              items: [
                'roles/dev/cli/axelar-cli',
                'roles/dev/cli/ust-to-evm',
                'roles/dev/cli/ust-from-evm',
                'roles/dev/cli/axl-to-evm',
                'roles/dev/cli/axl-from-evm',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Releases',
      collapsible: true,
      collapsed: false,
      items: [
        'releases/mainnet',
        'releases/testnet',
      ],
    },
    'ecosystem',
    'bug-bounty',
  ],
};

module.exports = sidebars;
