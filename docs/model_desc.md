# --> title and subtitle and description are here

#### (intro text)

This explorable represents an online discussion space where topics compete for the attention of users. Using a few simple rules and attributes, we can show how certain topics emerge as hot discussion subjects over longer periods of time while most topics vanish after only a brief period. Furthermore, the explorable contains a shared political dimension for users and topics by which we can observe the effect of political leanings on the attention dynamics.


# --> Complexity explorable goes here.


## This is how it works

The position of both, users (the little dots) and topics (the speech bubbles), encodes two meanings:

- **The horizontal axis** represents a one-dimensional political spectrum. You can think of it as the "left vs. right wing" debate in politics. 

- **The vertical axis** is divided into equally spaced sections which are always occupied by a discussion topic with a certain color. The vertical position and color carries no meaning except that it identifies topics (news stories, social media trends, sh*tstorms, ...).

Each user has a fixed value for the horizontal axis and follows one topic at a time, indicated by the user's color. Users also move towards their topic along the vertical axis and once there, they will slightly jiggle, perhaps representing a heated discussion around the target topic. 


## Attention-based switching

The emergence of certain topics as the center of attention is driven by an attention threshold-based switching mechanism. Each user has a certain attachment to their current topic, which we can decompose in the following four parts:

1. **Ideological alignment**: Users prefer to topics which are ideologically close to them. This equals the horizontal distance between user and topic.
2. **Popularity**: Humans are social animals which prefer things that their peers like. A topic's popularity is measured by the share of following users.
3. **Newsworthiness**: Topics have an attribute that models their implicit societal importance - think about the difference between cat pictures versus a major social issue. Newsworthiness is drawn from an exponential distribution with lambda = 1.5.
4. **Age**: Topics have a maximum age that depends on their popularity. The relatively older a topic is, the less attractive it is. Eventually, topics die and new one will appear in the news cycle.

At each step, the attachment is computed as the weighted sum of the first three parts minus the age. If the attachment is below a threshold, a user will decide to switch their topic at random.


## Observe this

When you run a simulation with the initial parameters, one or two topics will emerge in popularity after a certain amount of time - usually topics with a relatively high *newsworthiness* value. This is also measured by a normalized Gini Index, which will rise towards 1 when the attention is unequally distributed.
Then, turn up the "importance of ideology" slider. You will observe that the user base has significantly more trouble deciding on a single important topic. Moreover, less newsworthy topics have an increased chance to become the star of the show.

Try a simulation where the user base is not polarized - but normally distributed. Observe how mostly topics in the political center tend to dominate.
An explanation as to how opinion distributions arise can be found in the https://www.complexity-explorables.org/explorables/echo-chambers/ explorable. Which combination of opinion distribution, importance of ideology as well as resulting dynamics best resemble what you observe on social media? 

The explorable also illustrates the difficulty of predicting the next hot topic. There are multiple co-dependent factors at play and the timing of a news story has great effect. If a newsworthy topic appears but the timing is not right, it will not be in the news cycle for long.
This attention and agent-based model is based on ideas from the 2012 paper "Competition among memes in a world with limited attention" by Weng et al.

