
# Node.js Callbacks

## 📌 Callback Kya Hai Node.js Mein?
Ek **callback** ek aisi function hoti hai jo ek aur function ke argument ke roop mein pass hoti hai aur jab wo function complete hota hai tab execute hoti hai.

Node.js **asynchronous** aur **non-blocking** hai, iska matlab ye operations jaise ki file reading, database queries, ya network requests ka wait nahi karta. Balki ye callbacks ka use karke in operations ko efficiently handle karta hai.

---

## 📌 Callbacks Kyun Use Karein?
- **Asynchronous operations ko efficiently handle karta hai**
- **Execution ko block hone se bachata hai**
- **Multiple tasks parallel execute karne ki suvidha deta hai**

---

## 📌 Callback Function ka Basic Example
```javascript
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("John", sayGoodbye);
```
### 🔹 Output:
```
Hello, John!
Goodbye!
```
Yahan `sayGoodbye` ek callback function hai jo `greet` function complete hone ke baad execute hoti hai.

---

## 📌 Asynchronous Callback Example `setTimeout()` Ke Sath
```javascript
console.log("Start");

setTimeout(() => {
  console.log("2 seconds ke baad execute ho raha hai...");
}, 2000);

console.log("End");
```
### 🔹 Output:
```
Start
End
2 seconds ke baad execute ho raha hai...
```
Yahan `setTimeout()` asynchronus hai, isliye "End" pehle print hota hai aur 2 second baad callback function execute hota hai.

---

## 📌 Callback in Node.js File System (`fs` Module)
Node.js ke built-in modules jaise `fs` callbacks ka use karte hain.

const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("File read karne mein error aayi:", err);
    return;
  }
  console.log("File content:", data);
});
```
Yahan, `fs.readFile()` ek file ko **asynchronously** read karta hai aur jab operation complete hota hai tab callback function execute hota hai.


## 📌 Callbacks Mein Errors Handle Karna (Error-First Pattern)
Node.js **error-first callback** convention follow karta hai jisme callback function ka pehla argument hamesha error object hota hai.

```javascript
fs.readFile("nonexistent.txt", "utf8", (err, data) => {
  if (err) {
    console.error("File nahi mili! Error:", err.message);
    return;
  }
  console.log("File content:", data);
});
```
Agar file exist nahi karti hai, to `err` error ka detail dega.

---

## 📌 Callback Hell (Nested Callbacks Problem)
Agar multiple asynchronous operations ek dusre par dependent ho to callbacks deeply nested ho jati hain, jo code ko complex bana deti hai.

fs.readFile("file1.txt", "utf8", (err, data1) => {
  if (err) return console.log(err);
  
  fs.readFile("file2.txt", "utf8", (err, data2) => {
    if (err) return console.log(err);
    
    fs.readFile("file3.txt", "utf8", (err, data3) => {
      if (err) return console.log(err);
      console.log(data1, data2, data3);
    });
  });
});

Is tarah ke **"pyramid of doom"** se bachne ke liye **Promises aur `async/await`** ka use karte hain.

---

## 📌 Callbacks Ko Promises Mein Convert Karna
Callback hell se bachne ke liye hum **Promises** ka use kar sakte hain.


const fs = require("fs").promises;

async function readFiles() {
  try {
    const data1 = await fs.readFile("file1.txt", "utf8");
    const data2 = await fs.readFile("file2.txt", "utf8");
    const data3 = await fs.readFile("file3.txt", "utf8");
    console.log(data1, data2, data3);
  } catch (error) {
    console.log("File read karne mein error aayi:", error);
  }
}

readFiles();

`async/await` ka use karke code **clean aur readable** ho jata hai aur asynchronous operations easily handle hote hain.


