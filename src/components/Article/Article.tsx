import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import Typography from "@mui/material/Typography";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./Article.scss";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowRight from "../../icons/ArrowRight";

const Article: React.FC = () => {
  const { id } = useParams();
  const { fetchArticle } = useActions();
  useEffect(() => {
    fetchArticle(Number(id));
  }, []);
  const { article } = useTypedSelector((state) => state.article);
  return (
    <div className="wrapper">
      <div className="img-wrapper">
        <img
          src={`${article?.imageUrl}`}
          alt="article img"
          className="img-article"
        />
      </div>
      <div className="article-wrapper">
        <div className="article-text">
          <Typography
            sx={{
              fontSize: "24px",
              paddingTop: "35px",
              paddingBottom: "50px",
              fontFamily: "Montserrat, sans-serif",
            }}
            component="div"
          >
            {article?.title}
          </Typography>
          <Box sx={{ fontFamily: "Montserrat, sans-serif", marginTop: "50px" }}>
            {article?.summary}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quam
            odit ducimus, omnis porro enim soluta perferendis magni hic vel
            quisquam tempore consequatur placeat nostrum sit adipisci quas,
            illum aliquam! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. At eveniet neque voluptatem quas pariatur esse incidunt
            delectus voluptatibus iusto beatae modi, error, temporibus ipsam,
            laboriosam doloribus quo perspiciatis minus dolorum! Odio repellat
            delectus eligendi laboriosam accusantium ratione id soluta
            temporibus nostrum saepe sit, porro, voluptatum quia deserunt? Nulla
            quam quidem similique quisquam soluta rerum nobis, libero aut?
            Inventore, ad ipsam! Cupiditate expedita provident molestias?
            Doloribus, quae unde? Veritatis sapiente placeat, magni, unde dicta
            quisquam quo dolorum, ea vel culpa sunt. Minus unde corrupti est
            deleniti excepturi labore distinctio accusantium in.
          </Box>
        </div>
      </div>
      <Link to="/" className="link-back">
        <ArrowRight />
        <Box sx={{ marginLeft: "6px" }}>Back to homepage</Box>
      </Link>
    </div>
  );
};

export default Article;
