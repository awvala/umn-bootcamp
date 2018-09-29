# HELPFUL LINKS

##### Presentational and Container Components (Fat and Skinny, Smart and Dumb, Stateful and Pure, etc)
https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

##### React State Management Patterns
https://itnext.io/react-state-management-patterns-908325dbb8f3

##### React Lifecycle Methods- how and when to use them (componentDidMount,etc)
https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1

##### Conditional Rendering
https://reactjs.org/docs/conditional-rendering.html

##### React Router
https://reacttraining.com/react-router/


# 20.1 Lesson Plan NOTES
**Forms, Conditional Rendering & React Router**

**Global State:** State that is maintained outside of the component tree. Typically this is Redux. The state that is held here is accessible from anywhere in the application.

**Component State:** State that is held within a component and manipulated with this.setState .

**Relative State:** State that is passed from parent to child down the component tree.

**Provided State:** The state is placed into a context ( using React’s Context API ) by a provider. It can then be consumed by components individually without the need to be passed down the component tree.

##### componentDidMount is a component lifecycle What are others
Similar to some of the DOM lifecycle events we've worked with in vanilla JavaScript or jQuery. For example, in jQuery, $(document).ready runs when the entire web page is loaded.

