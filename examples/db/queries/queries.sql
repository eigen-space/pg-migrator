select
    case when table_name = 'entities'
             then false
         else true
        end
from information_schema.tables
where table_schema = 'public'
  and table_name = 'entities';

select *
from information_schema.tables
where table_schema = 'public'
  and table_name = 'entities';

select version
from changelog
order by version desc
limit 1;

create extension if not exists "uuid-ossp";
drop extension if exists "uuid-ossp" cascade;

create table persons (
    id   uuid default uuid_generate_v4() not null
        constraint persons_pkey
            primary key,
    name text,
    age  numeric
);

-- noinspection SqlConstantCondition
delete from changelog where 1 = 1;