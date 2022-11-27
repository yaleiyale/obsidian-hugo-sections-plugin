import { App } from 'obsidian'

export class IndexFactory {
  app: App
  filename: string = '_index.html'
  notePath: string
  folderPath: string

  constructor (app: App) {
    this.app = app
    this.notePath = ''
    this.folderPath = ''
  }

  setPath (path: string): void {
    this.folderPath = path
    this.notePath = path + '/' + this.filename
  }

  async createIndex (path: string): Promise<void> {
    this.setPath(path)
    await this.newIndex()
  }

  // create folder note
  async newIndex (): Promise<void> {
    const initContent = '---\ntitle: {{FOLDER_NAME}}\n---'
    const noteInitContent = await this.expandContent(initContent)
    await this.app.vault.adapter.write(this.notePath, noteInitContent)
  }

  // expand content template
  async expandContent (template: string): Promise<string> {
    const folderName = this.folderPath.split('/').pop() as string
    const content = template
      .replace(/{{FOLDER_NAME}}/g, folderName)
    return content
  }
}
