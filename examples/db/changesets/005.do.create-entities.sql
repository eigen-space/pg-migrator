-- Entities
-- -------------------

create table entities (
    id          uuid                     default uuid_generate_v4() not null
        constraint entities_pkey
            primary key,
    full_name   text                                                not null
        constraint entities_unique_full_name
            unique,
    data        text                                                not null,
    natural_key text                                                not null,
    archived    boolean                  default false              not null,
    modified_at timestamp with time zone default now()
);
