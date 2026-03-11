document.addEventListener("DOMContentLoaded",()=>{

const algo=document.getElementById("algorithmSelect")

const generateBtn=document.getElementById("generateBtn")

const nextBtn=document.getElementById("nextStepBtn")

const prevBtn=document.getElementById("prevStepBtn")

const resetBtn=document.getElementById("resetBtn")

const svg=document.getElementById("treeSvg")

const explain=document.getElementById("explainBox")

let chart=null
let tree=null

generateBtn.onclick=()=>{

let arr=document.getElementById("arrayInput").value
.split(",")
.map(Number)

let target=parseInt(document.getElementById("targetInput").value)

let points=document.getElementById("pointsInput").value
.split(",")
.map(p=>p.split(":").map(Number))

if(algo.value==="merge"){

tree=buildMergeSortTree(arr)

explain.innerHTML="Merge Sort divides the array recursively."

drawGraph([10,50,100,200,500])

}

if(algo.value==="quick"){

tree=buildQuickSortTree(arr)

explain.innerHTML="Quick Sort partitions around a pivot."

drawGraph([10,40,90,180,400])

}

if(algo.value==="binary"){

tree=buildBinarySearchTree(arr,target)

explain.innerHTML="Binary Search halves the search space."

drawGraph([5,20,40,80,120])

}

if(algo.value==="closest"){

tree=buildClosestPairTree(points)

explain.innerHTML="Closest Pair divides points recursively."

drawGraph([20,60,120,240,500])

}

renderTree(tree,svg)

}

nextBtn.onclick=()=>nextStep(svg)

prevBtn.onclick=()=>prevStep(svg)

resetBtn.onclick=()=>svg.innerHTML=""

})

function drawGraph(data){

const ctx=document.getElementById("complexityChart")

if(window.chartInstance){
window.chartInstance.destroy()
}

window.chartInstance=new Chart(ctx,{

type:"line",

data:{
labels:["10","50","100","200","500"],
datasets:[{
label:"Time Complexity",
data:data,
borderColor:"#00f2fe",
fill:false
}]
}

})

}