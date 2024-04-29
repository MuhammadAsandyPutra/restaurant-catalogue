import RestaurantList from "../components/RestaurantList";

export default function Home({restaurants}) {
  return (
    <div className='container'>
      <h1>Daftar Restoran</h1>
      <RestaurantList restaurants={restaurants} />
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }

        h1 {
          text-align: center;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
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