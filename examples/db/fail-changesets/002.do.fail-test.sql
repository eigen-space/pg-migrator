-- NOTE without BEGIN/END you could end up with partial implemented migration, which is bad
-- Postgres and SQL Server implicitly wrap 1 multi-statement execution in a transaction by default
-- MySQL however does not, and you are left with partial migration implemented
begin
insert into widgets (name)
values ('widget one');
insert into widgets (name)
values ('widget two');
This isn't sql and its gonna break
    INSERT INTO widgets (name) VALUES ('widget three');
END