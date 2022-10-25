import { Link, useParams } from "react-router-dom";
import groups from "../../assets/grouped";

const Category = () => {
  const { categoryId } = useParams();
  const data = groups[categoryId].data ?? []; // if data is undefined, set as empty array to not break
  return (
    <>
      <Link to="/">back</Link>

      <h2>Category: {groups[categoryId].title}</h2>
      {data.length > 0 ? (
        <ul>
          {data.map((x, i) => {
            return (
              <li key={i}>
                <Link to={`${i + 1}`}>{x.question}</Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
};

export default Category;
