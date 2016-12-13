# BinarySwitcher
This is just a small Constructor to create *Binary Switchers*, binary strings (rendered as numbers) that records a set of boolean values that will be assigned to labeled propierties.

Why? You should be asking, well... because I can. Also, I want to practice *[Javascript Binary Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)*... and this is the first idea that came into my mind.

# Graphic Example

Each switcher stores something like this:

- First Switch: ON
- Another Switch: OFF
- Last Switch: OFF

But it stores it in binary strings, something like this:

```
001
```

Each bit represents the status of a switch, 0 means OFF, 1 means ON.

# Usage

Just create a new instance of a Switcher:

```
var mySwitcher = new Switcher();
```

Then add your switches

```
mySwitcher.set("first switch",true);
mySwitcher.set("another switch",false);
mySwitcher.set("last switch"); // false by default
```

And that's it, you can also check your switch's status by calling "get" method:

```
mySwitcher.get("first switch"); // returns true
mySwitcher.get("last switch"); // returns false
mySwitcher.get("non-existent switch"); // returns null
```

You can get the list of all of the existing switches by calling:

```
mySwitcher.get(); // returns an array with the names of each switch: ["first switch","another switch","last switch"]
```

Or update the status of a switch by re-seting the value:

```
mySwitcher.set("another switch",true); // Now the value is set to true!
```

As the data is stored as a binary string, you can "translate" it to readable array of 0 and 1 characters:

```
mySwitcher.getMap(); // returns an array with the switches status: [1,1,0]
```

Or get the binary string as a number:

```
mySwitcher.getMap(true); // returns the binary string as a number: 00000000000000000000000000000011 (binary) = 3 (number)
```

Aaaaaand that's about it. This is just a test to prove javascript can manipulate binary strings. Conclusion: it is posible... I never said it was useful.

Cheers!
