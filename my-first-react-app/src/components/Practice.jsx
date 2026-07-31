import Card from "./Card.jsx";
export default function Profile() {
  return (
    <div>
      <Card>
        <div className="card-content">
          <h1>Photo</h1>
          <img
            className="avatar"
            src="https://react.dev/images/docs/scientists/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
        </div>
      </Card>
      <Card>
        <div className="card-content">
          <h1>About</h1>
          <p>
            Aklilu Lemma was a distinguished Ethiopian scientist who discovered
            a natural treatment to schistosomiasis.
          </p>
        </div>
      </Card>
    </div>
  );
}
