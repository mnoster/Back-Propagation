/**
 * Created by njporter10 on 8/16/16.
 */
// Back Propagation Algorithm

//Notation:
//  x L(sub)j : Input to node j of layer L
//  W L(sub)ij: Weight from  previous layer L(node i) to current layer L(node j)
//  o(x) = 1/(1+e^-x) :  Sigmoid transfer function
//  θ L(sub)j : Bias Node j of current layer L
//  O L(sub)j : Output node of j in current layer L
//  t (sub)j : Target value of node j oft the output layer

//Error Calculation
// Given a set if training dat points t(sub)j and output layer output O(sub)j
// We can write the error as:
//   Error =( 1/2 )(sum of all nodes in output layer Σ)(output-target value)^2

//We want to calculate the rate of change of the error with respect to the given connective weight, so we can minimize it

// Now there are two cases to consider. The weight is either going to be for a hidden layer or output layer

//OUTPUT layer node
//Derivation of the Error w/ respect to the weight from j to k
// j is from hidden layer node and little k is output
//  OE/OW (sub)jk = (Ok - tk)Ok(1-Ok)Oj

// Compare the derivation of the above with what Δk is equal to.
//  Δk = Ok(1-Ok)(Ok-tk) // we will use this to propagate out error backward
// Now we can substitute Δk into the OE/OW equation
//  OE/OW = OjΔk

// Hidden layer node
// We will take the derivative of the error with respect to the Weight from i to j
// OE/OW(sub)ij = OiOj(1-Oj)Σ Δk Wjk
// We can define and substitute Δj = Oj(1-Oj)Σ Δk Wjk
// So.... OE/OW(sub)ij = OiΔj

// How weights affect errors
//  For an output layer node k -> K
// For hidden layer node j -> J
//  images/HowWeightsAffectError.png

//Bias node
// It will always equal one. It centers the function on the graph

