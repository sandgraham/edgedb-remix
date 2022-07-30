import * as edgedb from "edgedb";
import e, { Person } from "../dbschema/edgeql-js";

const client = edgedb.createClient();

run();

async function run() {
  const _persons = e.select(e.Person, () => ({
    first_name: true,
    last_name: true,
  }));
  const persons = await _persons.run(client);
  const _movies = e.select(e.Movie, () => ({ title: true }));
  const movies = await _movies.run(client);

  console.log(persons.map((p) => `${p.first_name} ${p.last_name}`));
  console.log(movies.map((m) => m.title));
}

type PersonArgs = Pick<Person, "first_name" | "last_name">;
async function insertPerson(person: PersonArgs) {
  const query = e.insert(e.Person, person);
  const result = await query.run(client);
  console.log(result);
  return result;
}
