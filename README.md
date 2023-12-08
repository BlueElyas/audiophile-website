# **AudioPhile Multi-page Application**
## Technologies used: React, Tailwind, Typescript

This project is a multipage application using React, Tailwind, Typescript and React-Router-6

### What I have done

1. **SVG Components**

 One thing I decided to do early on was create component of svg files in order to reduce clutter in the code. This made it to reuse the svg files as well

2. **Reusable Components**

 In order to make life easier, I decided to create reusable components such as the button component that can be styled with a style prop. It ensure that the design is consistent throughout and I make my code DRY. I will also be adding onClick routing props to it later on.

3. **Refactoring**

In my HeadphoneDetails component, I was originally using useParams() and importing the data from the data.json file. However, I realised that this was not helping me and in fact it would make more sense to pass down the data from a parent element rather than import. So I refactored the link in ProductSelection component to accept a state attribute so I would be able to use that instead. I was able to use the useLocation() hook in order to retrieve that state and utilize it in the headphone details component

### What I struggled with

**Typescript with react**

1. Using typescript for te first time in a react project, I was confused about how to handle props due to the nature of typescript. This led me to find out about specific types within react (e.g., JSX.Element and FC<props>) that has enabled a greater understanding.

### What I learnt
