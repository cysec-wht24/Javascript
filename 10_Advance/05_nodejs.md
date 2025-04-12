# Server

A **server** is software (not hardware—that’s a data center) that is ready to serve you at any given time.

You can write your entire server code in JavaScript, but JS was originally designed to run in the browser. Many of the APIs you see—like `fetch()` and the timer functions—are provided by the browser itself. Out of the box, JavaScript has no mechanism to:

- Read from or write to the file system  
- Interact with low‑level network protocols  
- Perform other I/O tasks you typically need on the backend (databases, HTTP requests, etc.)

---

## Enter Node.js

**Node.js** makes JavaScript super‑powerful on the server side by providing:

- **Networking modules**  
- **File system modules** (sync & async)  
- **Process management**  
- And more…

With Node.js you can run JavaScript code on the backend—for example, to build APIs, web servers, or CLI tools.

---

## The Node.js Ecosystem

Node.js ships with a core set of modules and comes bundled with npm. The ecosystem includes many first‑ and third‑party libraries. A few key examples:

1. **libuv**  
   A multi‑platform C library that provides Node.js with non‑blocking I/O.  
   <https://libuv.org/>

2. **crypto**  
   A built‑in module for cryptographic operations (hashing, encryption, etc.).  
   <https://nodejs.org/api/crypto.html>

---

## npm

**npm** (Node Package Manager) is installed alongside Node.js. It lets you:

- Install third‑party packages  
- Update and manage dependencies  
- Publish your own modules  

Use it to tap into the vast Node.js library ecosystem.

