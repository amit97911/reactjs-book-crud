-- For Educational purpose only. DB SQL should not be made pulic on git.
-- Lists all database
show databases;

-- Create database named 'reactjs'
create database reactjs;

-- Use newly created database named 'reactjs'
use reactjs;

-- drop table books if not req
drop table books;

-- create table named 'books' if it does not exist
create table
    if not exists books (
        id int primary key not null auto_increment,
        title varchar(55) not null,
        description varchar(222) not null,
        price double(10,2) not null default 0,
        cover varchar(55) not null
    );

-- View structure of table 'books' 
desc books;

-- list all rows in table 'books'
select
    *
from
    books;

-- Insert items in table 'books'
INSERT INTO
    `books` (`title`, `description`,`price`, `cover`)
VALUES
    (
        'first book',
        'first book description',
        100.00,
        'first_cover.png'
    ),
    (
        'second book',
        'second book description',
        100.00,
        'second_cover.png'
    ),
    (
        'third book',
        'third book description',
        100.00,
        'third_cover.png'
    ),
    (
        'fourth book',
        'fourth book description',
        100.00,
        'fourth_cover.png'
    ),
    (
        'fifth book',
        'fifth book description',
        100.00,
        'fifth_cover.png'
    );
    


