import RestaurantList from "../components/RestaurantList";
import Container from "../components/styled/Container";

export default function Home({restaurants}) {
  return (
    <Container maxWidth = "80%">
      <h1>Daftar Restoran</h1>
      <RestaurantList restaurants={restaurants} />
    </Container>
  );
}


export async function getStaticProps() {
  const response = await fetch('http://restaurant-api.dicoding.dev/list');
  const {restaurants} = await response.json();

  return {
    props: {
      restaurants,
    },
  }
}