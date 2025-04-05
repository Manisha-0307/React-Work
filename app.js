/*
* <div id="parent">
<div id="child1">
<h1>Hello Heading</h1>
<h2>Hello Sibling</h2>
</div>

<div id="child2">
<h1>Hello Heading</h1>
<h2>Hello Sibling</h2>
</div>
</div>
*
*/ 

import React from 'react';
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client'

const child1 = React.createElement('div', {id:"child1"}, [React.createElement('h1', {}, "Hello Heading from child1"),React.createElement('h2', {}, "Hello Sibling from child1")] )

const child2 = React.createElement('div', {id:"child2"}, [React.createElement('h1', {}, "Hello Heading from child2"),React.createElement('h2', {}, "Hello Sibling from child2")] )

const parent = React.createElement('div', {id:"parent"},[child1, child2])



// const heading = React.createElement("h1", {}, "Hello world from react");
const root = createRoot(document.getElementById("root"));
root.render(parent);
