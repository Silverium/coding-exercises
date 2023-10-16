const tree = {
  0: {
    1: { 4: {} },
    2: { 3: {} },
    5: {},
  },
};
const addSelfToParentsIndirect = (nodes) => (node) => {
  let parent = nodes.get(node.parent);
  while (parent !== undefined) {
    parent.indirect.add(node.self);
    parent = nodes.get(parent.parent);
  }
};
export const solution = (A) => {
  let nodes = new Map();
  const addToParents = addSelfToParentsIndirect(nodes);
  const firstChildren = new Set([A[0]]);
  firstChildren.self = 0;
  firstChildren.parent = undefined;
  firstChildren.indirect = new Set();
  const secondChildren = new Set([0]);
  secondChildren.self = A[0];
  secondChildren.indirect = new Set();
  secondChildren.parent = 0;

  nodes.set(0, firstChildren);
  nodes.set(A[0], secondChildren);
  const firstNode = nodes.set(0, firstChildren);
  for (let i = 1; i < A.length; i += 1) {
    const origin = Math.min(i, A[i]);
    const destination = Math.max(i, A[i]);
    let originChildren;
    if (nodes.has(origin)) {
      originChildren = nodes.get(origin);
    } else {
      originChildren = new Set();
      originChildren.parent = destination;
      originChildren.indirect = new Set();
      originChildren.self = origin;
      nodes.set(origin, originChildren);
    }
    originChildren.add(destination);
    addToParents(originChildren);
    // originChildren.add(origin);

    let destinationChildren;
    if (nodes.has(destination)) {
      destinationChildren = nodes.get(destination);
    } else {
      destinationChildren = new Set();
      destinationChildren.parent = origin;
      destinationChildren.self = destination;
      destinationChildren.indirect = new Set();
      nodes.set(destination, destinationChildren);
    }
    destinationChildren.add(origin);
    addToParents(destinationChildren);
  }
  nodes;
  let sum = 0;
  let pairs = [];
  for (const [name, node] of nodes) {
    let currentName = name
    sum++
    pairs.push([name,name])
    while (currentName < nodes.size) {
      let hasPathToNextName = false;
      let currentNode = node
      while (currentNode.parent !== undefined) {
        if(currentNode.indirect.has(currentName)){
          hasPathToNextName = true;
          break;
        }
        currentNode = nodes.get(currentNode.parent)
      }
      if (node.has(currentName)) {
        if(name !== currentName){
        sum++;
        pairs.push([name, currentName])}
      }else {}
      currentName++;
    }
  }
  console.log(pairs)
  return sum;
};
console.log(solution([2, 0, 2, 2, 1, 0]));
// console.log(solution([2, 0, 2, 2, 2])); // (0,0), (0,1), (0,2), (0,3),(1,1), (2,2), (2,3) (3,3)
// console.log(solution([1]));
// console.log(solution([0, 0, 0, 0]));
// console.log(solution([0, 0, 1, 2]));
// console.log(solution([2, 2, 2]));
// console.log(solution([0,0,1,2,3,0,5,6,7,8]));
