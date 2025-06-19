# Vim

I don't usually use [vim](https://www.vim.org/) on my machine, but it's a cool editor, and really useful when
working on remote servers.
These are some basic commands I use and usually forget.

```bash
# start typing ...
i => insert mode before the cursor
a => insert mode after the cursor
I => insert mode at the beginning of the line
A => insert mode at the end of the line
o => insert mode from a new line after the cursor
O => insert mode from a new line before the cursor

## navigation
gg => top of the file
G => end of the file
$ => end of the line
0 => begining of the line
{ => previous empty paragraph
} => next empty paragraph
H => first line on the screen
M => middle line on the screen
L => last line on the screen

w, W => one word (with space) forward
b, B => one word (with space) backwords

zt => sets the line with cursor at the top
zz => sets the line with cursor at the middle
zb => sets the line with cursor at the bottom

# search in file
/ => type search term and press enter
n => to the next result
N => to the previous result

# find other occurances of the term (without \)
\# => search forward
\* => search backwards

# important!
u => UNDO!
. => repeat

# deletion
dw => deletes a word
2dw => deletes 2 words (N words)
dd => deletes the entire line

# change (delete and enter insert mode)
cw => change word
2cw => change 2 words (N words)
cc => change the entire line

# yank (copy)
yw => copy word
yy or Y => copy entire line

# paste what was deleted by dd
p => paste after the cursor
P => paste before the cursor

# nav keys
j => down
k => up
h => left
l => right

# delete things (i => inner)
diTHING => delete inner THING
dit => delete the closest tag contents leave the tag
dat => delete the closest tag contents and the tag itself

# visually select
vw => select a word
V => select a line
vj, v2j, Vj, V12j => select a line and the N lines below

# .vimrc
syntax on
set relativenumber

```
