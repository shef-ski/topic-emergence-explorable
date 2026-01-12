

The topic attachment score $A$ is calculated as:

$$
A = w_{align} \cdot v_{align} + w_{nnv} \cdot v_{nnv} + w_{inv} \cdot v_{inv} - t_{rel}
$$

Where:
* $A$: Current topic attachment
* $w$: The weights for alignment, network news value, and initial news value
* $v$: The normalized values ($[0, 1]$) for alignment and news values
* $t_{rel}$: Relative age of the topic

The weights are normalized such that their sum equals 1, and the input values scale between 0 and 1:

$$
w_{align} + w_{net} + w_{init} = 1
$$
$$
0 \le \{v_{align}, v_{net}, v_{init}\} \le 1
$$

