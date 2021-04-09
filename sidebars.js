module.exports = {
  docs: [
    {
      type: 'category',
      label: 'OmniQ Manager',
      collapsed: false,
      items: [
        'Acceso/login',
        {
          'Usuarios': [
            'Usuarios/user',
            'Usuarios/createUser',
            'Usuarios/editUser'
          ],
        },
        {
          'Bot`s': [
            'Bot`s/Viewbots',
            'Bot`s/createrobot',
            'Bot`s/nodos'
          ],
        },
        {
          'Campañas': [
            'Campaigns/Viewcampaigns',
            'Campaigns/createcamp',
            {
              'Configuracion De Plataformas': [
                'ConfigCamp/facebook',
                'ConfigCamp/whatsaap'
              ]
            },

            'Campaigns/editcamp'
          ],
        },
        {
          Campos: ['fields'],
        },
        {
          'Plantillas': ['Plantillas/templateList',
            'Plantillas/templateCreate',
            'Plantillas/templatefields',
            {
              'Flujo de las Plantillas': [
                'Flujo/Submitted',
                'Flujo/Rejects',
                'Flujo/approved'
              ]
            },
            'Plantillas/templateListContact'
          ],
        },

      ],
    },
  ],
};
