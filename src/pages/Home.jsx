import DATA from "../api/categories.json";
import CategoryBox from "../components/Category-Box";

function Home() {
  return (
    <div className="flex flex-wrap gap-3">
      {DATA.length > 0 &&
        DATA.map((title) => <CategoryBox data={title} key={title.id} />)}
    </div>
  );
}

export default Home;
