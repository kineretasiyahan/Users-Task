const folders=["file.txt","file.docx","file.docx","file.txt",["file.txt","file.docx","file.docx","file.txt"]];
function getFiles(array){
 array.map((file)=>{
     if(folder){
         folder.map((item)=>{
             if(item.includes(".docx")){
                 return item;
             }
         })
     }
     if(file.includes(".docx")){
         return file;
     }
 })
}
getFiles(folders);