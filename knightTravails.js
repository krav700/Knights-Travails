function squareNode(data, positionX, positionY) {
    return { data, positionX, positionY };
}
let board;
function createBoard() {
    board = Array.from({ length: 8 }, () => Array(8).fill(null));

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            board[i][j] = squareNode(`${i}${j}`, i, j);
        }
    }
}
createBoard();

function knightMoves(startPos, endPos) {
    startPos = board[startPos[0]][startPos[1]];
    endPos = board[endPos[0]][endPos[1]];
    let queue = [[startPos]];

    const visited = new Set([startPos.data]);

    while (queue.length > 0) {
        const path = queue.shift();
        let currentNode = path[path.length - 1];

        if (currentNode == endPos) {
            path.map((x) => console.log([x.positionX, x.positionY]));
            break;
        }

        if (currentNode.positionX + 1 <= 7 && currentNode.positionY + 2 <= 7) {
            const node1 =
                board[currentNode.positionX + 1][currentNode.positionY + 2];
            if (!visited.has(node1.data)) {
                visited.add(node1.data);
                queue.push([...path, node1]);
            }
        }
        if (currentNode.positionX + 2 <= 7 && currentNode.positionY + 1 <= 7) {
            const node2 =
                board[currentNode.positionX + 2][currentNode.positionY + 1];
            if (!visited.has(node2.data)) {
                visited.add(node2.data);
                queue.push([...path, node2]);
            }
        }
        if (currentNode.positionX - 1 >= 0 && currentNode.positionY + 2 <= 7) {
            const node3 =
                board[currentNode.positionX - 1][currentNode.positionY + 2];
            if (!visited.has(node3.data)) {
                visited.add(node3.data);
                queue.push([...path, node3]);
            }
        }
        if (currentNode.positionX - 2 >= 0 && currentNode.positionY + 1 <= 7) {
            const node4 =
                board[currentNode.positionX - 2][currentNode.positionY + 1];
            if (!visited.has(node4.data)) {
                visited.add(node4.data);
                queue.push([...path, node4]);
            }
        }
        if (currentNode.positionX - 2 >= 0 && currentNode.positionY - 1 >= 0) {
            const node5 =
                board[currentNode.positionX - 2][currentNode.positionY - 1];
            if (!visited.has(node5.data)) {
                visited.add(node5.data);
                queue.push([...path, node5]);
            }
        }
        if (currentNode.positionX - 1 >= 0 && currentNode.positionY - 2 >= 0) {
            const node6 =
                board[currentNode.positionX - 1][currentNode.positionY - 2];
            if (!visited.has(node6.data)) {
                visited.add(node6.data);
                queue.push([...path, node6]);
            }
        }
        if (currentNode.positionX + 1 <= 7 && currentNode.positionY - 2 >= 0) {
            const node7 =
                board[currentNode.positionX + 1][currentNode.positionY - 2];
            if (!visited.has(node7.data)) {
                visited.add(node7.data);
                queue.push([...path, node7]);
            }
        }
        if (currentNode.positionX + 2 <= 7 && currentNode.positionY - 1 >= 0) {
            const node8 =
                board[currentNode.positionX + 2][currentNode.positionY - 1];
            if (!visited.has(node8.data)) {
                visited.add(node8.data);
                queue.push([...path, node8]);
            }
        }
    }
}

knightMoves([0, 0], [7, 7]);
