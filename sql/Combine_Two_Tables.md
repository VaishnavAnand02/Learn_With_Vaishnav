# Combine Two Tables

## Problem Description
**Table: Person**
| Column Name | Type    |
| :--- | :--- |
| personId    | int     |
| lastName    | varchar |
| firstName   | varchar |

`personId` is the primary key for this table.

**Table: Address**
| Column Name | Type    |
| :--- | :--- |
| addressId   | int     |
| personId    | int     |
| city        | varchar |
| state       | varchar |

`addressId` is the primary key for this table.

---

## Goal
Write a solution to report the **first name**, **last name**, **city**, and **state** of each person in the `Person` table. If the address of a `personId` is not present in the `Address` table, report `null` instead.


## Solution (PostgreSQL)
```sql
SELECT 
    firstName, 
    lastName, 
    city, 
    state
FROM Person
LEFT JOIN Address 
    ON Person.personId = Address.personId;
```

## Note
We use a LEFT JOIN here because we need to retain all records from the Person table regardless of whether a matching personId exists in the Address table.