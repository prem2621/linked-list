
// NODE STRUCTURE  :

// function Node(data,next=null){
//     this.data = data
//     this.next = next
// }                                              


//CREATING THE FIRST NODE  :

// let arr = [2,3,4,5]
// let y = new Node(arr[0])    
// console.log(y);                //Node { data: 2, next: null }
// console.log(y.data);           //2


//COVERTING ARRAY INTO LINKED LIST  :

// let head = new Node(arr[0])
// let current = head

// for(let i=1; i<arr.length; i++){
//     let newNode = new Node(arr[i])
//     current.next = newNode
//     current = newNode
// }


//TRAVERSING INTO AN ARRAY  O(n) :

// let temp = head

// while(temp !== null){
//     console.log(temp.data);
//     temp = temp.next
// }



//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// Super Prem! 💪 Now we’ll learn:


// ✅ Length of the Linked List
// 🔍 Search an element
// ❌ Delete a node


// 🔗 Linked List Operations in JavaScript (with arr)


// ✅ Step 1: Setup – Node & Linked List from arr

// function Node(data,next=null){
//     this.data = data
//     this.next = next
// }

// let arr = [2,5,8,7]

// let head = new Node(arr[0])
// let current = head

// for(let i =1; i<arr.length; i++){
//     let newNode = new Node(arr[i])
//     current.next = newNode
//     current = newNode
// }

// ✅ 1. Length of the Linked List  O(n) :


// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }

// let arr = [1, 2, 3, 4, 5];
// let head = null;

// if (arr.length > 0) {
//   head = new Node(arr[0]);
//   let current = head;
//   for (let i = 1; i < arr.length; i++) {
//     let newNode = new Node(arr[i]);
//     current.next = newNode;
//     current = newNode;
//   }
// }

// function length(head) {
//   let length = 0;
//   if (head === null) return 0;
//   let temp = head;
//   while (temp !== null) {
//     length++;
//     temp = temp.next;
//   }
//   return length;
// }
// console.log("Length :", length(head));
  


// 🔍 2. Search for an Element  O(n)  :


// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }

// let arr = [1, 2, 3, 4, 54, 6, 6];
// head = new Node(arr[0]);
// let current = head;
// for (let i = 1; i < arr.length; i++) {
//   let newNode = new Node(arr[i]);
//   current.next = newNode;
//   current = newNode;
// }

// function search(head, val) {
//   let temp = head;
//   let position = 0;
//   let res = [];
//   while (temp !== null) {
//     if (temp.data === val) {
//       res.push(position);
//     }
//     temp = temp.next;
//     position++;
//   }
//   if (res.length === 0) {
//     return "value not found";
//   }
//   return `Found at position : ${res.join(", ")}`;
// }
// console.log(search(head, 6));
  
  

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//DELETE :


//DELETE ON HEAD


// let arr = [3,65,9,6,3,76]

//  head = head.next
// let temp = head

// while(temp !== null){
//     console.log(temp.data);
//     temp = temp.next
//}



//DELETE ON TAIL 


// if(head === null || head.next === null){
//     return head = null
// }
// else{
//     let temp = head
//     while(temp.next.next !== null){
//         temp = temp.next
//     }
//     temp.next = null
// }

// let temp = head
// while(temp !== null){
//     console.log(temp.data);
//     temp = temp.next
// }


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&



//DELETE ON k 


// function Node(data, next = null) {
//   (this.data = data), (this.next = next);
// }

// let arr = [11, 16, 87, 34, 78, 23];

// let head = new Node(arr[0]);
// let current = head;

// for (let i = 1; i < arr.length; i++) {
//   let newNode = new Node(arr[i]);
//   current.next = newNode;
//   current = newNode;
// }

// function deleteByK(head, k) {
//   if (k < 1 || (head === null && k > 1)) {
//     console.log("invalid Position");
//     return head;
//   }
//   if (k === 1) {
//     return head.next
//   }
//   let temp = head;
//   let count = 1;
//   let prev = null;
//   while (temp !== null && count < k) {
//     prev = temp;
//     temp = temp.next;
//     count++;
//   }
//   if (temp === null) {
//     console.log("k is greater than the length of the list");
//   }
//   if (temp !== null && prev !== null) {
//     prev.next = temp.next;
//   }
//   return head;
// }

// console.log("Before :");
// let temp = head;
// while (temp !== null) {
//   console.log(temp.data);
//   temp = temp.next;
// }
// console.log("After :");
// temp = deleteByK(head, 3);
// while (temp !== null) {
//   console.log(temp.data);
//   temp = temp.next;
// }
  

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


//DELETE BY VALUE (SINGLE)


// function Node(data, next = null) {
//     this.data = data;
//     this.next = next;
// }

// let arr = [3,3, 4, 5, 79, 6, 5];

// let head = new Node(arr[0]);
// let current = head;

// for (let i = 1; i < arr.length; i++) {
//     let newNode = new Node(arr[i]);
//     current.next = newNode;
//     current = newNode;
// }

// function removeVal(head, val) {
//     if (head === null) return null;
//     if (head.data === val) return head.next;
//     let temp = head;
//     let prev = null;
//     while (temp !== null) {
//         if (temp.data === val) {
//             prev.next = temp.next;
//             break;
//         }
//         prev = temp;
//         temp = temp.next;
//     }
//     return head;
// }

// function helper(head) {
//     let temp = head;
//     let res = [];
//     while (temp !== null) {
//         res.push(temp.data);
//         temp = temp.next;
//     }
//     return res;
// }

// let newHelper = removeVal(head, 3);

// console.log(helper(newHelper)); 








// function Node(data,next=null){
//     this.data = data
//     this.next = next
//   }
  
//   let arr = [1,2,3,4,54,6,6]
//   let head = new Node(arr[0])
//     let current = head
//     for(let i=1; i<arr.length; i++){
//       let newNode = new Node(arr[i])
//       current.next = newNode
//       current = newNode
//   }
  
  
//   function deleteByValue(head,val){
//       if(head === null) return null
//       else if(head.data ===val){
//         return head.next
//       }
//       let temp = head
//       let prev = null
//       while(temp !== null){
//         if(temp.data === val){
//            prev.next = temp.next
//            return head
//         }
//         prev = temp
//         temp = temp.next
//       }
     
//         console.log("value not found");
//       return head
//   }
  
//   console.log('before');
//   let temp = head
//   while(temp !== null){
//     console.log(temp.data);
//     temp = temp.next
//   }
  
//   head = deleteByValue(head,224)
//   console.log("After");
//   temp = head
//   while (temp !== null) {
//     console.log(temp.data);
//     temp = temp.next;
//   }




//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&



//DELETE VALUE (MULTIPLE)


// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }

// let arr = [5, 5, 7, 3, 5, 5];
// let head = new Node(arr[0]);
// let current = head;
// for (let i = 1; i < arr.length; i++) {
//   let newNode = new Node(arr[i]);
//   current.next = newNode;
//   current = newNode;
// }

// function removeVal(head, val) {
//   while (head.data === val) {
//     head = head.next;
//   }
//   if (head === null) return null;
//   let temp = head;
//   while (temp !== null && temp.next !== null) {
//     if (temp.next.data === val) {
//       temp.next = temp.next.next;
//     } else {
//       temp = temp.next;
//     }
//   }
//   return head;
// }

// console.log("Before");
// let temp = head;
// while (temp !== null) {
//   console.log(temp.data);
//   temp = temp.next;
// }
// console.log("After");
// head = removeVal(head, 5);
// temp = head;
// while (temp !== null) {
//   console.log(temp.data);
//   temp = temp.next;
// }


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&



//INSERT AT HEAD

// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }

// let arr = [11, 16, 87, 34, 78, 23];

// let head = new Node(arr[0]);
// let current = head;

// for (let i = 1; i < arr.length; i++) {
//   let newNode = new Node(arr[i]);
//   current.next = newNode;
//   current = newNode;
// }

// function insertBeforeHead(head, val) {
//    if(head == null) return null
//   let newNode = new Node(val);
//   newNode.next = head;
//   return newNode;
// }

// function printList(head) {
//   let temp = head;
//   let res = [];
//   while (temp !== null) {
//     res.push(temp.data);
//     temp = temp.next;
//   }
//   console.log(res);
// }

// printList(head); // Before inserting
// head = insertBeforeHead(head, 99);
// printList(head); // After inserting

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//INSERT AT TAIL

// function insertTail(head, val) {
//   if (head === null) return new Node(val);
//   let temp = head;
//   while (temp.next !== null) {
//     temp = temp.next;
//   }
//   let newNode = new Node(val);
//   temp.next = newNode;
//   return head;
// }

// function printList(head) {
//   let temp = head;
//   let res = [];
//   while (temp !== null) {
//     res.push(temp.data);
//     temp = temp.next;
//   }
//   console.log(res);
// }

// printList(head);
// head = insertTail(head, 9999);
// printList(head);

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//INSERT AT ANY POSITION



// function getLength(head) {
//   let temp = head;
//   let length = 0;
//   while (temp !== null) {
//     length++;
//     temp = temp.next;
//   }
//   return length;
// }

// function inserValueByK(head, k, val) {
//   if (head === null) return null;
//   if (k < 1 || k > getLength(head) + 1) {
//     console.log("Invalid Position");
//     return head;
//   }
//   if (k === 1) {
//     let newNode = new Node(val);
//     newNode.next = head;
//     return newNode;
//   }
//   let temp = head;
//   let count = 1;
//   while (temp.next !== null) {
//     count++;
//     if (count === k) {
//       let newNode = new Node(val);
//       newNode.next = temp.next;
//       temp.next = newNode;
//     }
//     temp = temp.next;
//   }
//   return head;
// }

// console.log("Before");
// let temp = head;
// while (temp !== null) {
//   console.log(temp.data);
//   temp = temp.next;
// }
// console.log("After");
// head = inserValueByK(head, 10, 23);
// temp = head;
// while (temp !== null) {
//   console.log(temp.data);
//   temp = temp.next;
// }


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//INSERT BEFORE NODE 

// function Node(data,next=null){
//     this.data = data
//     this.next = next
//   }
  
//   let arr = [1,3,6,89,4,13]
//   let head = new Node(arr[0])
//     let current = head
//     for(let i=1; i<arr.length; i++){
//       let newNode = new Node(arr[i])
//       current.next = newNode
//       current = newNode
//   }
//   function insertBeforeNode(head,val,targetVal){
//       if(head === null) return null
//       if(head.data === targetVal){
//         let newNode = new Node(val)
//         newNode.next = head
//         return newNode
//       }
//       let temp = head
//       let prev = null
//       while(temp !== null){
//         if(temp.data === targetVal){
//           let newNode = new Node(val)
//            prev.next = newNode
//            newNode.next = temp
//            break
//         }
//         prev = temp
//         temp = temp.next
//       }
//       if(temp === null) return 'value not found'
//       return head
//   }
  
//    head = insertBeforeNode(head,10000,13)
//    temp = head
//   while (temp !== null) {
//     console.log(temp.data);
//     temp = temp.next;
//   }

  
  
  
  
  
  
  
  
  
















































































