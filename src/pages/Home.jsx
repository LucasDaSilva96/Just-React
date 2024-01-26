import DATA from "../api/categories.json";
import CategoryBox from "../components/Category-Box";

function Home() {
  return (
    <div className="px-2 flex flex-col w-full items-center gap-2">
      <div>
        <h1 className="text-center text-3xl font-black py-2 underline">
          Step into style with Just React
        </h1>
        <p className="max-w-[650px] text-lg tracking-wide leading-7 py-2">
          <em>
            Where fashion meets comfort! Explore our curated collection of
            trendy clothes and shoes designed to elevate your wardrobe. Unleash
            your individuality and shop the latest in fashion effortlessly.
            Click, browse, and Just React to your new style journey now!
          </em>
        </p>
      </div>
      <div className="flex flex-wrap gap-3 min-w-[375px] max-w-[1200px] self-center pb-5  ">
        {DATA.length > 0 &&
          DATA.map((title) => <CategoryBox data={title} key={title.id} />)}
      </div>
    </div>
  );
}

export default Home;
