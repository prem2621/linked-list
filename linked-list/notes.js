// # ✅ Why Learn Linked List in JavaScript

// - JS Arrays are dynamic, but Linked Lists teach deep DS concepts.
// - Useful in problems like Undo/Redo, Queues, History nav.
// - Important for coding interviews (Zoho, TCS, FAANG, etc.)
// - More efficient than arrays for frequent insert/delete at random places.
// - Building blocks for advanced structures: Stack, Queue, Graphs, Trees, HashMaps.

// ➡️ Even if rarely used in JS projects, knowing how to implement and apply linked lists makes you a stronger developer.

// ⚖️ Let's Compare in Real Scenarios
// Operation	                     Array (JS)	                Linked List
// Access by index	                 ✅ O(1) Fast	          ❌ O(n) (Have to traverse)
// Insert at end	                 ✅ O(1) (usually)	      ✅ O(1) if tail known
// Insert at middle/start        	 ❌ O(n) (shift items)	  ✅ O(1) (if pointer known)
// Delete at middle/start	         ❌ O(n)	                  ✅ O(1) (if pointer known)
// Memory efficiency	             ✅ Best	                  ❌ More memory used

// # 📌 What is stored in `next` in JavaScript Linked List?

// - In C, `next` stores actual memory address (pointer).
// - In JS, `next` stores an object reference (like a hidden pointer).
// - We cannot see or access memory addresses in JS.
// - JS handles memory and garbage collection automatically.

// ✅ It stores a reference (not memory address string), which means:

// A connection to the next object stored somewhere in JS engine memory.

// You don’t see it like 0x7f8b... (like in C),
// but internally the JavaScript engine still maintains memory pointers, we just don’t control or see them.

// 🧠 Final Understanding:
// Concept	                        C/C++       	                     JavaScript
// What is stored?            Actual memory address (pointer)         	Reference to object
// Can we see it?             Yes (e.g., 0x7ffee...)	                No (abstracted by engine)
// Controlled by	          You (malloc, free)	                    JS engine (automatic GC)
// Type                    	  Node*	                                    Node object

// EVEN THOUGH WE CAN'T SEE MEMORY ADDRESSES, OBJECT ARE PASSED BY REFFERENCE THAT MEANS :

// let a = new Node(10)
// let b = a
// b.data = 20
// console.log(a.data);

// 💡 Part 1: let a = new Node(10)
// new keyword:
// When you say new Node(10), you are creating a new object in memory.
// This is not just a simple variable like let x = 5, but an object that may contain multiple properties.

// Node(10):

// This object is stored somewhere in memory (let's say memory address 0xABC123), and a stores that memory address (reference).
// 🔁 So, a does not directly store 10 — it stores the address of the object where data: 10 is present.

// 💡 Part 2: let b = a
// Now you do:
// let b = a

// Here, b doesn’t copy the object, it just copies the memory address that a is pointing to.
// So b and a are both pointing to the same object in memory (0xABC123).

// 💡 Part 3: b.data = 20
// When you say b.data = 20, it goes to that memory location and changes data value to 20.

// Since a and b both point to the same memory location,
// console.log(a.data) will now print 20.

//Linked list Structure
// const list = {
//     head : {
//         value : 6,
//         next : {
//             value : 3,
//             next : {
//                 value:7,
//                 next : {
//                     value:1,
//                     next :{
//                         value : 9,
//                         next : null
//                     }
//                 }
//             }
//         }
//     }
// }


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// 1. What real-world concept inspired the idea of a Linked List?
// 🔍 Inspired by: A train (bogies connected one after another).
// Just like how train compartments are linked, but not necessarily placed continuously in memory, 
// each node in a linked list holds data and a reference (link) to the next one.

// Real-world analogy:

// Each train coach knows only who comes next, not who comes before.

// Coaches can be added or removed easily, without disturbing the entire train structure.



// 2. Why and when was this concept introduced?
// 📅 Introduced in: 1955 by Allen Newell, during early AI research and data storage models.
// Purpose:

// At that time, memory was very limited.

// Dynamic memory allocation was needed — that’s when they realized they can use non-contiguous memory allocation using links/pointers.




// 3. Which programming language first introduced Linked Lists?

// 💻 First in: LISP (LISt Processor) in 1958
// LISP was one of the first languages to use linked lists as a core part of its language design.
// It became the foundation of AI programming during those days.




// 4. Which industry/area first used this concept?

// 🏭 First used in: Artificial Intelligence and Symbolic Computation
// LISP and linked lists were used to represent symbolic expressions, trees, and graphs.
// Later used in OS, memory management, compiler design.




// 5. Real-world Scenario to explain Linked List?

// 🧠 Example: Music Playlist App
// Each song knows which song comes next.
// You can add, remove, or move songs in the playlist easily.
// But to reach song 5, you need to start from song 1 → 2 → 3...
// A linked list works exactly the same. Each "node" has two parts:
// data (the song) + next (link to next song).




// 6. How is it different from Arrays? (Pros & Cons)
// Memory    	   Fixed size (contiguous block)	        Dynamic size (non-contiguous)
// Feature         Array	                                Linked List
// Insertion	   Costly (shift elements)	                Easy (just change links)
// Deletion	       Costly (shift elements)	                Easy (just change links)
// Access Time     Fast (direct index access)	            Slow (traverse one by one)
// Wastage	       Can waste memory if too large	        Memory efficient (allocate as needed)



// 8. Why was the Linked List data structure created?

// 🧠 Problem it solved:
// Fixed-size arrays were limiting.
// Needed something flexible, efficient in adding/removing elements dynamically.
// Needed a structure that could handle data with unknown or changing size — like symbolic processing, trees, graphs.



// 9. What type of data is stored in a Linked List?

// 📦 Any type of data – integers, strings, objects, custom data types.
// Each node looks like this:
// struct Node {
//     int data;            // or any datatype
//     struct Node* next;   // link to next node
// };

// You can store real-time data like:

// Browser History
// Playlist Songs
// Dynamic memory blocks
// Chat messages




// 10. What is the role of a Linked List inside a larger system?

// ⚙️ Applications:

// Operating Systems: process scheduling (circular linked list)
// Compilers: Symbol tables
// Memory Management: Free memory block tracking
// Undo Features: In text editors
// Networking: Routing tables, packet queues
// Data Structures: Stack, Queue, Graphs (Adjacency list)
