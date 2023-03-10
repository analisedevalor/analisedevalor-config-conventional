module.exports = {
	parserPreset: 'conventional-changelog-conventionalcommits',
	  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'scope-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        '๐  build',
        '๐งน chore',
        '๐ฆ ci',
        '๐ docs',
        'โจ feat',
        '๐ชฒ fix',
        '๐ perf',
        '๐ refactor',
        'โฎ๏ธ revert',
        '๐ style',
        '๐งช test',
      ],
    ],
  },
  prompt: {
    questions: {
      type: {
        description: "Select the type of change that you're committing",
        enum: {
          'โจ feat': {
            description: 'A new feature',
            title: 'Features',
            emoji: 'โจ',
          },
          '๐ชฒ fix': {
            description: 'A bug fix',
            title: 'Bug Fixes',
            emoji: '๐ชฒ',
          },
          '๐ docs': {
            description: 'Documentation only changes',
            title: 'Documentation',
            emoji: '๐',
          },
          '๐ style': {
            description:
              'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
            title: 'Styles',
            emoji: '๐',
          },
          '๐ refactor': {
            description:
              'A code change that neither fixes a bug nor adds a feature',
            title: 'Code Refactoring',
            emoji: '๐',
          },
          '๐ perf': {
            description: 'A code change that improves performance',
            title: 'Performance Improvements',
            emoji: '๐',
          },
          '๐งช test': {
            description: 'Adding missing tests or correcting existing tests',
            title: 'Tests',
            emoji: '๐งช',
          },
          '๐  build': {
            description:
              'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
            title: 'Builds',
            emoji: '๐ ',
          },
          '๐ฆ ci': {
            description:
              'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, Docker, SauceLabs)',
            title: 'Continuous Integrations',
            emoji: '๐ฆ',
          },
          '๐งน chore': {
            description: "Other changes that don't modify src or test files",
            title: 'Chores',
            emoji: '๐งน',
          },
          'โฎ๏ธ revert': {
            description: 'Reverts a previous commit',
            title: 'Reverts',
            emoji: 'โฎ๏ธ',
          },
        },
      },
      scope: {
        description:
          'What is the scope of this change (e.g. component or file name or page name)',
      },
      subject: {
        description:
          'Write a short, imperative tense description of the change',
      },
      body: {
        description: 'Provide a longer description of the change',
      },
      isBreaking: {
        description: 'Are there any breaking changes?',
      },
      breakingBody: {
        description:
          'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
      },
      breaking: {
        description: 'Describe the breaking changes',
      },
      isIssueAffected: {
        description: 'Does this change affect any open issues?',
      },
      issuesBody: {
        description:
          'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #123".)',
      },
    },
  },
};
