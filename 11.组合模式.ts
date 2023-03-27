/**
 * 以树的形式创建对象的结构
 */
class MyFile{
    name:string;
    parent:Folder;
    constructor(name){
        this.name = name;
        this.parent = null;
    }

    scan(){
        console.log(this.name);
    }
}

class Folder{
    name:string;
    parent:Folder;
    files:Array<MyFile>;
    constructor(name, parent?){
        this.name = name;
        this.parent = parent ? parent : null;
        this.files =[];
    }

    add(file:MyFile){
        file.parent = this;
        this.files.push(file);
    }

    scan(){
        console.log(this.name);
        this.files.map(item=>{
            item.scan();
        })
    }

    remove(rmFile){
        if( !rmFile.parent ){
            return
        }
        this.files.forEach((file,index) => {
            if( rmFile === file){
                this.files.splice(index,1);
                rmFile.parent = null;
            }
        });
    }
}

let folder = new Folder( '学习资料' );
let folder1 = new Folder( 'JavaScript' );
let file1 = new Folder ( '深入浅出Node.js' );

folder1.add( new MyFile( 'JavaScript 高级程序设计' ) );
folder.add( folder1 );
folder.add( file1 );
// folder.remove(folder1); //移除文件夹
folder.scan();

















