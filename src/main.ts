import { Plugin, TAbstractFile, TFolder } from 'obsidian'
import { IndexFactory } from './index-factory'

export default class HugoSectionsPlugin extends Plugin {
  indexFactory!: IndexFactory

  async onload (): Promise<void> {
    console.log('Loading HugoSections plugin.')
    this.indexFactory = new IndexFactory(this.app)
    // for rename folder
    this.registerEvent(app.vault.on('rename', (folder: TAbstractFile) => {
      if (!(folder instanceof TFolder)) return
      this.indexFactory.createIndex(folder.path).catch(() => { console.log('HugoSections create error') })
    }))
  }

  onunload (): void {
    console.log('Unloading HugoSections plugin')
  }
}
