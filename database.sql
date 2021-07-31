create extension pgcrypto;
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  username varchar(32) UNIQUE NOT NULL,
  password varchar(64) NOT NULL,
  isAdmin boolean DEFAULT false
);

CREATE TABLE category (
  category_id SERIAL PRIMARY KEY NOT NULL,
  category_name varchar(32) UNIQUE NOT NULL
);

CREATE TABLE media (
  media_id SERIAL PRIMARY KEY NOT NULL,
  media_name varchar(128) NOT NULL,
  media_path varchar(128),
  mime_type varchar(64)
);

CREATE TABLE products (
  product_id SERIAL PRIMARY KEY NOT NULL,
  product_name varchar(32) NOT NULL,
  product_char text,
  media_id int NOT NULL,
  category_id int NOT NULL,
  product_cost int,
  count smallint
);

CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY NOT NULL,
  product_id int,
  user_id int,
  count smallint
);

CREATE TABLE city (
  city_id SERIAL PRIMARY KEY NOT NULL,
  city_name varchar(64)
);

CREATE TABLE region (
  region_id SERIAL PRIMARY KEY NOT NULL,
  city_id int,
  region_name varchar(64)
);

CREATE TABLE address (
  address_id SERIAL PRIMARY KEY NOT NULL,
  user_id int,
  region_id int,
  address varchar(256)
);

