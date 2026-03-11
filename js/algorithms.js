function buildMergeSortTree(arr){

const nodes=[]
const edges=[]
let id=0

function divide(l,r,parent=null){

const node=id++

nodes.push({
id:node,
label:`${l}-${r}`,
depth: parent===null?0:nodes[parent].depth+1
})

if(parent!==null)
edges.push({from:parent,to:node})

if(l>=r) return

const mid=Math.floor((l+r)/2)

divide(l,mid,node)
divide(mid+1,r,node)

}

divide(0,arr.length-1)

return {nodes,edges}

}

function buildQuickSortTree(arr){

return buildMergeSortTree(arr)

}

function buildBinarySearchTree(arr,target){

const nodes=[]
const edges=[]
let id=0

function search(l,r,parent=null){

const node=id++

nodes.push({
id:node,
label:`${l}-${r}`,
depth: parent===null?0:nodes[parent].depth+1
})

if(parent!==null)
edges.push({from:parent,to:node})

if(l>r) return

const mid=Math.floor((l+r)/2)

if(arr[mid]===target) return

if(target<arr[mid])
search(l,mid-1,node)
else
search(mid+1,r,node)

}

search(0,arr.length-1)

return {nodes,edges}

}

function buildClosestPairTree(points){

const nodes=[]
const edges=[]
let id=0

function divide(l,r,parent=null){

const node=id++

nodes.push({
id:node,
label:`${l}-${r}`,
depth: parent===null?0:nodes[parent].depth+1
})

if(parent!==null)
edges.push({from:parent,to:node})

if(r-l<=1) return

const mid=Math.floor((l+r)/2)

divide(l,mid,node)
divide(mid+1,r,node)

}

divide(0,points.length-1)

return {nodes,edges}

}