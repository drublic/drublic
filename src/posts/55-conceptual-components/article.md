<div class="post__intro" markdown="1">
  In this post I want to show a way to use Higher-Order Components with React Hooks in order to structure complex components. This method can be described as an architectural proposal to give Hooks a straight forward way to use them in order to prevent developers from falling for the taps Hooks do have.
</div>

This article and architecture concept might be for you if you had one of the thoughts yourself:

> * My components become quite large and hard to maintain.
> * I don’t know where to find this logic which handles my component’s behavior.
> * How do I test this complex component and can be sure it works?

A couple of days ago I came across [this article from Albert Chu](https://medium.com/@albertchu539/higher-order-components-in-a-react-hooks-world-69fe1f0b0791) describing the advantages of Higher-Order Components (HOCs) and how they are useful in a project with React Hooks.
Albert describes the use cases for HOCs and outlines how you can use them to structure your components.

I want to add some more thought to this.

## Use-Cases for Higher Order Components

The main reason for me to use Higher-Order Components is that they help you to separate the business logic or controlling logic from the presentation. This pattern enforces [Separation of Concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) and helps to implement the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle).

A lot of advocacy around the topic of Hooks is as follows: You can use state within your Function-Component, so you don't need to use a HOC for that. Same goes for lifecycle logic and hooks based on `useEffect` and others.
Lately I have seen a lot of developers doing exactly this: They put their local state into the Presentation Component and any lifecycle method is handled within this one component. For a long time I was on the same track but now for me this is not a good idea in most cases.

> The disadvantage to hooks is that if you use them incorrectly, you could spread logic that could be self-contained in one place across all the components in your app, opening up lots of opportunities to forget things or to spread duplicated bugs into a thousand places in your app instead of just one.
 
– From Eric Elliott, [Do React Hooks Replace Higher Order Components (HOCs)?](https://medium.com/javascript-scene/do-react-hooks-replace-higher-order-components-hocs-7ae4a08b7b58)

An additional though to Eric's words is that you mix up your logic of the component with the presentation itself. With this it becomes more complicated to understand and to test components. Especially if your components hold a lot of logic.

So here is a proposal to use Higher-Order Components to tackle these problems:

## Using HOCs to structure Complex Components

Using Higher Order Components to decouple logic from pure presentation of a component is quite simple. Just remove all the code that is related to handling state and the lifecycle of the component and put it into a separate component, the HOC.

Let's look at a minimalistic example.

This component contains some state and a life-cycle behavior.

<script src="https://gist.github.com/drublic/cf1e4ad38693f99a803d931b332b26e9.js"></script>

Now we can separte out both the state and the life-cycle behavior into a Higher-Order Component.

Apart from that it is possible to use [Custom Hooks](https://reactjs.org/docs/hooks-custom.html) for the life-cycle behavior itself which represents the logic of the component.

The React Team advocates the usage of Custom Hooks if you want to share functionality between components:

> When we want to share logic between two JavaScript functions, we extract it to a third function.

– From [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html#extracting-a-custom-hook)

In my opinion it is also a valid use case for modularizing code since it helps to decouple logic and makes the code better testable.

Let’s look at the files:

<script src="https://gist.github.com/drublic/cbb99a906f8fd349298ce32b2c3b6bc8.js"></script>

As you can see, the code is more spread out into separate distinct components which supports the Separation of Concerns approach of writing code.

### Testing

You can now test Custom Hooks using [react-hooks-testing-library](https://github.com/testing-library/react-hooks-testing-library) integrated in components which is fantastic.

In my experience testing hooks is complex. If you use Enzyme you need to `mount` components to make hooks testable. And even then it is still hard to test all branches of a hook. [Adam Witalewski writes about how you can test hooks with Enzyme](https://itnext.io/testing-components-built-using-react-hooks-with-jest-enzyme-edb87d703756).

To tackle this problem here is a proposal for writing a Custom Hook:

<script src="https://gist.github.com/drublic/e7736ac2773708e0190c7722d0012c88.js"></script>

⚠️ __Disclaimer:__ This method is just a workaround. If you can I would advice to test the integration of hooks into components.

## Conceptual Components

<figure class="image image--right" markdown="1">
  ![](/assets/conceptual-components-architecture.svg)
</figure>

This is basically the architecture of what I call __Conceptual Components__.

Conceptual Components describe the way of how you structure a component in order to make the complexity of the component’s logic and presentation easier to understand.

### When to use Conceptual Components

These are the things you should consider before putting state or life-cycle behavior into a Presentation Component:

* Is there logic in this component? If yes,
  * Is the component’s logic bound in one place?
  * Can you reuse the logic in different places where it is needed?
* Is the component easily and completely testable?

When you come to the conclusion it is viable for you to put state into the Presentation Component itself, do so. In any other case use a HOC to prevent mixing logic and state.

### Summary of the advantages

* Clear separation of concerns for your code
* Easy to test API of the Presentation Component
* Unit testing for Hooks becomes easy

### The Downside of using Conceptual Components

Sure, using this architectural pattern does not come for free.
Writing HOCs that encapsulate the component’s logic brings extra code into your project. And with this comes another problem: You need to write two separate React Components which pollutes your Component Tree. This can become a positive feature though when debugging since it error stacks become more precise. 
I think it's worth the additional effort in favor of the advantages the pattern of Conceptual Components brings with it.

## Conclusion

Lately I have used the concept of Conceptual Components in my daily work. It makes reading code easy for me and removes the cluttered components that include a lot of code.

I am interested in your view on this topic. How do you solve the problem of complex components that hold a lot of code?
