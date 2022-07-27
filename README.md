# EF Digital - React Technical Test

Introduction
--------

I really enjoyed doing this tech test. As we spoke about in our first interview, I love coding beautiful things, but I can so often get caught up on the design that it takes away a lot of that enjoyment. So it was a lot of fun to work with a given scenario to take that 'thinking' element out of the creative process. I definitely had to think of what needed to be prioritised, and I opted for functionality over form, but nevertheless, I'm pretty happy with the aesthetic outcome given the time, though it's incomplete.

User Stories
--------

```
As a customer,
So that I can quickly find information on the courses I'm interested in,
I would like to be able to filter courses by their type.
```

Analysis
--------

### Approach

I wanted to approach this as I would in a commercial setting. I used a file structure where all components, related files and assets are stored in a single file for each component. I feel this helps to improve reusability and means other devs can find everything pertaining to that component quickly and easily. When decomposing the given designs, I prioritised function - the actual course panes with information and the ability to filter them - as this is what the customer is actually *there* for. Next, I built the "navbar" as I felt that the corporate brand was crucial, after functionality. Then came the header, which, as you can see, I did not get time to style; I expected as much when I started. I was less concerned about the header, as it primarily provides context, and at least the user could still ascertain the information they were actually there for, though it means accessibility comes across as an afterthought. Finally, I didn't get time to limit the results and implement the 'Show more' button, which means there is an infinite scroll, but at least the information is all there, plus it's a relatively straightforward component implementation.

I hope this prioritisation is something along the lines of what you were looking for; in the role, I would be able to adapt my thinking to the direction of the brands'.

### Challenges (and things I might do differently next time)

#### Time

Working with the time challenge definitely created some pressure - albeit enjoyable pressure - I most definitely worked up a sweat going through this. I did the basic layout styling first and implemented functionality before moving on to the more aesthetic styling just in case I hit any blockers. The last 40 minutes or so was definitely a furious styling stint, and fortunately, I did a lot of card-style designs at Makers, which meant I knew some of the 'weird' CSS behaviours and had a point of reference.

#### Responsive design

I must admit that I didn't put much weight on responsive design at Makers. In a mobile-first world and with the designs given, I knew this is something you were looking for. I have used media queries in the past, so I opted to go down this route. I'm pretty happy with the outcome, but this could definitely be polished, mainly with a design that better caters to the interim screen resolutions between desktop and mobile. I also considered using inline CSS and event listeners to make the components more self-contained and reusable, though this would've been much more time-consuming and would've required me to rely on Google a lot more. I'd be interested to know which the company prefers as I think both options can present issues when scaling.

#### Tests

I'm happy with the unit tests I did and the coverage of the individual components. Sadly, I did not get the time to do the integration tests for the courses page as a whole.

#### Library vs custom

When it came to the select, I didn't want to use a component library; I felt that a somewhat styled custom component was better than a fully styled component I didn't build. Notoriously challenging to style and keep accessible, I did not spend much time on this and only did minimal layout styling.

#### CSS structure

I aimed to keep my CSS files as tidy as possible. I'm sure there are ways in which companies like things to be done, and I know that I could pick up these consistencies and apply them to my work. Most of my divs used classes, but where possible, I did try and stick to fragments to aid performance. I also know that a library like Emotion could be used to do styling in JS, but I don't have any experience working with this tech.

#### Effect hook

I wanted to use the effect hook when re-rendering the course list to demonstrate my understanding. I tried one or two different ways, but with the time constraints and most options resulting in unnecessary lines of code or non-exhaustive dependencies, in the end, I just opted to use the change handler and utilise the inbuilt re-render on state changes. This left fewer lines of code with a more lightweight component.

### Summary

I really did have a lot of fun with this tech test. Time constraints considered, I'm pleased with the outcome. I noticed after completion that I missed the label on the dropdown; overall, there are a lot of finishing touches that could be done to the styling.

The hardest thing we can build is something we haven't done before, and although I feel this went smoothly, I definitely reinforced some concepts, and I'm happy with the cleanliness of the structure/code.

Typescript
--------

I'm familiar with the concepts of Typescript; however, I don't have any experience using the language. Although I have JS, React, Ruby/Rails and Swift under my belt and would have no concerns picking up Typescript in my own time if I was successful, I also have access to CodeAcademy Pro to bolster that learning with some projects if needed.

Getting Started
--------

### `npm start`

Runs the app in the development mode.

### `npm test`

Runs the tests.

### `npm run test:coverage`

Runs the test with coverage data.