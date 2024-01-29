import { Link } from "react-router-dom";

function CategoryBox({ data }) {
  return (
    <Link to={`shop/${data.title}`}>
      <div className="max-w-[370px] min-w-[200px] relative cursor-pointer transition-all hover:scale-105 ">
        <img src={data.imageUrl} alt={data.title} className="rounded-lg" />

        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] py-2 px-4 backdrop-blur-md bg-[#ffffffbe] rounded">
          <h1 className="capitalize font-bold">{data.title}</h1>
        </div>
      </div>
    </Link>
  );
}

export default CategoryBox;
