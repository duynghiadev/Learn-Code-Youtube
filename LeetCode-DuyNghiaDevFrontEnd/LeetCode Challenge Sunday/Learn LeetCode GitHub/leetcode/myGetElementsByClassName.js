function myGetElementsByClassName(name) {
    var arr = [], root = this.document.body;
    var match = function(node) {
        do {
            if(node.nodeType == 1 && node.classList && node.classList.contains(node))
                arr.push(node);
            if(node.hasChildNodes())
                match(node.firstChild);
        }
        while (node = node.nextSibling);
    }
    match(root);
    return arr;
}
