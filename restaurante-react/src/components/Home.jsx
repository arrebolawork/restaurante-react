export default function Home({ dishes }) {
  return (
    <div>
      <fieldset>
        <legend>este es el componente home</legend>

        {dishes.map((plato) => (
          <ul key={plato.id}>
            <li>{plato.name}</li>
            <li>{plato.description}</li>
            <li>{plato.price}</li>
          </ul>
        ))}
      </fieldset>
    </div>
  );
}
