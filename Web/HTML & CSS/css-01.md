- [What's CSS?](#whats-css)
- [An Example](#an-example)

## The best Link

[The best Web Dev Tutorial Website](https://btholt.github.io/intro-to-web-dev-v2)
# What's CSS?

Okay, now we've began putting HTML elements on a page. Using our house-building analogy, this is like we have all the materials now in a pile in front of our house. However a pile of lumber does not make a house. We're going to start reasoning about how to put together these things, how to create our blueprints, our plans. CSS is really powerful and can accomplish a wide variety of things: colors, sizes, order, positioning, hiding, showing, animation, etc. We'll scratch the surface here, but know you can do a lot with just CSS. It's a deep subject and a powerful tool.


# An Example

```css

h1 {
  color: red;
}

```

1. `h1` — This is what we'd call the selector. Anything that matches this selector is going to have everything inside the { } applied to it. These selectors can be a wide variety of things but for now we're just selecting every h1 on the page. That's important to keep in mind too: it'll apply the changes to everything that matches that selector.
2. `color:` – This is called the property. There are about ~350 properties that you can use but to be honest you'll never use all of them. Maybe fifty to a hundred are used frequently and the rest are a long tail that are rarely used. The color property affects the color of the font (as well as some other things, but for now just assume it means font color.)
3. `red` – This is the value. This identifies what the value of the property is going to be. In this case, we're telling the color to be red. There are variety of ways to define color in CSS. This is called using "named color", of which there are about 150 different colors that CSS understands. CSS also understands hex values like #ff0000, rgb values like rgb(255, 0, 0), and hsl values like hsl(0, 100%, 50%). All those values I gave in the previous sentence are the same color as red. You don't actually need to understand how these values work to understand web programming or CSS and I would assert most web developers don't. If you need to understand, here's a great article on it from CSS Tricks.
4. `;`– Every property-value pair will end in a semicolon. Think of it like a period/full-stop to end of a sentence. This is how the computer knows you're done with that property and moving on. 

> 💡 The `em` unit is actually the number of "m"'s in that particular font-family. So, if there's a property `font-size: 2em;`, this means that the font-size should be in proportion to 2 m's of that particular font. Also, the unit `rem` means root m's: which means the number of m's at the base/root size of the font. Generally the root/base size is 16px, unless explicitly changed by the developer.

