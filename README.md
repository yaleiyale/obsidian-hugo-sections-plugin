# Hugo Sections helper

[hugo](https://gohugo.io/)的sections可用来进行目录层次展示。识别子目录需要在该目录下存有名为_index的文件。  
**伴随新建文件夹自动生成_index文件**，从这一目的出发，可以使用[FolderNote](https://github.com/xpgo/obsidian-folder-note-plugin)插件。  
但如果不需要导览功能，原插件产生的`_index.md`，会侵入在obsidian中的书写过程。  
遂删去主分支中的展示功能，仅伴随文件夹产生`_index.html`，不会侵入obsidian的文件列表展示，在obsidian中完全无感。是的，在obsidian中也没有丝毫作用。  
仅仅为了hugo的sections识别而创建。文件创建的时机为：文件夹在obsidian中命名时。`_index.html` 中的*title*会随着文件夹命名改变。