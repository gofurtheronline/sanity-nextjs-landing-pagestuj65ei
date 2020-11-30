export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc48e5f2e5496ddda401e5a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pagestuj-65-ei-studio',
                  apiId: '429c11c9-8da8-4b5c-a1fa-fe533b6e7553'
                },
                {
                  buildHookId: '5fc48e5f330a58e2a3ac30b0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pagestuj-65-ei',
                  apiId: 'b664b7ec-818a-46ec-b6df-bdb30e719451'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gofurtheronline/sanity-nextjs-landing-pagestuj65ei',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pagestuj-65-ei.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
