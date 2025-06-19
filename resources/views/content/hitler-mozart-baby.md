# Hitler, Mozart and a baby in the park

I was wondering whether the child I saw this morning would grow up to become the next Hitler, and I thought about calculating the probability of that happening. I know-you need some context. I don't usually see children and think, "_Hmm, I wonder whether this little guy will be the next Hitler_."

Story time.
It was a nice, sunny morning in the park next to my apartment. I was walking by, as I usually do, when I saw a child sitting in his light-blue trolley next to his parents. The trolley had some sort of transparent protective shield-perhaps to protect against the sun or the wind.

The boy looked to be about a year old and had a beautiful smile on his baby face. His parents were smiling too, chatting about something - perhaps about their beautiful child and the bright future that awaits him.

I'm not sure they were talking about _that_, but I started thinking about it, about life, about our lives. More than _100 million_ children are born every year. Their parents have dreams and expectations for them.

How many of those dreams and expectations actually come true?

I don't suppose anyone really knows, but if I had to assign a number to it, I'd say about 20%. Don't ask me why - that's a topic for another day.

I was thinking about this child - what will he grow up to become? Perhaps a musician, a scientist, a bus driver, a bartender, a penguin trainer... a combination of some of those, or something completely different.

Maybe he'll be the next Mozart or the next Einstein, Gagarin or Shakespeare. Or maybe he'll become the next Hitler. How would I know?

So, I thought: what are the chances this child will grow up to become the next Hitler?

## Coin flip

Without giving it much thought, the naive answer might seem to be 50% - a one-in-two chance. He either _will_ or _will not_ become Hitler.

But that doesn't sound right. Is it really like a coin flip?

If that were the case, then every little boy would grow up to become Hitler with 50% probability - and that clearly can't be true. If it were, the world would be full of Hitlers. And honestly, I doubt humanity would be growing this fast. People would probably think twice before having children.

Of course, it's not like a coin flip. A (fair) coin flip has only two outcomes: heads or tails. If it's not tails, then it's certainly heads.

In the case of a child's future, there are far more than two outcomes. He could grow up to be Mozart or Einstein or Gagarin or Shakespeare - or someone entirely different. So the probability of him becoming Hitler would be _1 divided by the number of all possible outcomes_.

But then, how many possible outcomes are there? It seems endless. Or is it?

Actually, the number of possible outcomes depends on our definitions. What does it even mean for someone to become the next Hitler or the next Mozart? Do they need to have the same name? The same face? Be born in the same place? Do they need to do the exact same things? Think the same thoughts? That list could go on for a while.

A more reasonable interpretation might be: someone with similar impact or influence. But even that's hard to calculate - if it's even possible.

Still, let's give it a try anyway.

## Mozart

Let's leave Hitler alone for now and try something a little less morally charged: calculating the probability of a child becoming the next Mozart.

First, we need to define what that even means.

What separates Mozart from everyone else? Well, a lot of things - but most of them aren't easy to measure. The quality of his work, the influence he had, his legacy... all of that is real, but subjective. Here are 2 points that I can work with:

1. He was a classical composer.
2. He composed 41 symphonies.

So, for the sake of this exercise, I'll define "becoming the next Mozart" as: **becoming a composer and composing at least 41 symphonies**.
Does that truly make someone the next Mozart? Not necessarily. But for now, that's the best I can do - and it gives us something to count.

## Probability of becoming a classical composer

There are far too many factors that influence a person's choice of occupation - family, culture, economics, education, opportunity - and most of them can't easily be quantified.

So, I'm going to ignore all of that and take a much simpler approach, one that allows me to get a number I can work with.

Here's how I see it: in order for someone to become a composer, they must not become a surgeon, a movie critic, an astronaut, or anything else.

Now, imagine a world with only two possible occupations: hunter or agriculturalist. In that case, _assuming total randomness_, the chance of choosing either one would be 50%, right?

Well... not exactly. Maybe more women become hunters than men. Or maybe occupations are assigned by a village council that considers the community's needs. Or maybe something else entirely.

But for the sake of simplicity, I'm going to assume all occupations are equally likely.

So, if I knew how many occupations there were, that would help with this simplified problem. Time to search the
Internet.

What I found is that different countries have different regulations, divisions, and naming systems for occupations. To keep things grounded, I'll use the classification from the U.S. Bureau of Labor Statistics, which currently lists 832 entries.

What I found is that different countries have different regulations, divisions, and naming systems for occupations. To keep things moving, I'll use the classification from the [U.S. Bureau of Labor Statistics](https://www.bls.gov/ooh/occupation-finder.htm), which currently lists 832 entries.

That gives me a number I can use - so I'll go with that.

Among those 832 occupations I found _Music Directors and Composers_. Unfortunately, it doesn't break that down any further - no distinction between classical and non-classical composers.

To narrow it down, I'll make my own rough internal division:

```
Music directors and composers
|__ music directors
|__ ...
|__ composers
|__ classical composers
|__ other (non-classical) composers
```

Of course, these subcategories aren't official - I'm just making them up for the sake of getting an estimate. I won't count the whole occupation as "classical composers," because that would clearly overestimate things. So, I'll assign just a fraction of this group to the classical side.

To move forward, I need to make two more assumptions:

1. The child will have one and only one occupation.
2. The list from the BLS contains all possible occupations.

Given that, the probability of the child becoming a music director or composer is 1 in 832.
Assuming a 50/50 split, there's a 1 in 2 chance they'll be a composer rather than a music director, bringing the probability to 1 in 1,664.
Then, assuming again a 50/50 split between classical and non-classical composers, the probability becomes:

1 in 3,328.

So, under these very simplified assumptions: `The child's chances of becoming a classical composer are 1 in 3,328.`

## Probability of composing 41+ symphonies

I found this [list of symphony composers](https://en.wikipedia.org/wiki/List_of_symphony_composers). It includes 1,481 composers born since 1650, along with the number of symphonies each composed.

Now, the list isn't in an ideal format, and I could convert it, clean it, and extract the numbers I need. But I'm not going to. I'll make another assumption instead - I've made plenty already today.

Let's say that 41 composers out of the 1,481 have composed at least 41 symphonies. That's good enough for me.

So, ignoring all other factors, the probability that `a composer will produce more than 40 symphonies is 41 in 1,481, or approximately 1 in 36.`

## Total probability

We're dealing with two dependent events here. To get the total probability, we multiply the probabilities of each individual event. The events _are_ indeed dependent - the child must both become a classical composer _and_ compose at least 41 symphonies.

```matlab
1           1        1
------- x ----- = ---------
3.328      36      119.808
```

That gives us a final probability of approximately: `1 in 120,000`. In other words, the chance that a child will become the next Mozart, or rather a classical composer and compose at least 41 symphonies is roughly 1 in 120,000.

What does this mean? Well, one way to interpret it is: every 120-thousandth child would be a "Mozart" - by this specific definition. But over 100 million babies are born every year. So... where are all the Mozarts?

Clearly, this number isn't telling the full story. It can't be the actual probability that the child in the park will become the next Mozart. I've made a lot of assumptions and simplified the problem heavily.

Reality is messier, much harder to quantify - and, perhaps, more interesting because of it.

I think a _precise calculation_ of a child becoming the next _whoever_you_want_ is simply impossible - because the definition will always be imprecise and incomplete. No matter what definition I use, I can always add at least one more rule to it. We can only make calculations based on a clearly defined set of rules. It so happens that my set of rules had just two items.

> A basic rule of mathematical life: if the universe hands you a hard problem, try to solve an easier one instead, and hope the simple version is close enough to the original problem that the universe doesn't object.

I love this paragraph from "How Not to Be Wrong: The Power of Mathematical Thinking" by Jordan Ellenberg. I'm no mathematician, but it's a good rule to live by.

The universe doesn't care about this problem anyway - I handed it to myself, and I don't object.

---

### References

- [https://data.unicef.org/how-many/how-many-babies-are-born-each-year-in-the-us](https://data.unicef.org/how-many/how-many-babies-are-born-each-year-in-the-us/) -change _us_ to _world_ in the search box
- [https://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart](https://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart)
- [https://en.wikipedia.org/wiki/List_of_compositions_by_Wolfgang_Amadeus_Mozart](https://en.wikipedia.org/wiki/List_of_compositions_by_Wolfgang_Amadeus_Mozart)
- [https://en.wikipedia.org/wiki/List_of_symphony_composers](https://en.wikipedia.org/wiki/List_of_symphony_composers)
- [https://www.bls.gov/ooh/occupation-finder.htm](https://www.bls.gov/ooh/occupation-finder.htm)
- [https://www.jordanellenberg.com/book/how-not-to-be-wrong/](https://www.jordanellenberg.com/book/how-not-to-be-wrong/)
