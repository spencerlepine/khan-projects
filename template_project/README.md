# Update the project URL
Change the header an link ref
- PROJECT_TITLE
- KHAN_LINK

# Download code
Paste code inside of script function
- CODE_HERE

# Add these lines at the top
```js
size(400, 400);
frameRate(30);
```

# Replace these
```diff
- getImage
+ loadImage

- createFont
+

- mouseIsPressed
+ mousePressed

- playSound
+ // playSound
```

# Images
Create images in `assets` folder
Find and replace imports:
```diff
- loadImage('cute/GreenGem');
+ loadImage('./assets/GreemGem.png');
```

# Other notes:
- KA uses mouseIsPressed instead of mousePressed for the global boolean. Similarly, KA uses keyIsPressed instead of keyPressed. That means you need to change mouseIsPressed and keyIsPressed when pasting your code in the template.
- KA uses degrees by default for all angle parameters, instead of radians. If you're using degrees for angles in your program, you can convert them using radians().