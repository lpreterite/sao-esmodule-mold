const superb = require('superb')

module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        message: 'What is the name of the new project, does not contain the characters "-+*%$." etc.',
        default: this.outFolder,
        filter: val => val.toLowerCase()
      },
      {
        name: 'description',
        message: 'How would you descripe the new project',
        default: `my ${superb()} project`
      },
      {
        name: 'version',
        message: 'How would you set the project version',
        default: `0.1.0`
      },
      {
        name: 'mode',
        message: 'Select mode of the project',
        type: 'list',
        choices: ['esmodule', 'vue-component'],
        default: 'esmodule'
      },
      {
        name: 'username',
        message: 'What is your GitHub username',
        default: this.gitUser.username || this.gitUser.name,
        filter: val => val.toLowerCase(),
        store: true
      },
      {
        name: 'email',
        message: 'What is your email?',
        default: this.gitUser.email,
        store: true
      },
      {
        name: 'website',
        message: 'The URL of your website',
        default({ username }) {
          return `github.com/${username}`
        },
        store: true
      }
    ]
  },
  actions: [
    {
      type: 'add',
      files: '**'
    },
    {
      type: 'move',
      patterns: {
        gitignore: '.gitignore',
        gitattributes: '.gitattributes',
        nycrc: '.nycrc',
        gitignore: '.gitignore'
      }
    },
    {
      type: 'remove',
      files(answers){
        const files = []
        if(answers.mode !== 'vue-component') files.push(`src/component.vue`)
        return files
      }
    }
  ],
  async completed() {
    this.gitInit()
    await this.npmInstall()
    this.showProjectTips()
  }
}
