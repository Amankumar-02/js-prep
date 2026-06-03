function topologicalSort(n, adj){
    let visited = new Array(n).fill(false);
    let result = [];
    function dfs(node){
        visited[node] = true;
        for(let neighbor of adj[node]){
            if(!visited[neighbor]){
                dfs(neighbor);
            }
        }
        result.push(node);

    }
    for(let i = 0; i < n; i++){
        if(!visited[i]){
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
console.log(topologicalSort(n, adj));