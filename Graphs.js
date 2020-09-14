class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    depthFirstSearch(array) {
        array.push(this.name);
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].depthFirstSearch(array);
        }
        return array;
    }

    breadthFirstSearch(array) {
        const queue = [this];
        while (queue.length > 0) {
            let current = queue.shift();
            array.push(current.name);
            for (const children of current.children) {
                queue.push(children);
            }
        }
        return array;
    }

}

let graph = new Node('A');

