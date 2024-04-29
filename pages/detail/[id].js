/* eslint-disable @next/next/no-img-element */
export default function Detail({ restaurant }) {
    const { name, description, pictureId, menus: { foods, drinks } } = restaurant;
    return (
        <div className='container'>
            <img src={`https://restaurant-api.dicoding.dev/images/large/${pictureId}`} alt={name} className="restaurant-image" />

            <header>
                <h1>{name}</h1>
                <p>{description}</p>
            </header>

            <br />

            <main>
                <h2>Informasi Menu</h2>

                <div className="menu-section">
                    <div className="food-menu">
                        <h3>Makanan</h3>
                        <ul>
                            {foods.map((food, index) => (
                                <li key={index}>{food.name}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="drink-menu">
                        <h3>Minuman</h3>
                        <ul>
                            {drinks.map((drink, index) => (
                                <li key={index}>{drink.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>

            <style jsx>{`
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                }

                .restaurant-image {
                    max-width: 100%;
                    height: auto;
                    display: block;
                    margin-bottom: 20px;
                }

                header {
                    text-align: center;
                    margin-bottom: 20px;
                }

                main {
                    text-align: center;
                }

                .menu-section {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 40px;
                }

                .food-menu,
                .drink-menu {
                    flex: 1;
                    margin: 0 10px;
                }

                ul {
                    list-style: none;
                    padding: 0;
                }

                li {
                    margin-bottom: 8px;
                }
            `}</style>
        </div>
    );
}

export async function getStaticPaths(){
    const response = await fetch('https://restaurant-api.dicoding.dev/list');
    const { restaurants } = await response.json();

    const ids = restaurants.map((restaurant) => restaurant.id);


    return {
        paths: ids.map((id) => ({ params: {id}})),
        fallback: false,
    };
}


export async function getStaticProps({params}) {
    const response = await fetch(`https://restaurant-api.dicoding.dev/detail/${params.id}`);
    const { restaurant } = await response.json();

    return {
        props: {
            restaurant,
        }
    }
}