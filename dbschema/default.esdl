module default {
  type Person {
    required property first_name -> str;
    required property last_name -> str;
  }

  type Movie {
    required property title -> str;
    property release_year -> int64;
    multi link actors -> Person;
    link director -> Person;
  }
}
