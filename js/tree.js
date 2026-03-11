let steps = []
let currentStep = 0

function buildSteps(tree){

steps = []

tree.nodes.forEach(n=>{
steps.push({type:"node",node:n})
})

tree.edges.forEach(e=>{
steps.push({type:"edge",edge:e})
})

}

function renderTree(tree,svg){

svg.innerHTML=""

buildSteps(tree)

currentStep=0

drawSteps(svg,currentStep)

}

function drawSteps(svg,stepIndex){

svg.innerHTML=""

const width = svg.clientWidth

const levelHeight = 100

const pos = {}

const levels = {}

steps.forEach(s=>{
if(s.type==="node"){

const n=s.node

if(!levels[n.depth]) levels[n.depth]=[]

levels[n.depth].push(n)

}

})

Object.keys(levels).forEach(d=>{

const level = levels[d]

const space = width/(level.length+1)

level.forEach((node,i)=>{

const x = space*(i+1)

const y = levelHeight*(parseInt(d)+1)

pos[node.id] = {x,y}

})

})

for(let i=0;i<=stepIndex;i++){

const step = steps[i]

if(step.type==="node"){

const n = step.node

const p = pos[n.id]

drawNode(svg,p.x,p.y,n.label)

}

if(step.type==="edge"){

const e = step.edge

if(pos[e.from] && pos[e.to]){

drawEdge(svg,pos[e.from],pos[e.to])

}

}

}

}

function drawNode(svg,x,y,label){

const circle=document.createElementNS("http://www.w3.org/2000/svg","circle")

circle.setAttribute("cx",x)

circle.setAttribute("cy",y)

circle.setAttribute("r",22)

circle.setAttribute("fill","#00f2fe")

svg.appendChild(circle)

const text=document.createElementNS("http://www.w3.org/2000/svg","text")

text.setAttribute("x",x)

text.setAttribute("y",y+4)

text.setAttribute("text-anchor","middle")

text.setAttribute("font-size","11")

text.textContent=label

svg.appendChild(text)

}

function drawEdge(svg,a,b){

const line=document.createElementNS("http://www.w3.org/2000/svg","line")

line.setAttribute("x1",a.x)

line.setAttribute("y1",a.y+20)

line.setAttribute("x2",b.x)

line.setAttribute("y2",b.y-20)

line.setAttribute("stroke","#00f2fe")

line.setAttribute("stroke-width","2")

svg.appendChild(line)

}

function nextStep(svg){

if(currentStep < steps.length-1){

currentStep++

drawSteps(svg,currentStep)

}

}

function prevStep(svg){

if(currentStep>0){

currentStep--

drawSteps(svg,currentStep)

}

}