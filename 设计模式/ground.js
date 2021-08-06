
var ground=new Ground(positionX,positionY,td*squareWidth,tr*squareWidth)
ground.init=function(){
    this.viewContent.style.position="absolute";
    this.viewContent.style.backgroundColor="grey";
    this.viewContent.style.left=this.x+"px";
    this.viewContent.style.top=this.y+"px";
    this.viewContent.style.width=this.width+"px";
    this.viewContent.style.height=this.height+"px";

    this.table=[
        []
    ]

    for(let j=0;j<tr;j++){
        this.table[j]=new Array(td)
        for(let i=0;i<td;i++){
            let newSquare
            // 判断是墙
            if(j==0||j==tr-1||i==td-1||i==0){
                newSquare=Factory.create("Wall",i,j,"#bbffee")

            }else{
               newSquare= Factory.create("Floor",i,j,"#aaa")
            }
            this.table[j][i]=newSquare
            this.viewContent.appendChild(newSquare.viewContent)
           
        }
    }
    console.log('tag', this.table)

    document.body.append(this.viewContent)


}
ground.init()