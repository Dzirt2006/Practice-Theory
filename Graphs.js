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
        for(let i=0;i<this.children.length;i++){
            this.children[i].depthFirstSearch(array);
        }
        return array;
    }

}

let graph=new Node('A');

