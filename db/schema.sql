CREATE TABLE houses (
id serial primary key,
name varchar(30),
address varchar(100),
city varchar(100),
state varchar(2),
zip integer,
img text,
mortgage decimal,
rent DECIMAL
);


INSERT INTO houses (name, address, city, state, zip, img, mortgage, rent)
VALUES (
    'Big Ol Blue',
    '123 AwesomeTown Ct',
    'AwesomeVille',
    'AW',
    12345,
    'https://images.unsplash.com/photo-1508352166619-a8a78d274947?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8c5526cfc2b6eb97bfb0aabe05c2b470&auto=format&fit=crop&w=500&q=60',
    87235.45,
    1000.90
    );
INSERT INTO houses (name, address, city, state, zip, img, mortgage, rent)
VALUES (
    'Tiny Ol Red',
    '193 AwesomeTown Ct',
    'AwesomeVille',
    'AW',
    54321,
    'https://images.unsplash.com/photo-1504527495944-e02e6fa33ec4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b82e2e2471a9d926e45841467cf7c7ba&auto=format&fit=crop&w=500&q=60',
    6452.35,
    400.80
    );

select * from houses;