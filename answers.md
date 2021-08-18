Questions

We'd also appreciate it if you could go into some detail regarding your knowledge on the below:
● Web Accessibility (WAI) 
● Frontend code optimization (speed and performance) 
● React (how the component cycle works, if have experience with redux reducers/actions, webpack, code efficiency, optimization, and performance)




## Web Accessibility

Web accessibility means that websites, tools, and technologies are designed and developed so that everyone including those with disabilities can use them.

Many internet users are faced with common disabilities (Visual impairment, Hearing Impairment, Physical Disabilities and Cognitive Disabilities) which makes it difficult to use certain websites. Many of these people use assistive technologies to browse the internet. This includes screen readers that vocalize the text on each page, speech recognition software that converts speech into text and other technologies. 

Hence there is a need for building websites that work with these assistive technologies such that it’s possible for almost anybody to browse the web and also to improve the disabled users experience.

Personally, when building websites or web applications, I rely on the W3c accessibility standards

First, I will ensure the Site Is Keyboard-Friendly. Next, I will add Alt Text to All Image tags just incase the images fails to load and also to assist screen readers to communicate with visually impaired users. I use tables to display large set of data. Also I add pagination to the table data depending on how massive the data is.


## Front end Optimization 

Front end optimization (FEO), also known as content optimization, is the process of maximizing the efficiency of your website to make it more quicker to load.

These are some handy tips I mostly fall back on when I have a task to optimize any website:

- Enable Prefetching so that necessary sources and data will be preloaded before they are needed.
- Compressing files with Gzip.
- Remove unused css and javascript.
- Increasing speed with browser caching so when one wants to access them, there is no need to download them again from a server 
- Optimizing videos
- Reduce external http requests and redirects
- Lazy loading of resources: Usually, when you load a web page, the browser requests all of its resources regardless of whether they’re out of sight. Lazy loading allows us to only load resources which are visible and asynchronously load the rest on-demand as the user scrolls. This reduces the number of requests on initial load and can speed up the process considerably.
- Use Code Splitting
- Reduced use of web fonts
 
Google Lighthouse has really been a helpful tool to me when it comes to frontend optimization because it provides useful suggestions on what is making your website slow and what must be done to optimize it.


## React Lifecycle

Every component in React goes through a lifecycle of events. I like to use the following analogy a lot to describe the react lifecycle.
Mounting – Birth of your component
Update – Growth of your component
Unmount – Death of your component

### componentDidMount
The componentDidMount lifecycle method executes when your component is mounted on the DOM. The mounting stage is commonly used for making request to external API endpoint and retrieving data in web applications.


### componentDidUpdate
After the component is mounted and rendered into the DOM, react watches for any change in the component’s state and props passed down to the component. Whenever there is a change in the state or props, react repaints the virtual DOM, then compares the virtual DOM to the actual DOM and finally rerenders the actual DOM with the updates.   
The componentDidUpdate lifecycle method is invoked immediately react notices that a prop or state has changed.


### componentWillUnmount

The componentWillUnmount lifecycle method is invoked immediately before a component is unmounted and destroyed. It is suitable for handling clean up  such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount.
Here is the dropbox link to a great piece I wrote on Life Cycle methods Vs useEffect Hook in React (https://www.dropbox.com/scl/fi/9g8v0uu76e0l0ozy7ygor/Life-Cycle-methods-Vs-useEffect-Hook-in-React.paper?dl=0&rlkey=9bbgx6oh6itbf8khk0pyxbycd)


### Redux

Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test. It's mostly used as a state management tool in large React applications.

I love using this analogy to describe react-redux to a non-tech savy.

Considering events like going to withdraw some money from the bank, the intention you’ve got in mind to perform is to WITHDRAW_CASH 
You need to follow some predefined steps to fulfill your action:
1. When you get into the bank, you then go straight to the Cashier to make your request known.
2. The cashier enters some commands in their computer which checks if you have an existing account, if you have enough funds in your account. 
3. If all these tests are passed, the cashier delivers your cash from the bank vault to you.
 
Let’s extract the key redux terminology from our analogy:
1. The Bank Vault is analogous to the Store in redux.
While the bank vault keeps the money, the redux store keeps the application state.
2. The intention of the bank user is analogous to Actions in redux.
The only way a bank user can make some transactions with the bank is to declare an appropriate intention to the cashier. Similarly in redux, the only way to change/update the state is to dispatch an action, which is a javascript object describing what should happen.
3. The Cashier is to the bank what the reducer is to Redux.

I have great experience using redux for two years now.
Here is the dropbox link to a great piece I wrote on react and redux (https://www.dropbox.com/scl/fi/4rp2adnh566emkeykj3j4/Build-a-Note-Taking-Application-With-React-and-Redux.paper?dl=0&rlkey=tp3fnizlmf2qg9prffzmwlr32)
 
## Webpack

Webpack is a tool used underneath create-react-app to bundle files. It bundles all our files into static asset. Before the existence of module bundlers like webpack, bundling files were done manually. But webpack now automates the process making developers to focus on building new features. 

It requires an entry file which is usually a javascript file and an output for keeping the bundle files.

Webpack is made of loaders and plugins.

Loaders are tools that transpile our code example Babel which transpile from es6 or a newer version of javascript to es5 so that our code will execute even on older browsers.

Plugins  are the main building blocks of Webpack. They are like loaders but they can do things that loaders can’t do.

It can perform many operations including:
- helps you bundle your resources.
- watches for changes and  rebuild the bundle when a change in your app happens, and it keeps listening for the next change.
- can run Babel transpilation to ES5, allowing you to use the latest JavaScript features without worrying about browser support.
- can convert inline images to data URIs.
- handle images and other asset types like fonts, CSV files, XML, and more.
- can run a development webserver.
- can handle hot module replacement.
- Uses sass-loader, css-loader and style-loader to Process SASS code and transpile it to CSS
- can split the output files into multiple files to avoid having a huge JS file to load in the first page hit.
- can perform tree shaking.

In one of my recent projects, I was able to use webpack to parses PHP code and convert it to AST then convert the AST to Javascript.
 

### Performance
Performance entails the speed of operation on a website. Visitors usually expect a website to load within two seconds and when they wait longer than usual, the tend to leave the site and not return again.

To view a website, the browser has to download all the resources that needs to be rendered in the browser. Minimizing text and images with tool like uglify.js.
About minimizing image, using jpeg gives me more transparency. I Reduce jpeg with jpeg optimizer. This is the old school method of website optimization.

In modern web development, using a javascript framework like react will improve the performance of your website because, internally react uses several clever techniques to minimize the number of costly DOM operations required to update the UI. For many applications, using React will lead to a fast user interface without doing much work to specifically optimize for performance.

React has a powerful tool for measuring performance. Using the react-addons-perf library I can get an overview of my react app’s overall performance. react-addons-perf will print a table with the amount of time components wasted in rendering.

Personally, I do not start optimizing code that I feel may be slowing my app down. Instead, I let React performance measuring tools guide me through the way.

If I have to render large lists of data, I will render only a small portion of the datasets at a time within the visible viewport of a browser, then render the next data as the lists is scrolled, this is called “windowing”. I use these awesome React libraries  react-window and react-virtualized by Brian Vaughn for that.

In my most recent job, I was tasked with making our website load quicker. Through my experience in web optimization, I was able to improve the loading and rendering times by 10%.