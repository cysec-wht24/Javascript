# Javascript

- **What it is**: A scripting language for web browsers (client-side)  
- **Created by**: Brendan Eich (in 1995 while at Netscape)  
- **Purpose**: Adds interactivity to websites (e.g., animations, forms)  
- **Key Feature**: Runs **only in browsers** by default.

---

### **2. Node.js**
- **What it is**: A **runtime environment** to run JavaScript outside browsers (server-side)  
- **Created by**: Ryan Dahl (released in 2009)  
- **Core Tech**: Built on Chrome’s V8 JavaScript engine  
- **Purpose**:  
  - Build backend servers/APIs  
  - File system operations  
  - Tools like React Native CLI or npm  
- **Key Features**:  
  - Uses CommonJS modules (`require()`)  
  - Access to system resources (files, networks)  
  - Massive ecosystem (npm package manager)

---

### **3. Deno.js**
- **What it is**: A modern **alternative to Node.js** (also server-side JS runtime)  
- **Created by**: Ryan Dahl (same creator as Node.js, released in 2020)  
- **Purpose**: Fix Node.js design flaws  
- **Key Features**:  
  - Native TypeScript support  
  - ES Modules (`import` syntax)  
  - Built-in tools (testing, formatting)  
  - Secure by default (explicit permissions for file/network access)

---

### **Node.js vs Deno.js**  
| Feature                | Node.js              | Deno.js               |  
|------------------------|----------------------|-----------------------|  
| **Modules**            | CommonJS (`require`)| ES Modules (`import`) |  
| **Package Manager**    | npm/yarn            | No package manager (URL imports) |  
| **Security**           | Full system access  | Permission flags (e.g., `--allow-read`) |  
| **TypeScript**         | Needs configuration | Built-in support      |  
| **Ecosystem**          | Massive (mature)    | Small (growing)       |  

---

### **4. Bun**
- **What it is**: A fast, modern JavaScript runtime and toolkit (alternative to Node.js and Deno)  
- **Created by**: Jarred Sumner (released in 2022)  
- **Core Tech**: Built on **JavaScriptCore** (the engine used in WebKit/Safari)  
- **Purpose**:  
  - Run JavaScript/TypeScript code (server-side)  
  - Replace multiple tools (runtime, package manager, bundler, test runner)  
  - Optimize performance for modern development workflows  
- **Key Features**:  
  - Extremely fast startup and execution times  
  - Built-in package manager (compatible with npm packages)  
  - Native bundler and test runner  
  - Native TypeScript support (no configuration needed)  
  - ES Modules (`import` syntax) by default  
  - Secure by default (explicit permissions for file/network access)

---

### **Node.js vs Deno.js vs Bun**
| Feature                | Node.js              | Deno.js               | Bun                   |
|------------------------|----------------------|-----------------------|-----------------------|
| **Engine**             | V8 (Chrome)          | V8 (Chrome)           | JavaScriptCore (Safari) |
| **Modules**            | CommonJS (`require`) | ES Modules (`import`) | ES Modules (`import`) |
| **Package Manager**    | npm/yarn             | URL imports           | Built-in (npm-compatible) |
| **Security**           | Full system access   | Permission flags      | Permission flags      |
| **TypeScript**         | Needs config         | Built-in              | Built-in              |
| **Performance**        | Moderate             | Faster than Node.js   | Extremely fast        |
| **Ecosystem**          | Massive (mature)     | Small (growing)       | Growing               |

---