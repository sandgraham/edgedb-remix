CREATE MIGRATION m1k54jubcs62wlzfebn3pxwwngajvlbf6c6qfslsuagkylg2fzv2lq
    ONTO initial
{
  CREATE TYPE default::Person {
      CREATE REQUIRED PROPERTY first_name -> std::str;
      CREATE REQUIRED PROPERTY last_name -> std::str;
  };
  CREATE TYPE default::Movie {
      CREATE MULTI LINK actors -> default::Person;
      CREATE LINK director -> default::Person;
      CREATE PROPERTY release_year -> std::int64;
      CREATE REQUIRED PROPERTY title -> std::str;
  };
};
