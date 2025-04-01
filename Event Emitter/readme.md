# EventEmitter in Node.js

## Introduction

`EventEmitter` class Node.js ka ek bohot important component hai jo event-driven programming ko handle karta hai. Yeh `events` module ka part hai aur aapko events ke saath listeners ko manage karne ki suvidha deta hai. Jab ek event emit hota hai, toh us event ke saare listeners ko call kiya jaata hai.

Node.js ka architecture event-driven hai, aur `EventEmitter` uska core part hai. Yeh class asynchronous programming ke liye kaafi useful hoti hai, jisme aap different parts of application ke beech communication handle kar sakte ho bina block kiye.

## Key Points

- **Event-Driven Architecture**: Node.js ka jo architecture hai, woh event-driven hai, matlab jab bhi koi event occur karta hai, uske saath associated listeners ko trigger kiya jaata hai. `EventEmitter` class iss process ko manage karti hai.

- **Listeners aur Events**: Aap `EventEmitter` class ka use karke event listeners ko register kar sakte ho. Jaise hi koi event emit hota hai, uske saare listeners ko call kar diya jaata hai.

- **Asynchronous Operation**: Node.js mein I/O operations asynchronous hote hain, aur `EventEmitter` ka use karke aap asynchrony ko manage kar sakte ho.

- **Custom Events**: `EventEmitter` aapko custom events banane ka option bhi deta hai. Iska matlab hai ki aap apne custom events define kar sakte ho aur unke liye listeners ko register kar sakte ho.

## EventEmitter Class

`EventEmitter` ek class hai jo events aur unke listeners ko manage karti hai. Iska kaam yeh hai ki event ko emit karte waqt, wo saare listeners ko notify kare jo us event ke saath associated hain.

### Key Methods

1. **`on(event, listener)`**  
   Is method ka use aap event ko register karne ke liye karte ho. Jab event emit hota hai, tab listener ko call kiya jaata hai.
   ```javascript
   emitter.on('eventName', (data) => {
       console.log(data);
   });

2. **`emit(event, ...args)`**
    Yeh method event ko trigger karta hai aur saare listeners ko call karta hai. Aap event emit karte waqt data bhi pass kar sakte ho.
   ```javascript
   emitter.emit('eventName', 'Hello World');

3. **`once(event, listener)`**
    Yeh method ek listener ko add karta hai jo sirf ek baar hi trigger hoga, jab event emit hoga. Uske baad wo listener remove ho jaata hai.
     ```javascript
     emitter.once('eventName', () => {
    console.log('This will run only once');
    });

4. **`removeListener(event, listener)`**
    Yeh method ek particular listener ko remove karta hai jo ek specific event ke saath registered hai.
    ```javascript
    emitter.removeListener('eventName', listener);

5. **`removeAllListeners([event])`**
    Is method ka use aap ek event ke saare listeners ko ya phir saare events ke listeners ko remove karne ke liye karte ho.
    ```javascript
    emitter.removeAllListeners('eventName');

6. **`listeners(event)`**
    Is method se aap kisi event ke saare listeners ki list ko retrieve kar sakte ho.
    ```javascript
    const eventListeners = emitter.listeners('eventName');

7. **`listenerCount(event)`**
    Yeh method batata hai ki ek specific event ke liye kitne listeners register hain.
    ```javascript
    const count = emitter.listenerCount('eventName');

8. **`prependListener(event, listener)`**
    Is method ka use karke aap listener ko event ke beginning mein add kar sakte ho, jisse wo pehle trigger hoga baaki listeners se.
    ```javascript
    emitter.prependListener('eventName', () => {
    console.log('Prepended listener');
    });

9. **`prependOnceListener(event, listener)`**
    Yeh method ek listener ko event ke beginning mein add karta hai, jo sirf ek baar trigger hoga.
    ```javascript
    emitter.prependOnceListener('eventName', () => {
    console.log('Prepended one-time listener');
    });


    