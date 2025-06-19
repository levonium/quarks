# Clone Stuff in MySQL

When I need to quickly copy or back up a table or an entire database on my local machine, these are the go-to methods I use.

## Clone a MySQL Database

MySQL (and MariaDB) doesn’t include a built-in CLONE DATABASE command, but you can replicate a database with a simple 3-step process:

```bash
# 1. Export the original database
mysqldump -u db_user -p original_db > original_db.sql

# 2. Create a new (empty) database
mysql -u db_user -p -e "CREATE DATABASE cloned_db"

# 3. Import the dump into the new database
mysql -u db_user -p cloned_db < original_db.sql
```

## Clone a MySQL Table

There’s no CLONE TABLE statement in MySQL, but copying both the structure and data is straightforward:

```bash
# Log into the MySQL client
mysql -u db_user -p
```

```sql
-- 1. Copy the table structure (schema only)
CREATE TABLE cloned_table LIKE original_table;

-- 2. Copy the data
INSERT INTO cloned_table SELECT * FROM original_table;
```
