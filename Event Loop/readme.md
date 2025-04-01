<!-- Event loop ka role: Event loop yeh decide karta hai ki kis phase me kaunsa asynchronous task execute hoga. -->

## Event Loop in Node.js

### Event Loop Kya Hai?

Node.js mein **Event Loop** ek important part hai jo asynchronous operations ko handle karta hai, jaise ki file read karna, network request bhejna, ya user input wait karna. Node.js **single-threaded** hai, iska matlab ek waqt pe sirf ek task hi execute hota hai. Par **Event Loop** ki wajah se Node.js ek hi thread pe multiple tasks ko handle kar pata hai bina kisi task ko block kiye.

### Event Loop Ki Zarurat Kyun Hai?

Agar aap traditional server architecture soch rahe hain, toh har request ke liye server ko wait karna padta hai jab tak ek request ka response complete nahi ho jata. Matlab ek request complete hone ke baad hi doosri request ko process kiya jata hai. Lekin Node.js mein aisa nahi hota! Yeh **non-blocking** hota hai, matlab ek time pe multiple requests ko process kar sakta hai bina kisi ko wait karaye.

### Event Loop Kaise Kaam Karta Hai?

1. **Single-Threaded, Non-Blocking**:  
   Node.js ek **single thread** pe kaam karta hai, iska matlab ek waqt pe sirf ek operation hi run ho sakta hai. Par jab koi **I/O operation** (jaise file read, network request) hota hai, toh Node.js usko background mein delegate kar deta hai aur apne thread pe doosre tasks handle karta rehta hai. Jab wo operation complete ho jata hai, uska **callback function** event loop ke queue mein chala jata hai aur jab event loop ka turn aata hai, toh us callback ko execute kar leta hai.

2. **Event Loop Phases**:  
   Event Loop apne cycle mein kai **phases** mein kaam karta hai. Har phase ka apna kaam hota hai. Yeh phases hain:

   - **Timers**: Is phase mein `setTimeout()` aur `setInterval()` ke callbacks execute hote hain. Agar timer ka time ho gaya hai, toh uska callback execute hota hai.
   - **I/O Callbacks**: Yeh phase I/O operations ke callbacks ko handle karta hai, jaise file read karna ya network requests.
   - **Idle, Prepare**: Yeh Node.js ke internal tasks ko manage karta hai jo event loop ke liye zaroori hote hain, lekin user ke code ka part nahi hote.
   - **Poll**: Yeh phase event loop ka main part hai. Ismein I/O operations ke callbacks handle kiye jate hain jo abhi tak complete nahi huye hote hain.

### Simplified Flow:

1. Jab aap koi **asynchronous task** (like database query, file read) request karte ho, Node.js usko system ke paas bhej deta hai aur wait nahi karta.
2. Task complete hone par, callback function ko event loop ke **queue** mein daal diya jata hai.
3. Jab event loop ka turn aata hai, toh wo queue se callback ko uthata hai aur execute karta hai.

### Example:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Middle");
}, 0);

console.log("End");
