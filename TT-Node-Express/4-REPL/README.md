### REPL

- its stand for Read-Eval-Print-Loop or Read,Evaluate,Print,Loop.
- it's an interactive Programing environment that allows you to execute JS Code one statement at a time
- Write "node" to go into REPL Environment | for Exit Press "CTRL + D"
- you can write basic js code and operationjust like Browser Devtools

### How to go on REPL Mode?
- first check node install or not in CLI(Terminal) => node -v
- then check write -> node
- its shows to 
welcome to nodejs vxx.xx.xx
Type ".help" for more information
- write ".help" its shows
- Press Ctrl+C to abort current Expression,Ctrl+D to exit the REPL
>

====> in short => node -> .help -> REPLENVIRONMENT oPEN | TO CLOSE REPL => Ctrl +D

* Examples :-

- 3+3=6
- 3*3=9
- 7/2=3.5
- let arr = [1,2,3,4,5];
 arr.map((num)=>num*3)
 arr = [3,6,9,12,15]

 ### REPL:Read-Eval-Print-Loop

 - Each Part of the acronym highlight specific step in how to REPL Works
 - read the code goes to parses into JS code
 - evaluated by end to end in js engine.if its expression is valid
 - then it prints to console
 - loop means that the same process done repeadtedly  


# REPL->Read-Eval-Print-Loop

* Read -> read the user input and pareses into Data Structure that js engine can understand
* Eval -> the parse input is evaluated by js .if the input is valid expression the REPL computes the result
* Print -> result of the  evaluated expression is printed back to the console so the everyone can see the output
* Loop -> the process then loops back, waiting for the next input and continues untill user stop