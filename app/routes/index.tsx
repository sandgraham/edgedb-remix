import edgeql, { Movie, Person } from "~/__edgeql";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";
import { box, css } from "~/styles/stitches.config";

type LoaderData = { persons: Person[]; movies: Movie[] };

export const loader: LoaderFunction = async () => {
  const _persons = edgeql.select(edgeql.Person, () => ({
    id: true,
    first_name: true,
    last_name: true,
  }));
  const persons = await _persons.run(db);
  const _movies = edgeql.select(edgeql.Movie, () => ({
    id: true,
    title: true,
  }));
  const movies = await _movies.run(db);
  return json({ persons, movies });
};

const header = css({ fontFamily: "$serif", fontSize: 24 });

export default function Index() {
  const data = useLoaderData<LoaderData>();
  return (
    <div className="">
      <h2 className={header()}>Persons</h2>
      <ul className="">
        {data.persons.map((p) => (
          <li key={p.id} className="">
            {p.first_name} {p.last_name}
          </li>
        ))}
      </ul>
      <br />
      <h2 className={header()}>Movies</h2>
      <ul className="">
        {data.movies.map((m) => (
          <li key={m.id} className="">
            {m.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
