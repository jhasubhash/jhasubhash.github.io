---
title : "Data oriented design patterns"
date : "Mon 3 Jan 2022"
excerpt : "Theories are good but practiaclity matters more. This holds true in life and in programming. Let talk about why I think that this approach reuqires serious consideration when building a software."
cover_image : "/images/posts/data.png"
--- 

I don’t recommend people to study design patterns just for the sake of sounding like a cool developer by using “those” terms in a formal/informal discussion. In my experience, the way to study design patterns is by studying the existing code in a product.
The saying, “with great power comes great responsibilities”, aptly fits here. I often see developers making attempt to use excessive design patterns in the code, as it gives them the false perception of making their code more extensible and decoupled. People who follow this path often either ignore or ignorant about the boilerplate code they introduce and the performance penalty they pay by using these patterns excessively.

<br/>

I, as a software developer, have spent the last six years, building software for desktops. I have never worked on any games as such. So this concept of data-oriented design patterns felt very new to me. I came across this, last year when my team started working on a web-based application. The project was booted from the scratch, so, all the developers wanted to start from the basics and use the best tools, technologies, and practices available for the web platform. To put things in context, the project involved creation and manipulation of large numbers of assets on the HTML canvas. Our requirement was to maintain close to 60 fps for all the canvas operations. Now, to go with the traditional object-oriented way, was not optimal. As it would have been quite heavy to manage one-one mapping of C++ objects with all the assets and if that was not enough, maintaining the relationship between the objects was cherry on top. To overcome these limitations, we opted to go with ECS (Entity component system) pattern, which can be categorized under the data-oriented design patterns.

<br/>

Above is just one of the many scenarios. There are several other scenarios where you would find that it's best to avoid using Object-oriented design patterns either to leverage parallelism by loading more data to perform operations on them simultaneously or to minimize the code footprint.