do
$do$
    begin
        if (not exists(
                select
                from information_schema.tables
                where table_schema = 'public'
                  and table_name = 'persons'
            ))
        then
            create table persons (
                id   uuid default uuid_generate_v4() not null
                    constraint persons_pkey
                        primary key,
                name text,
                age  numeric
            );
        end if;
    end
$do$;