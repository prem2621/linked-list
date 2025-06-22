//REVERSE A LINKED LIST

// function Node(data,next=null){
//     this.data = data
//     this.next = next
// }
// let arr = [1,2,3,4,5,6]
// let head = new Node(arr[0])
// let current = head

// for(let i=1; i<arr.length; i++){
//     let newNode = new Node(arr[i])
//     current.next = newNode
//     current = newNode
// }

// function reverseLL(head){
//     if(!head) return null
//     let temp = head
//     let stack = []
//     while(temp !== null){
//         stack.push(temp)
//         temp = temp.next
//     }
//     head = stack.pop()
//     temp = head
//     while(stack.length > 0){
//         temp.next = stack.pop()
//         temp = temp.next
//     }
//     temp.next = null
//     return head
// }

// let temp = reverseLL(head)
// while(temp !== null){
//     console.log(temp.data);
//     temp = temp.next
// }



