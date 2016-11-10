/**
 * Created by njporter10 on 8/16/16.  */

# Back-Propagation

Neural Network trained using back-propagation

In the derivation.js file you can find the information for the derivation of the sigmoid transfer function, which will be used in
the training of the network. Since the sigmoid equation is smooth in terms of it's graphical representation, it's derivation  will be very
 nice for training the network.

**If one is using a neural net and expecting NEGATIVE outputs they will want to use the Hyperbolic Tangent equation instead of Sigmoid.




A simple depiction of a single layer neural net can be found here:
https://upload.wikimedia.org/wikipedia/commons/4/42/A_simple_neural_network_with_two_input_units_and_one_output_unit.png

Ideally by the end of this project we will have a network with multiple layers:
http://mines.humanoriented.com/classes/2010/fall/csci568/portfolio_exports/bfindley/images/multilayer.gif

At first the network will be Supervised, meaning the outputs will be provided during training.
Next we will attempt to have Unsupervised training, which should return the output in clusters! (Which is really cool if you can figure out why data is grouped in the certain way)

This is one of few attempts to program neural nets w/ back-propagation using JavaScript


-------------------------------------------------------------------------------------------------------------------------------------

Sigmoid transfer function

Details:
- 3 layer network
- Differentiable
- Continuous Function
- f(net) can be defined

-----------------------------------------------------------------------------------------------------------------------------------------

Back-Propagation

(Purpose) Combine non-linear systems capable of making decisions, with the objective of Least Mean Error (LMS) & gradient descent

2 phases of the back-propagation rule:
    1st PHASE: Input is propagated forward through the network to compute the output value
                a(sub)pi ---> activation value ith outpu unit for pattern(p)
                -This output is then compared to the target , resulting in a delta(Δ) term, for each output unit

    2nd PHASE: Backward pass through the network during which the Δ term is computed for each unit in the network

 Once these two phases are complete we can compute(for each weight) the product of the Δ term associated with the unit it projects
 to, multiplied by the activation of the unit it projects from.


 ----------------------------------------------------------------------------------------------------------------------------------------------

Bias Node

The sole purpose of the Bias Node is to center the data on the y-axis
