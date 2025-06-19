# Finding Files using Command Line

Several useful commands for interactions with files and directories.

## Find all files recursively by name

```shell
# returns a list of all files and directories recursively exactly matching the NAME
find . -name 'NAME'

# returns a list of all files (skips directories) recursively exactly matching the NAME
find . -name '.NAME' -type f

# returns a list of all directories (skips files) recursively exactly matching the NAME
find . -name '.NAME' -type d
```

Some examples:

```shell
# finds and lists all '.js' files (recursively starting the current directory)
find . -name '*.js' -type f

# finds and lists all files except '.js' (recursively starting the current directory)
find . \! -name '*.js' -type f

# finds and deletes all '.DS_Store' files starting the current directory, recursively.
find . -name '.DS_Store' -type f -delete
```

## Find all files recursively by their content

Perhaps there's a better way for doing this, but this does it, too.

```shell
# Returns a lit of all occurrences of the string "oh dear"
grep -rnw ./ -e 'oh dear'

# Returns a lit of all files containing the string "oh dear"
grep -rwl ./ -e 'oh dear'

# options
-r is for recursive search (can be -R as well)
-n is for printing rhe line number
-w is for matching whole words
-l is for printing just file names
-e is for the patters to search
-i wil make the search case insensitive
