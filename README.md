TEST# **AudioPhile Multi-page Application**
## Technologies used: React, Tailwind, Typescript

This project is a multipage application using React, Tailwind, Typescript and React-Router-6

### What I have done

1. **SVG Components**

 One thing I decided to do early on was create component of svg files in order to reduce clutter in the code. This made it to reuse the svg files as well

2. **Reusable Components**

 In order to make life easier, I decided to create reusable components such as the button component that can be styled with a style prop. It ensure that the design is consistent throughout and I make my code DRY. I will also be adding onClick routing props to it later on.

3. **Refactoring**

In my HeadphoneDetails component, I was originally using useParams() and importing the data from the data.json file. However, I realised that this was not helping me and in fact it would make more sense to pass down the data from a parent element rather than import. So I refactored the link in ProductSelection component to accept a state attribute so I would be able to use that instead. I was able to use the useLocation() hook in order to retrieve that state and utilize it in the headphone details component

4. **Creating context**

I created a context that encapsulated the whole multi-page application in order to pass important functions via the context API. It manages state and interactions of the shopping cart, such as adding, removing, increasing and decreasing the quantity of items in the cart. The state is stored in the browsers local storage meaning that the users selection are retained.

5. **Using Regex for validation**

In the checkout component, I created a reusable component that accepted componentpropswithoutref as the type. I was able to specifiy the pattern of regex depenging on the input (i.e., the phone number input should only contain numbers and the + sign).

6. **Type instead of interface**

Throughout my code, using typescript, I decided to purposefully avoid using interface and used type instead. My reasoning was that type gave a lot of flexibility in the types I could use, wherease interface required that whatever was being defined was required to be an object. With the type alias, I had a greater freedom using unions, custome types, and complex react types.

7. **Refactoring code from maing pages into smaller component**

I refactored a lot of the code by breaking down large chunks from the main pages into smaller components. This made scalability easy as well as debugging.


### What I struggled with

1. **Typescript with react**

Using typescript for te first time in a react project, I was confused about how to handle props due to the nature of typescript. This led me to find out about specific types within react (e.g., JSX.Element and FC<props>) that has enabled a greater understanding.

2. **Understanding state within context**

One of the biggest challenges I faced was managing state within the context. Balancing the complexities of state while ensuring efficient data flow proved tricky. I often found myself grappling with issues like state synchronization across components and optimizing performance. Despite these hurdles, it was a valuable learning experience. It pushed me to explore deeper aspects of state management and context usage, ultimately enhancing my skills and understanding of advanced React concepts.
