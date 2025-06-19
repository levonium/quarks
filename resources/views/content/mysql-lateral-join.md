# MySQL Lateral Join

I love MySQL.

I have used it for many years, not only for projects like websites and apps, but also instead of Excel or any other
spreadsheet software.
I used to use Mac and Linux at the same time, and the best option for storing data was MySQL.
I could access it on both systems, or any system for that matter, and it is a great way to not think about how to
open a LibreOffice Calc file ona Mac.
Also, I can write quite complex queries for my data and I don't have to rely on the GUI of a spreadsheet software.

I used different programs to access my data, Sequel Pro, TablePlus, DBeaver, etc.
Now I use only Linux, and I don't have to care about compatibility with other systems,
but I still choose to use MySQL for storing data and I use DBeaver as my primary program.
I feel like I am in control of my data.

That being said, I am no expert in MySQL, but I know enough to get by.
The other day I was working on a project where I had to write some SQL queries.
I needed to write a query that would return some filtered and ordered rows from a table.
The important thing was that I needed to only get rows that ... I'll explain with an example.

Let's say we have a table called `people` with the following columns:

```sql
CREATE TABLE `people` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `city` varchar(255) NOT NULL,
  `profession` varchar(255) NOT NULL,
  -- other 20 columns
  PRIMARY KEY (`id`)
);
```

And we have the following rows:

```sql
INSERT INTO `people` (`name`, `age`, `city`, `profession`) VALUES
('Jane', 25, 'London', 'Programmer', --),
('John', 30, 'London', 'Dolphin Trainer', --),
('Jack', 35, 'Phnom Penh', 'Programmer', --),
('Jill', 40, 'Manila', 'Programmer', --),
('John', 25, 'Manila', 'Teacher', --),
('Jane', 30, 'Los Angeles', 'Teacher', --),
('Jack', 35, 'Phnom Penh', 'Teacher', --),
('Jill', 40, 'Los Angeles', 'Teacher', --),
('John', 25, 'Bangkok', 'Doctor', --),
('Jane', 30, 'Ottawa', 'Doctor', --),
-- 4000 more rows
```

Now, I needed to get rows where from each city there was only one person. So from London, I needed to get only Jane,
not John, because Jane came first.
Before I started writing the queries I was discussing with a client what data we needed, and I thought it was a
simple query.
I didn't think how I'd write the query, I just thought it was simple. Just select one person from each city. It
seemed something that MySQL would be able to do easily.
Actually, it does, the problem was that I didn't know how to do it.

Usually, when I need to write a query, I start with a simple query, and then I add more conditions, joins, etc.
Basically, every query starts with `SELECT * FROM table_name;` and then I add more conditions.
With time, I have learned how to think of queries in "MySQL way".
But this time it was difficult to "convert" my thoughts into a query.

I tried "GROUP BY", "DISTINCT", "HAVING", etc. but I couldn't get the result I wanted.
Then I decided to search online whether someone else had the same problem.
And again, it was difficult to find the right keywords to search for.
But I found it, I'm quite good and duckduckgo-ing.

The solution was "LATERAL JOIN". I had never heard of it before, but it was exactly what I needed.

This is the solution:

```sql
SELECT *
FROM (SELECT DISTINCT city FROM people p) cities,
LATERAL (
  SELECT * FROM people
  WHERE city = cities.city
  -- AND other conditions
  LIMIT 1
) data
  -- ORDER BY age ASC
  -- LIMIT 20;
```

I was so happy when I found the solution. I was able to write the query and get the data I needed.
How it works is that it first selects all the cities from the table, and then for each city it selects one row. Nice
and simple.

So, LATERAL JOINs are cool. I don't know if I'll ever need to use them again, but I'm glad I know about them now.
