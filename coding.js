const ruselt = []

function benom(arr) {
    const set = new Set(arr)
    for (const iterator of set) {
        ruselt.push(iterator)
    }
}

benom([1,1,1,1,2]);
console.log(ruselt);