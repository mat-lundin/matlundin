# How Does The Regular Expression To Find an HTML Tag Work?

Regular Expressions, also known as regex, are a great way to find and validate more complex string patterns. Regular expressions can be used in many applications' search and replace functionality, as well as in our Javascript files.

## Summary

This tutorial will cover the regular expression used to find one or more HTML tags based on the HTML tag syntax.

The regular expression is written as: `/^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/`

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Bracket Expressions](#bracket-expressions)
- [Character Classes](#character-classes)
- [The OR Operator](#the-or-operator)
- [Flags](#flags)
- [Character Escapes](#character-escapes)

## Regex Components

### Anchors

This regular expression uses two different characters that are referred to as anchors. 

The `^` character indicates that the value we are looking for, designated after this character, will appear at the beginning of the matched string. For this example, the first two characters (within the `/`'s, which tell Javascript we are dealing with a literal, which a regex is considered to be) are `^<` - meaning that we are looking for a `<` as the first character in the match.

The `$` character indicates that the value we are looking for, designated immediately before this character, will appear that the end of the matched string. For this example, the last character (within the `/`'s, which tell Javascript we are dealing with a literal) is `$` - meaning that we are looking for the value that comes immediately before that character as the last character in the match. In this case that value is `(?:>(.*)<\/\1>|\s+\/>)` - more complex than a simple character, but we will cover that in more detail below.

### Quantifiers

A quantifier is a value that modifies the value immediately before it. 

This regex utilizes the quantifier `+` which establishes that we need to match the previous value one or more times. In this regex, we see `([a-z]+)` which means that we are looking for a lowercase letter, a through z, at least once but potentially many times. This comes directly after `^<` so we are looking for a string that starts with `<` and is followed by one or more characters in a row, a through z.

This regex also utitlizes the quantifier `*` which will act as a "wildcard" meaning that it will look for the previous value zero or more times. That means that if the value appears in the match or not, the matching will not be affected.

### Grouping Constructs

Grouping constructs allow us to use `(` and `)` to group different values together. For example, we have `([a-z]+)` which indicates we want to match any character a through z one or more times.

### Bracket Expressions

Any time we see values encapsulated in brackets ( `[]` ) we call this a bracket expression. Bracket expressions are used to indicate we want to match anything in the list of characters within that bracket. For this example, we use `[a-z]` which indicates we want to match any character in the range of lowercase a through lowercase z. This could also be expressed by writing out each individual character like this: `[abcdefghijklmnopqrstuvwxyz]` but using the `-` character allows us to designate a range much more easily.

The other bracket expression we utilize in this regex is `[^<]` - here the `^` does not indicate that we are looking for a match at the beginning, as we saw when it was used outside of a bracket expression. Instead, since it is the first character in the bracket expression, it indicates that we do not want to match if the character is a `<`. If we wanted a bracket expression to look for either `^` or `<`, we would need to write it as `[<^]` since the `^` character takes on a new meaning when at the beginning of the bracket expression.

### Character Classes

Character classes make it easier to indicate we are looking for certain information in our search. In this regex, we utilize `\s` which indicates we are looking for a single white space character. This whitespace character could be a space or a tab.

### The OR Operator

To use OR within a regex, we use the "pipe" character, `|`. 

In this regex, we see the OR character within this grouping: `(?:>(.*)<\/\1>|\s+\/>)`. This indicates that we want a match if we find either `?:>(.*)<\/\1>` OR `\s+\/>`.

### Flags

Flags can be used after the regex to change the entire search, for example if we wanted to ignore case or if we wanted to search across multiple lines, ignoring new line characters and carriage returns.
This regex does not utilize any flags.

### Character Escapes

Character escapes are how we tell our regular expression to look for a specific literal character. We indicate this by surrounding the literal character we want to match in backslashes ( `\\` ). In this example, we utilize a character escape here: `\/\`. This tells the regex that we want to look for literally the character `/`.

## Author

Mat Lundin worked in technology for ten years at multiple companies until 2021, when he enrolled in the Coding Bootcamp at the University of Texas, Austin. Please check out his [Github](https://github.com/mat-lundin)!
