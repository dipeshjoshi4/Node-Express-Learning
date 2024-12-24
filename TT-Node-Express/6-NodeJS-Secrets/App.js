// console.log(global); //? work fully fine | in NodeJS Environment
// global.console.log("subscribe"); //work fine

// console.log(globalThis); //?Full Work On Any JS Environment
// globalThis.console.log(module); //? give info child,path,id


//?ForNodeJS JS Environment
// console.log(globalThis.process); === console.log(process);
// console.log(process);

//?ForBrowserOnly JS Environment
// console.log(window.document)====console.log(document);
// console.log(window.document);

//?CommonJS
// console.log(globalThis.module); //?Undefined 

//!NodeJS is All About YOur module