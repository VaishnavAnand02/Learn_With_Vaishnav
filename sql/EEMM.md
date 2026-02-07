# Employees Earning More Than Their Managers

## Problem Overview
**Level:** Easy  
**Topic:** SQL / Joins

### Table: Employee
| Column Name | Type    |
| :---        | :---    |
| id          | int     |
| name        | varchar |
| salary      | int     |
| managerId   | int     |

- `id` is the primary key for this table.
- Each row indicates the ID of an employee, their name, salary, and the ID of their manager.

---

## Task
Write a solution to find the employees who earn more than their managers. Return the result table in any order.

### Example 1
**Input:** `Employee` table:
| id | name  | salary | managerId |
|:---|:------|:-------|:----------|
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | Null      |
| 4  | Max   | 90000  | Null      |

**Output:** table: 
| Employee |
|:---------|
| Joe      |

**Explanation:** Joe is the only employee who earns more than his manager (70,000 > 60,000).

---

## Solution (PostgreSQL)

```sql
/* Write your PostgreSQL query statement below */
SELECT 
    e.name AS Employee
FROM 
    Employee e
JOIN 
    Employee m ON e.managerId = m.id
WHERE 
    e.salary > m.salary;
```

## Explanation & Notes

### 1. The Core Concept: Self-Join
This problem requires comparing rows within the same table. To do this, we use a **Self-Join**. We treat the `Employee` table as two virtual tables:
* **Table `e` (Employee):** Represents the subordinates we are checking.
* **Table `m` (Manager):** Represents the managers we are comparing them against.

### 2. The Join Logic
We use the condition `e.managerId = m.id`.

This tells the database: "Find the row in table `e`, look at the `managerId`, and then go find the row in table `m` where that value matches the `id`."

**Inner Join vs. Left Join:** We use a standard `JOIN` (Inner Join). This automatically filters out employees who have a Null `managerId` (like Sam or Max), because a Null value cannot be joined to an ID.



### 3. The Comparison
Once the rows are joined, we have the employee's salary and their manager's salary side-by-side in a single virtual row. The `WHERE e.salary > m.salary` then performs the final check.