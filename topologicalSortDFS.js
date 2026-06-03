function topologicalSort(n, adj) {
    const visited = new Array(n).fill(false);
    const result = [];
    function dfs(node) {
        visited[node] = true;
        console.log(visited)

        for (const neighbor of adj[node]) {
          console.log(!visited[neighbor])
          console.log(neighbor)
            if (!visited[neighbor]) {
                dfs(neighbor);
                console.log("first"+neighbor)
            }
        }

        // Add after processing all neighbors
        result.push(node);
        console.log(node+"after forLoop");
    }

    for (let i = 0; i < n; i++) {
      // console.log(!visited[i])
        if (!visited[i]) {
            dfs(i);
        }
    }

    return result.reverse();
}
const n = 4;
const adj = [
    [1, 2],
    [3],
    [3],
    []
];
// const adj = [
//     [1, 2],
//     [3],
//     [3],
//     [4,5],
//     [6],
//     [6],
//     []
// ];
// const adj = [
//     [1],
//     [2],
//     [3],
//     []
// ];
console.log(topologicalSort(n, adj));




// FE1
// (4) [true, false, false, false]
//  true
//  1

// FE2
// (4) [true, true, false, false]
//  true
//  3

// FE3
// (4) [true, true, false, true]
//  3after forLoop // here FE3 exit
//  first3
//  1after forLoop // here FE2 exit
//  first1
//  true           // here 2nd loop start
//  2

// FE4
// (4) [true, true, true, true]
//  false
//  3
//  2after forLoop // here FE4 exit
//  first2
//  0after forLoop // here FE1 exit
//  
// (4) [0, 2, 1, 3]