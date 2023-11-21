/* LRU : least frequently used
  Time complexity: O(1)  map
  Space complexity: O(n) doubly-linked list
  It is implemented by using doubly-linked list
  The head is used the least frequently and the tail is used the most frequently
  
*/
var DoublyLinkedNode = function(key, value){
	return {'key': key,
	        'value': value,
	        'prev': null,
	        'next': null
	        };
}

var LRU = function(limit){
	this.size = limit || 10;
	this.map = {};
	this.head = null;
	this.tail = null;
	function setNode(key, value){
        if(this.map[key] != undefined){
            var value = getNode(key).value;//update the positon of this node
            return value;
        }
        var newNode = new DoublyLinkedNode(key, value);
        if(Object.keys(this.map).length === this.size){
            //create the new node and insert to head
            newNode.next = this.head.next;
            this.head.next.prev = newNode;
            this.head = newNode;
        }
        //insert to tail
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
	}
	function getNode(key){
        if(this.map[key] != undefined){
            var current = this.map[key];
            var prev = current.prev;
            var next = current.next;

            //remove current
            prev.next = next;
            next.prev = prev;

            //insert current to tail
            this.tail.next = current;
            current.prev = this.tail;

            //update the pointer to tail
            this.tail = current;
       
            return this.tail;
        }
        return -1;
	}
	return {
	    set: setNode,
	    get: getNode
	};
}

