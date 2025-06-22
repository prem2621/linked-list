           //STRUCTURE OF NODE


// function Node(data, prev = null, next = null) {
//   this.data = data;
//   this.prev = prev;
//   this.next = next;
// }

// let arr = [1, 2, 3, 4, 5, 6];
// let head = new Node(arr[0]);
// let current = head;


// for (let i = 1; i < arr.length; i++) {
//   let newNode = new Node(arr[i]);
//   current.next = newNode;
//   newNode.prev = current;
//   current = newNode;
// }
// let temp = head;

// while (temp !== null) {
//   console.log(temp.data);
//   temp = temp.next;
// }

//************************************************************** */

//DELETE ON HEAD

// function deleteHead(head){
//     if(head === null || head.next === null){
//         return null
//     }
//     let newHead = head.next
//     newHead.back = null
//     head.next = null
//     return newHead
// }


// console.log('Before Head');
// let temp = head
// while(temp !== null){
//     console.log(temp.data);
//     temp = temp.next
// }

// console.log('After Head');
// head = deleteHead(head)
// temp = head
// while(temp !== null){
//     console.log(temp.data)
//     temp = temp.next
// }


//************************************************************** */

//DELETE TAIL : 

// function deleteTail(head) {
//   if (head === null || head.next === null) {
//     return null;
//   }
//   let tail = head;
//   while (tail.next !== null) {
//     tail = tail.next;
//   }
//   let newTail = tail.back;
//   newTail.next = null;
//   tail.back = null;
//   return head;
// }

// console.log("Before Tail");
// let temp = head;
// while (temp !== null) {
//   console.log(temp.data);
//   temp = temp.next;
// }

// console.log("After tail");
// temp = deleteTail(head);
// while (temp !== null) {
//   console.log(temp.data);
//   temp = temp.next;
// }

//************************************************************** */

//DELETE KTH VALUE


// function Node(data, back = null, next = null) {
//   this.data = data;
//   this.back = back;
//   this.next = next;
// }

// let arr = [1, 2, 3, 4, 5, 6];
// let head = new Node(arr[0]);
// let current = head;

// for (let i = 1; i < arr.length; i++) {
//   let newNode = new Node(arr[i]);
//   current.next = newNode;
//   newNode.back = current;
//   current = newNode;
// }
// function deleteHead(head) {
//   let newHead = head.next;
//   head.next = null;
//   newHead.back = null;
//   return newHead;
// }
// function deleteTail(head) {
//   let tail = head;
//   while (tail.next !== null) {
//     tail = tail.next;
//   }
//   let newTail = tail.back;
//   newTail.next = null;
//   tail.back = null;
//   return head;
// }

// function kth(head, k) {
//   if (head === null) return null;
//   let temp = head;
//   let count = 0;
//   while (temp !== null) {
//     count++;
//     if (count === k) break;
//     temp = temp.next;
//   }
//   if (temp === null) {
//     console.log("Value not found");
//     return head;
//   }
//   let prev = temp.back;
//   let front = temp.next;
//   if (prev === null && front === null) {
//     return null;
//   } else if (prev === null) {
//     return deleteHead(head);
//   } else if (front === null) {
//     return deleteTail(head);
//   } else {
//     prev.next = front;
//     front.back = prev;
//     temp.next = null;
//     temp.back = null;
//     return head;
//   }
// }

// console.log("Before");
// let temp = head;
// while (temp !== null) {
//   console.log(temp.data);
//   temp = temp.next;
// }
// console.log("After");
// temp = kth(head, 6);
// while (temp !== null) {
//   console.log(temp.data);
//   temp = temp.next;
// }


//************************************************************** */

//DELETE BY VALUE


// function Node(data, back = null, next = null) {
//   this.data = data;
//   this.back = back;
//   this.next = next;
// }

// let arr = [1, 2, 3, 4, 5, 6];
// let head = new Node(arr[0]);
// let current = head;

// for (let i = 1; i < arr.length; i++) {
//   let newNode = new Node(arr[i]);
//   current.next = newNode;
//   newNode.back = current;
//   current = newNode;
// }
// function deleteHead(head) {
//   let newHead = head.next;
//   head.next = null;
//   newHead.back = null;
//   return newHead;
// }
// function deleteTail(head) {
//   let tail = head;
//   while (tail.next !== null) {
//     tail = tail.next;
//   }
//   let newTail = tail.back;
//   tail.back = null;
//   newTail.next = null;
//   return head;
// }
// function deleteByValue(head, val) {
//   if (head === null) return null;
//   let temp = head;
//   while (temp !== null && temp.data !== val) {
//     temp = temp.next;
//   }
//   if (temp === null) {
//     console.log("value is not found");
//     return head;
//   }
//   let prev = temp.back;
//   let front = temp.next;
//   if (prev === null && front === null) return null;
//   else if (prev === null) {
//     return deleteHead(head);
//   } else if (front === null) {
//     return deleteTail(head);
//   } else {
//     prev.next = front;
//     front.back = prev;
//     temp.next = null;
//     temp.back = null;
//     return head;
//   }
// }

// console.log("Before");
// let temp = head;
// while (temp !== null) {
//   console.log(temp.data);
//   temp = temp.next;
// }
// console.log("After");
// temp = deleteByValue(head, 6);
// while (temp !== null) {
//   console.log(temp.data);
//   temp = temp.next;
// }

//************************************************************** */














//INSERTINTOHEAD

// function insertBeforeHead(head, val) {
//   let newHead = new Node(val);
//   newHead.next = head;
//   head.back = newHead;
//   return newHead;
// }

// console.log("Before");
// let temp = head;
// while (temp !== null) {
//   console.log(temp.data);
//   temp = temp.next;
// }
// console.log("After");
// temp = insertBeforeHead(head, 6);
// while (temp !== null) {
//   console.log(temp.data);
//   temp = temp.next;
// }


//************************************************************** */

//INSERT INTO TAIL

// function Node(data, back = null, next = null) {
//   this.data = data;
//   this.back = back;
//   this.next = next;
// }

// let arr = [1, 2, 3, 4, 5, 6];
// let head = new Node(arr[0]);
// let current = head;

// for (let i = 1; i < arr.length; i++) {
//   let newNode = new Node(arr[i]);
//   current.next = newNode;
//   newNode.back = current;
//   current = newNode;
// }
// function insertIntoHead(head, val) {
//   let newHead = new Node(val);
//   head.back = newHead;
//   newHead.next = head;
//   return newHead;
// }

// function insertIntoTail(head, val) {
//   if (head === null) {
//     return new Node(val);
//   } else if (head.next === null) {
//     return insertIntoHead(head, val);
//   } else {
//     let tail = head;
//     while (tail.next !== null) {
//       tail = tail.next;
//     }
//     let prev = tail.back;
//     let newNode = new Node(val);
//     prev.next = newNode;
//     tail.back = newNode;
//     newNode.back = prev;
//     newNode.next = tail;
//     return head;
//   }
// }

// console.log("Before");
// let temp = head;
// while (temp !== null) {
//   console.log(temp.data);
//   temp = temp.next;
// }
// console.log("After");
// temp = insertIntoTail(head, 6);
// while (temp !== null) {
//   console.log(temp.data);
//   temp = temp.next;
// }


//**************************************************************

//INSERT INTO K-th POSITION 

// function Node(data, back = null, next = null) {
//   this.data = data;
//   this.back = back;
//   this.next = next;
// }

// let arr = [1, 2, 3, 4, 5, 6];
// let head = new Node(arr[0]);
// let current = head;

// for (let i = 1; i < arr.length; i++) {
//   let newNode = new Node(arr[i]);
//   current.next = newNode;
//   newNode.back = current;
//   current = newNode;
// }

// function insertBeforeHead(head, val) {
//   let newHead = new Node(val);
//   newHead.next = head;
//   head.back = newHead;
//   return newHead;
// }

// function inserByValue(head, val, k) {
//   if (k <= 0) {
//     console.log("invalid position");
//     return head;
//   }
//   if (k === 1) {
//     return insertBeforeHead(head, val);
//   }
//   let count = 0;
//   let temp = head;
//   while (temp !== null) {
//     count++;
//     if (count == k) {
//       let prev = temp.back;
//       let newNode = new Node(val);
//       prev.next = newNode;
//       newNode.back = prev;
//       newNode.next = temp;
//       temp.back = newNode;
//       return head;
//     }
//     temp = temp.next;
//   }
//   console.log("position out of range");
//   return head;
// }

// console.log("Before");
// let temp = head;
// while (temp !== null) {
//   console.log(temp.data);
//   temp = temp.next;
// }
// console.log("After");
// temp = inserByValue(head, 200, 1);
// while (temp !== null) {
//   console.log(temp.data);
//   temp = temp.next;
// }


//**************************************************************

//INSERT BEFORE GIVEN NODE 



// function Node(data, back = null, next = null) {
//   this.data = data;
//   this.back = back;
//   this.next = next;
// }

// let arr = [1, 2, 3, 4, 5, 6];
// let head = new Node(arr[0]);
// let current = head;

// for (let i = 1; i < arr.length; i++) {
//   let newNode = new Node(arr[i]);
//   current.next = newNode;
//   newNode.back = current;
//   current = newNode;
// }

// function insertBeforeNode(head, targetVal, val) {
//   if (head === null) {
//     return "Empty List";
//   } else if (head.data === targetVal) {
//     let newHead = new Node(val);
//     head.back = newHead;
//     newHead.next = head;
//     return newHead;
//   } else {
//     let temp = head;
//     while (temp !== null) {
//       if (temp.data === targetVal) {
//         let prev = temp.back;
//         let newNode = new Node(val);
//         newNode.next = temp;
//         newNode.back = prev;
//         temp.back = newNode;
//         prev.next = newNode;
//         return head;
//       }
//       temp = temp.next;
//     }
//   }
//   console.log("Target not found");
//   return head;
// }

// console.log("Before");
// let temp = head;
// while (temp !== null) {
//   console.log(temp.data);
//   temp = temp.next;
// }
// console.log("After");
// temp = insertBeforeNode(head, 1, 111);
// while (temp !== null) {
//   console.log(temp.data);
//   temp = temp.next;
// }













































