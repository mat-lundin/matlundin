# QR Codes

QR codes have become a hugely popular way to transfer information. This is a brief description on how QR codes store information and some interesting ways I've seen them used.

Much love to Dan Hollick who inspired this post with his amazing explanation, which I recommend to anyone slightly interested in this topic: https://typefully.com/DanHollick/qr-codes-T7tLlNi


## Table of Contents

- [History](#history)
- [Components](#components)
    - [Finder Pattern](#finder-pattern)
    - [Alignment Pattern](#alignment-pattern)
    - [Timing Pattern](#timing-pattern)
    - [Format](#format)
    - [Data](#data)
    - [Error Correction](#error-correction)
- [Uses](#uses)
    - [Restaurants](#restaurants)
    - [Video Games](#video-games)
    - [Gravestones](#gravestones)


## History

The Quick Response (QR) code technology was created in 1994 by Masahiro Hara, a Japanese engineer. The idea came from the black and white pieces on the board of a stategy game called Go. This is especially interesting because of the QR's later use in modern [video games](#video-games)!

## Components

Almost all of these technical explanations are from Dan Hollick's amazing article: https://typefully.com/DanHollick/qr-codes-T7tLlNi

### Finder Pattern

The finder pattern can be easily recognized as the three large squares on the top right, top left, and bottom left. This tells the scanning device that this is indeed a QR code.

### Alignment Pattern

The alignment pattern is the smaller square near the bottom right of the code. This helps whatever device is being used to scan read the code even if it is not completely parallel to the code itself. So if the user scans the code at an angle, the alignment pattern makes it so the code can still be read. This is very important for usability, since a typical non-technical user doesn't have to make sure they're exactly in line with whatever medium the code appears on.

### Timing Pattern

The timing pattern is represented as black dots running in a line between the finder pattern blocks. To the untrained eye, these dots blend in with all the other black and white spaces on the code. The timing pattern's purpose is to communicate to the scanner how large the code itself is, so the scanner can look for the rest of the information in the correct places. It also contains version information.

### Format

The format, stored in dots around the finder pattern blocks, tells the scanning device information about the [error correction](#error-correction), and what's called the mask. The mask is essentially a pattern of black and white dots that goes over the entire QR code. It switches black dots to white and vice versa. This helps the scanner read the code.

### Data

The data is stored in bytes in the bottom right corner of the code. The scanner reads the data starting at the bottom right corner, going up until it hits the format pattern, and then turning left and going back down. It will go up and down from right to left until the end of the data. Whether the code stores text, a hyperlink, or any other information, all that the end user is meant to grab from the code is stored here.

### Error Correction

The error correction information, stored in the [format](#format) section, helps the scanning device read the code if part of the code is obscured or missing. It does this by telling the scanner how much redundant information is stored in the code. Codes that may be damaged or partially hidden can be created with more redundancies to make sure the code still works, for instance if the code is going to be used on a package and there's no guarantee the package won't have a rough journey.

QR codes use Reed-Solomon error correction codes, invented in 1960 by Irving Reed and Gustave Solomon, two mathematicians and engineers. For more information I recommend checking out the [wikipedia article](https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction), since for me to explain how that works would take a whole separate blog post.

## Uses

Since the creation of the technology in 1994, QR codes have slowly but surely crept into daily life. Here are just a few uses that I find especially interesting.

### Restaurants

Even before the outbreak of COVID-19, you might have seen a QR code at a table or posted to the wall, enabling any customer to quickly scan the code with their phone and access the establishment's menu. When COVID happened, we saw this practice explode. Instead of having to trust that employees have properly sanitized paper menus, it is now almost ubiquitous that restaurant and bar patrons can access the full menu using their phones. This provides obvious convenience and safety improvements in a time where we all have to be careful of public spaces where people gather indoors. Although it does have its problems (I'm someone who can't stand seeing that I've downloaded the menu pdf 3 times already to my phone under a filename I would never remember or think to look for), the advantages are clear. While I do worry about technology being used for EVERYTHING without careful consideration, scanning menus is one use that I am totally on board for.

### Video Games

The video game Fez uses QR technology in an interesting way. To complete the game 100% the player will need to scan actual QR codes found on walls, which provide information about item locations and secrets. In addition to this, the game features its own alphabet, which looks like it was at least inspired by QR data bytes, which is used to convey similar information on non-scannable signs. Other modern games have utilized QR functionality but I haven't played them so I can't say too much. Either way, it's fair to say that QR codes will continue to be used for video games in innovative ways, and serve to give the player a feeling that the game isn't just happening on their TV or computer. Whether this immerses the players even more into the game's world or takes the players out of it is a matter of taste, both on the side of the developers and the players.

### Gravestones

QR codes have been etched into gravestones, linking to obituaries or presumably other information about the deceased. While this may initially come off as cringey and trendy, I see this as a clever way to preserve the information and its connection to the departed and their family least for the next century or so. Of course we don't know how long the servers will keep the information being linked, but then again I personally don't expect anybody to have that much interest in my life more than a hundred or so years after I leave. Etching the information directly into the stone is more permanant, but the QR link allows much more information to be stored on the stone, and with enough error correction the code should survive just as long if not longer than direct text. Is this method for everyone? Probably not. But I personally don't see anything wrong with this method, as tacky as it may seem at first.