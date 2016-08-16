/**
 * Created by njporter10 on 8/16/16.
 */
//the sigmoid eqaution is usually used as a transfer/activation fn
//between neurons

//Sigmoid fn : x = 1/(1+e^-x)

//  e = Euler's number
//in javascript Math.E is euler's number
//  e = Math.E

//Derivation of sigmoid fn
//d/dx θ (x) = d/dx(1/(1+e^-x))

//Using quotient rule
// = (e^x)/(1+e^-x)^2

//next add and subtract one to group numerato and denom nicely
// = ((1+ e^-x)-1)/(1+e^-x)^2

//Now we can split it into two different fractions
//the first fraction is nice because the top and bottom will cancel
// = ((1+ e ^-x)/(1+ e^-x)) - (1/ (1+e^-x)^2)

//the first term will cancel out and be sigma(θ) and the second will be sigma(θ) x^2
// = θ(x) - θ(x)^2 

//now we can factor and get sigma prime
// = θ(1- θ) 

//-----given a single input neuron----
// ε =input to neuron, w= weight of connection, sigma = transfer fn, o = output, theta = bias node


//   w
//ε ----->  θ -----> o
//          |
//       bias node = theta 

//Here is the equation that defines the output of the neuron
//o = θ(εw + theta)


//There can be mulitple input unodes, hidden nodes, and outputs. Together they make up layers. 
// I : Input Layer, J: Hidden Layer, K: Output Layer 
