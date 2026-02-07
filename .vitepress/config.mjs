export default {
  base: '/Learn_With_Vaishnav/',
  title: "My Learning Notes",
  description: "SQL and Programming Documentation",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'SQL', link: '/sql/Intro' }
    ],
    // Multi-sidebar configuration
    sidebar: {
      '/sql/': [
        {
          text: 'SQL Challenges',
          items: [
            { text: 'Introduction', link: '/sql/Intro' },
            { text: 'Combine Two Tables', link: '/sql/Combine_Two_Tables' }
          ]
        }
      ]
    }
  }
}